import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleLogin = (data) => {
    // console.log(data)
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-[385px] mx-auto border p-7">
      <div>
        <h1 className="text-center text-2xl">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Forgot Password</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn w-full btn-accent mt-8 mb-3"
          />
          <p>
            New to Doctors Portal?
            <Link className="text-secondary" to="/signup">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
