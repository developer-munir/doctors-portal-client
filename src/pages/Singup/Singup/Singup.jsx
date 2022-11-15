import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Singup = () => {
  const { signupUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signupUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[385px] mx-auto border p-7">
      <div>
        <h1 className="text-center text-2xl">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600">
                Name is required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />

            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-600">
                Email is required
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />

            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-600">
                Password is required
              </p>
            )}
            <label className="label">
              <span className="label-text">Forgot Password</span>
            </label>
          </div>
          <input
            type="submit"
            value="Signup"
            className="btn w-full btn-accent mt-8 mb-3"
          />
          <p>
            <Link className="text-secondary" to="/login">
              Already have an account?
            </Link>
          </p>
          <div className="divider">OR</div>
        </form>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Singup;
