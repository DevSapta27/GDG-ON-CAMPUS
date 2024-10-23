import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    const navigate=useNavigate()
  const googleLogin = () => {
    const provider =new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(res=>{
        console.log(res)
        
    })
  };

  return (
    <div>
      <p className="text-center text-white">
        -----------------Or------------------
      </p>
      <button onClick={googleLogin} className="flex justify-center items-center ml-[65px]">
        <img
          className="h-[50px]  "
          src="https://imgs.search.brave.com/dVc8SRcCzSL0aZjYTO2ZTEEjqclJMhYxGF5Ei6huxK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX250X3Nx/X2xnLnN2Zw"
          alt=""
        />
      </button>
    </div>
  );
};

export default SignInWithGoogle;
