import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { httpService } from "../services/service";
import moment from "moment";

const Jadwal = () => {
  const [userList, setUserList] = React.useState([]);
  const [jadwal, setJadwal] = React.useState([]);
  const fetchJadwal = () => {
    httpService.listJadwal().then((res) => {
      setJadwal(res.data.message);
    });
  };

  const fetchUser = () => {
    httpService.listUser().then((res) => {
      setUserList(res.data.message);
    });
  };

  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      tanggal: event.target[0].value,
      user: event.target[1].value,
    };
    httpService.addJadwal(data).then((res) => {
      console.log(res);
    });
    console.log(data);
  };

  React.useEffect(() => {
    fetchUser();
    fetchJadwal();
  }, []);
  return (
    <AdminLayout>
      <h1>Jadwal</h1>
      <div>
        <h1>Add Jadwal</h1>
        <form onSubmit={formSubmit}>
          <input type="date" name="" id="" />
          <select onChange={handleChange}>
            <option disabled hidden>
              Select User
            </option>
            {userList.map((item: any, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
        <div className="flex gap-5">
        {jadwal.map((item: any, index) => {
          return (
            <div className="bg-red-100">
              <h1>{moment(item.tanggal).format('DD MMM YYYY')}</h1>
              {item.user.map((user:any,index:any) => {
                return (
                  <h1>{user.name}</h1>
                )
              })}
            </div>
          );
        })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Jadwal;
