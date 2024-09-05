import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqonmoqb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl pt-4 pl-6 pb-7  px-4 md:px-10  mt-6 mx-6 bg-[#1e1e1e] text-white"
      >
        <h1 className="text-2xl font-bold mb-4 text-red-700 ">Contact me</h1>
        <span className="text-sm text-gray-300">Please fill out the form below to contact me</span>
        <div className=" flex  flex-col items-center justify-center mt-5 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="bg-red-300 md:w-96 w-91 px-8 py-6 rounded-xl "
          >
            <h1 className="text-2xl text-black font-semibold  mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-black">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-7 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-[#1f1e1e] text-white rounded-xl px-3 py-2 hover:bg-[#2e2e2e] duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
