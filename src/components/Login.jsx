import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

import SignInWithGoogle from "./FirebaseAuthStates/GoogleLogin";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // backend logic to send data to the server
    try {
      setLoader(true);

      await signInWithEmailAndPassword(auth, Email, password);
      console.log("User logged in successfully");
    } catch (error) {
      console.error(error.message);
    }

    setLoader(false);
  };

  return (
    <>
      <main className="h-[50vh] w-full">
        <div className="border-2 border-black rounded-md w-fit py-20 px-5 absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="text-center ">
            <h1 className="text-3xl my-4 underline">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4" action="">
              <div className="input grid grid-cols-3">
                <label className="text-xl" htmlFor="">
                  Email :
                </label>
                <input
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none px-2 py-1 col-span-2 rounded-md border-2"
                  type="text"
                  placeholder="name@hex.com"
                />
              </div>
              <div className="input grid grid-cols-3">
                <label className="text-xl" htmlFor="">
                  Password :
                </label>
                <input
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="outline-none px-2 py-1 col-span-2 rounded-md border-2"
                  type="password"
                  placeholder="********"
                />
              </div>
              <button
                disabled={Loader}
                type="submit"
                className=" border-[1px] rounded-lg text-xl px-2 py-1"
              >
                {Loader ? <span>Logiing in</span> : <span>Login</span>}
              </button>
            </form>
            <div className="text-center">
              <p>-----------or-----------</p>
              <h2>
                Dont't have an account{" "}
                <a className="text-blue-600 font-semibold" href="/register">
                  Signup
                </a>
              </h2>
            </div>
            <div className="text-center">
              <SignInWithGoogle />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
