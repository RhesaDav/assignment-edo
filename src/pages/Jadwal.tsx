import React from "react";
import AdminLayout from "../layout/AdminLayout";
import httpService from "../services/service";
import moment from "moment";

const Jadwal = () => {
  const [userList, setUserList] = React.useState([]);
  const [jadwal, setJadwal] = React.useState([]);
  const fetchJadwal = () => {
    httpService.listJadwal().then((res: any) => {
      setJadwal(res.data.message);
    });
  };

  const fetchUser = () => {
    httpService.listUser().then((res: any) => {
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
    httpService.addJadwal(data).then((res: any) => {
      console.log(res);
    });
    fetchJadwal();
    console.log(data);
  };

  React.useEffect(() => {
    fetchUser();
    fetchJadwal();
  }, []);
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold text-center">Jadwal</h1>
      <div>
        <form
          onSubmit={formSubmit}
          className="bg-base-300 w-1/3 p-3 rounded-2xl flex-col flex gap-2"
        >
          <h1>Add Jadwal</h1>
          <div className="flex gap-5">
            <input type="date" className="input w-full w-48 bg-base-200" />
            {/* <input type="date" name="" id="" /> */}
            <select onChange={handleChange} className="select bg-base-200">
              <option disabled hidden>
                Select User
              </option>
              {userList.map((item: any, index) => (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="flex gap-5 my-5">
          {jadwal.map((item: any, index) => {
            return (
              <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {moment(item.tanggal).format("DD MMM YYYY")}
                  </h2>
                  {item.user.map((user: any, index: any) => {
                    return <p>{user.name}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Jadwal;
