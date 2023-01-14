import React from "react";
import Form from "../components/Form";
import { httpService } from "../services/service";
import { useNavigate } from "react-router-dom";
import LoginInterface from "../models/login";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState("user");
  const [error,setError] = React.useState(false)

  const submitForm = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    const data: LoginInterface = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(data);
      if (role === "admin") {
        httpService.loginAdmin(data).then((res) => {
          console.log(res);
          if (res.status === 200 && res.statusText === "OK") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate('/admin/home')
            // window.location.reload()
          }
        }).catch((error) => {
          setError(true)
        })
      } else if (role === "user") {
        httpService.loginUser(data).then((res) => {
          if (res.status === 200 && res.statusText === "OK") {
            console.log(res)
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            navigate('/user/home')
            // window.location.reload()
          }
        }).catch((error) => {
          console.log(error)
          setError(true)
        })
      }
  };

  const handleRole = (event: any) => {
    setRole(event.target.value);
  };

  React.useEffect(() => {
    // if (localStorage.getItem('token')) return navigate('/')
  },[])
  return (
    <div>
      <select onChange={handleRole}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      {error? 
      <h1>Login Gagal</h1>
      : ''}
      <Form submitForm={submitForm} />
    </div>
  );
};

export default Login;
