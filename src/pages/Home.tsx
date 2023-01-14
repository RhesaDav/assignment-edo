import React from "react";
import AdminInterface from "../models/admin";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { httpService } from "../services/service";
import Form from "../components/Form";
import AdminLayout from "../layout/AdminLayout";

const Home = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = React.useState(false);
  const [userList, setUserList] = React.useState<any>([]);

  const fetchData = () => {
    httpService.listUser().then((res) => {
      setUserList(res.data.message);
    });
  }

  React.useEffect(() => {
    fetchData()
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
  }, []);

  const addUser = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      gender: event.target[3].value,
      role: 1,
    };
    console.log(data);
    httpService.registerUser(data).then((res) => {
      console.log(res);
      fetchData()
    });
  };

  return (
    <AdminLayout>
      <button onClick={() => setShowForm(!showForm)}>Add User</button>
      {showForm ? <Form submitForm={addUser} isRegister={true} /> : ""}
      <div>
        <h1>List User</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
              {userList.map((item:any,index:any) => (
            <tr key={index}>
              <td className="border border-black">{item._id}</td>
              <td className="border border-black">{item.name}</td>
              <td className="border border-black">{item.email}</td>
              <td className="border border-black">{item.createdAt}</td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Home;
