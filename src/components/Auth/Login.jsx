import React from "react";

const Login = () => {

    const handleSubmit =()=>{
        
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form className="flex flex-col items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
          <input
            className=" outline-none placeholder:text-gray-400 bg-transparent text-xl border-2 border-emerald-600 py-2 px-4 mt-5 rounded-full"
            type="email"
            required
            placeholder="Enter your Email"
          />
          <input
            className=" outline-none placeholder:text-gray-400 bg-transparent text-xl border-2 border-emerald-600 py-2 px-4 mt-5 rounded-full"
            type="password"
            required
            placeholder="Enter Password"
          />
          <button
            className="w-full border-2 text-xl outline-none border-none rounded-full font-bold text-white bg-emerald-600 mt-7 py-2 px-8"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
