import React from "react";
import { httpService } from "../services/service";
import UserInterface from "../models/user";
import {useNavigate} from 'react-router-dom'

const Form = ({isRegister, submitForm}:any) => {
  return (
    <>
    <div className="flex justify-center">
      <div className="bg-gray-200 p-5 w-72">
        {isRegister? <h1>Register</h1>: <h1>Login</h1>}
        <form onSubmit={submitForm} className="flex flex-col gap-5">
          {isRegister? <input type="text" placeholder="name" /> : ''}
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {isRegister? (
          <select>
            <option value="male">Male</option>
            <option value='female'>Female</option>
          </select>
          ) : ''}
          <button type="submit" className="bg-red-100">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Form;
