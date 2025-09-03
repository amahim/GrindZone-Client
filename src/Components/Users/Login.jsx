import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

const Login = () => {
  const { setUser, userSignIn } = useContext(AuthContext);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //       const userInfo = {
  //         name: user.displayName,
  //         email: user.email,
  //         photo: user.photoURL,
  //         membership: "Bronze",
  //         role: "User"
  //       };
  //       axiosPublic.post("/users", userInfo).then((res) => {
  //         if (res.data.insertedId) toast.success("Login Successful!");
  //       });
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch(() => {
  //       setUser(null);
  //       toast.error("Google Sign-In failed. Please try again.");
  //     });
  // };

  const onSubmit = (data) => {
    const { email, password } = data;
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => toast.error("Login failed. Please check your email and password."));
  };

  return (
    <div className="flex items-center justify-center bg-[#5F7252]">
      <div className="w-full max-w-md">
        <div className="text-center  mb-6">
          <h1 className="text-3xl font-bold text-white">Login to Your Account</h1>
          <p className="text-[#97FB57] mt-2">Welcome back! Please login to continue</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow-xl p-8 space-y-6"
        >
          {/* Email */}
<div className="form-control flex flex-row items-center gap-4">
  <label className="font-semibold text-black w-24">
    Email:
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="input input-bordered border-black text-black placeholder-gray-600 focus:border-[#97FB57] focus:ring focus:ring-[#97FB57] flex-1"
    {...register("email", { required: "Email is required" })}
  />
</div>
{errors.email && (
  <p className="text-red-600 text-sm mt-1 ml-24">{errors.email.message}</p>
)}

{/* Password */}
<div className="form-control flex flex-row items-center gap-4 mt-4">
  <label className="font-semibold text-black w-24">
    Password:
  </label>
  <input
    type="password"
    placeholder="Enter your password"
    className="input input-bordered border-black text-black placeholder-gray-600 focus:border-[#97FB57] focus:ring focus:ring-[#97FB57] flex-1"
    {...register("password", {
      required: "Password is required",
      minLength: { value: 6, message: "Password must be at least 6 characters" },
    })}
  />
</div>
{errors.password && (
  <p className="text-red-600 text-sm mt-1 ml-24">{errors.password.message}</p>
)}


          {/* Login Button */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn w-full bg-[#97FB57] text-black font-semibold hover:bg-[#86e54d]"
            >
              Login
            </button>
          </div>

          {/* Register Link */}
          {/* <p className="text-center text-black">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#97FB57] font-semibold hover:underline">
              Register
            </Link>
          </p> */}

          {/* Divider */}
          {/* <div className="divider text-black">Or</div> */}

          {/* Google Sign In */}
          {/* <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full btn border-black text-black hover:bg-[#97FB57] hover:text-black flex items-center justify-center gap-2"
          >
            <FaGoogle /> Login With Google
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
