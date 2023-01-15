import React from "react";
import httpService from "../services/service";
import UserInterface from "../models/user";
import { useNavigate } from "react-router-dom";

const Form = ({ isRegister, submitForm }: any) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-base-200 rounded-xl p-5 w-72">
          <h1 className="text-2xl font-semibold text-center mb-5">
          {isRegister ? 'Register' : 'Login'}
          </h1>
          <form onSubmit={submitForm} className="flex flex-col gap-5">
            {isRegister ? (
                          <div className="form-control w-full max-w-xs">
                          <input
                            type="text"
                            placeholder="Type Your Name"
                            className="input input-bordered w-full max-w-xs"
                          />
                        </div>
            ) : ""}
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* <input type="email" placeholder="email" /> */}
            {/* <input type="password" placeholder="password" /> */}
            {isRegister ? (
              <select className="select">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              ""
            )}
            <button type="submit" className="btn bg-base-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
