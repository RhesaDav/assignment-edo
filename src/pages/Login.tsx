import React from "react";
import Form from "../components/Form";
import httpService from "../services/service";
import { useNavigate } from "react-router-dom";
import LoginInterface from "../models/login";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState("user");
  const [error, setError] = React.useState(false);

  const submitForm = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    const data: LoginInterface = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(data);
    if (role === "admin") {
      httpService
        .loginAdmin(data)
        .then((res: any) => {
          console.log(res);
          if (res.status === 200 && res.statusText === "OK") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/admin/home");
            // window.location.reload()
          }
        })
        .catch(() => {
          setError(true);
        });
    } else if (role === "user") {
      httpService
        .loginUser(data)
        .then((res: any) => {
          if (res.status === 200 && res.statusText === "OK") {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            navigate("/user/home");
            // window.location.reload()
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  const handleRole = (event: any) => {
    setRole(event.target.value);
  };

  React.useEffect(() => {
    // if (localStorage.getItem('token')) return navigate('/')
  }, []);
  return (
    <div className="flex flex-col gap-5 my-24">
      <div className="flex justify-center">
        <div className="bg-base-200 p-4 rounded-2xl flex gap-5 items-center">
        <h1>Logged In As :</h1>
        <select onChange={handleRole} className="select w-48">
        <option selected value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        </div>
      </div>
      {error ? (
        <div className="alert fixed bottom-10 right-10 alert-error shadow-lg w-48">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Login Failed</span>
        </div>
      </div>
      ) : ""}
      <Form submitForm={submitForm} />
    </div>
  );
};

export default Login;
