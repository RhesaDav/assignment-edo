import React from "react";
import AdminInterface from "../models/admin";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import httpService from "../services/service";
import Form from "../components/Form";
import AdminLayout from "../layout/AdminLayout";
import moment from "moment";

const Home = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = React.useState(false);
  const [userList, setUserList] = React.useState<any>([]);

  const fetchData = () => {
    httpService.listUser().then((res) => {
      setUserList(res.data.message);
    });
  };

  React.useEffect(() => {
    fetchData();
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
      fetchData();
    });
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl text-center font-semibold">List User</h1>
      <div className="flex justify-end p-5">
      <label htmlFor="my-modal-4" className="btn">
        Add User
      </label>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className=" relative" htmlFor="">
          <Form submitForm={addUser} isRegister={true} />
        </label>
      </label>
      {showForm ? <Form submitForm={addUser} isRegister={true} /> : ""}
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item: any, index: any) => (
                <tr className="hover" key={index}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{moment(item.createdAt).format('dddd, DD MMM YYYY')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
