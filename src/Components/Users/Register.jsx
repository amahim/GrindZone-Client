import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
const img_hosting_key = import.meta.env.VITE_image_api_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (res.data.success) {
      const photo = res.data.data.display_url;
      const { name, email, password } = data;

      const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
      if (!regex.test(password)) {
        toast.error(
          "Password must have at least one uppercase, one lowercase letter, and 6+ characters"
        );
        return;
      }

      createNewUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);

          updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photo });

              const userInfo = {
                name,
                email,
                photo,
                membership: "Bronze",
                role: "User",
              };

              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) toast.success("Registration Successful!");
              });

              navigate(location?.state?.from || "/");
            })
            .catch((err) => console.error(err));
        })
        .catch((error) => toast.error(error.message));
    } else {
      toast.error("Failed to upload image.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#5F7252] ">
      <div className="w-full max-w-md ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Register Your Account</h1>
          <p className="text-[#97FB57] mt-2">Join us! Fill in the details to continue</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow-xl p-8 space-y-6 "
        >
          {/* Name */}
          <div className="form-control flex flex-row items-center gap-4">
            <label className="font-semibold text-black w-24">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered border-black text-black placeholder-gray-600 focus:border-[#97FB57] focus:ring focus:ring-[#97FB57] flex-1"
              {...formRegister("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && <p className="text-red-600 text-sm mt-1 ml-24">{errors.name.message}</p>}

          {/* Image */}
          <div className="form-control flex flex-row items-center gap-4 mt-4">
            <label className="font-semibold text-black w-24">Image:</label>
            <input
              type="file"
              className="file-input file-input-bordered flex-1"
              {...formRegister("image", { required: "Image is required" })}
            />
          </div>
          {errors.image && <p className="text-red-600 text-sm mt-1 ml-24">Image is required</p>}

          {/* Email */}
          <div className="form-control flex flex-row items-center gap-4 mt-4">
            <label className="font-semibold text-black w-24">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered border-black text-black placeholder-gray-600 focus:border-[#97FB57] focus:ring focus:ring-[#97FB57] flex-1"
              {...formRegister("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && <p className="text-red-600 text-sm mt-1 ml-24">{errors.email.message}</p>}

          {/* Password */}
          <div className="form-control flex flex-row items-center gap-4 mt-4">
            <label className="font-semibold text-black w-24">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered border-black text-black placeholder-gray-600 focus:border-[#97FB57] focus:ring focus:ring-[#97FB57] flex-1"
              {...formRegister("password", { required: "Password is required" })}
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-1 ml-24">{errors.password.message}</p>
          )}

          {/* Register Button */}
          <div className="form-control mt-4">
            <button className="btn w-full bg-[#97FB57] text-black font-semibold hover:bg-[#86e54d]">
              Register
            </button>
          </div>

          {/* Login Link */}
          {/* <p className="text-center text-black mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#97FB57] font-semibold hover:underline">
              Login
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
