import { RecoilRoot, useRecoilState } from "recoil";
import { Heading1, Subheading } from "../components/Heading";
import { Inputbox } from "../components/Inputboxes";
import { username, userfirstname, userlastname, userpassword } from "../atoms/signupatoms";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import spicesbg from '../assets/spicesbg.jpg'

export function SignupPage() {
    const [firstname, setFirstname] = useRecoilState(userfirstname);
    const [lastname, setLastname] = useRecoilState(userlastname);
    const [usernames, setUsername] = useRecoilState(username);
    const [password, setPassword] = useRecoilState(userpassword);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const handleSignup = () => {
        axios.post("http://localhost:3000/api/v1/user/signup", {
            "firstName": firstname,
            "lastName": lastname,
            "username": usernames,
            "password": password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard');
            setSuccess(true);

        })
        .catch(error => {
            console.error("Error signing up:", error);
            setSuccess(false);
        });
    };

    return (
        // <div className="flex justify-center">
        //     <div className="shadow-md bg-gray-100 w-[450px] h-[550px] items-center justify-center m-20 rounded-lg h-auto p-5">
        //         <div className="m-5 flex justify-center">
        //             <Heading1 />
        //         </div>
        //         <div className="m-5 flex justify-center">
        //             <Subheading />
        //         </div>
        //         <div className="ml-10 mt-10">
        //             <Inputbox onchange={(e) => setFirstname(e.target.value)} placeholder="Enter your firstname" label="Firstname" />
        //             <Inputbox onchange={(e) => setLastname(e.target.value)} placeholder="Enter your Lastname" label="Lastname" />
        //             <Inputbox onchange={(e) => setUsername(e.target.value)} placeholder="Enter your Username" label="Username" />
        //             <Inputbox onchange={(e) => setPassword(e.target.value)} placeholder="Enter your password" label="Password" />
        //         </div>
        //         <div className="flex justify-center">
        //             <SignupButton onPress={handleSignup} />
        //         </div>
        //         <div className="flex justify-center mt-5">
        //             <div className="mr-1 text-sm">Already signed up ?</div> 
        //             <div className="text-sm hover:text-blue-400"><Link to= '/signin'> Login</Link></div>
        //         </div>
        //         <div className="flex justify-center text-sm  mt-3 font-medium">
        //             {success === null ? "" : (success ?  <div  className="text-green-400">user created succesfully</div>: <div className="text-red-400"> could not create user</div>)}
        //         </div>
        //     </div>
        // </div>
        <div
      className="bg-white font-family-karla h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${spicesbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content container */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg opacity-93 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="#" className="bg-black text-white font-bold text-xl p-4">
            Shri.
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center text-3xl mb-6">Welcome.</p>
          <form
            className="flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* First Name */}
            <div className="flex flex-col pt-4">
              <label htmlFor="firstname" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col pt-4">
              <label htmlFor="lastname" className="text-lg">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
                className="opacity-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col pt-4">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Sign Up Button */}
            <button
              onClick={handleSignup}
              className="w-full mt-6 bg-black text-white font-bold text-lg hover:bg-gray-700 py-2 rounded"
            >
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="underline font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}


function SignupButton({ onPress }) {
    return (
        <div>
            <button onClick={onPress} className="border border-black rounded px-3 py-2 font-mono hover:text-white hover:bg-black">Signup</button>
        </div>
    );
}

export default function SIGNUP() {
    return (
        <RecoilRoot>
            <SignupPage />
        </RecoilRoot>
    );
}
