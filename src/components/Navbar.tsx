import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({isAdmin}: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload()
    navigate("/");
  };

  return (
    <div className="bg-red-200 p-2 flex justify-between items-center">
      <h1>{isAdmin? 'Admin' : 'User'}</h1>
        {isAdmin? (
      <ul className="flex gap-5 bg-blue-100 p-3">
        <li>    
          <Link to={`${isAdmin? '/admin': '/user'}/home`}>Home</Link>
        </li>
        <li>
          <Link to={`${isAdmin? '/admin': '/user'}/absen`}>Absen</Link>
        </li>
        <li>
          <Link to={`${isAdmin? '/admin': '/user'}/jadwal`}>Jadwal</Link>
        </li>
      </ul>
        ): ''}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
