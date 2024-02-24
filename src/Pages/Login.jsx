import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail } from "../Helpers/regesMatcher"
import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice"

function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if(!signinDetails.email || !signinDetails.password ) {
            toast.error("Please fill in all the details");
            return;
        }

        if(!isEmail(signinDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }

        const response = await dispatch(login(signinDetails));

        if(response?.payload?.data) {
            navigate("/");
        }

        setSigninDetails({
            email: '',
            password: '',
        });
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form onSubmit={onFormSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                        <input 
                            onChange={handleUserInput}
                            value={signinDetails.email}
                            required
                            type="email" 
                            name="email"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email..."
                            id="email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                        <input 
                            required
                            onChange={handleUserInput}
                            value={signinDetails.password}
                            type="password" 
                            name="password"
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password..."
                            id="password" />
                    </div>
                    <button 
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Sign In
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600">Sign up</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signin;
