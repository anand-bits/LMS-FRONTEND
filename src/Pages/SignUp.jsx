import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isValidPassword } from "../Helpers/regesMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        fullName: "",
        password: "",
        avatar: ""
    });

    const [previewImage, setPreviewImage] = useState("");

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        });
    }

    function handleImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            setPreviewImage(this.result);
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signupDetails);
        if (!signupDetails.email || !signupDetails.password || !signupDetails.fullName) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupDetails.fullName.length < 5) {
            toast.error("Name should be at least 5 characters");
            return;
        }
        if (!isEmail(signupDetails.email)) {
            toast.error("Invalid email provided");
            return;
        }
        if (!isValidPassword(signupDetails.password)) {
            toast.error("Invalid password provided, password should be 6-16 characters long with at least a number and a special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupDetails.fullName);
        formData.append("email", signupDetails.email);
        formData.append("password", signupDetails.password);
        formData.append("avatar", signupDetails.avatar);

        const response = await dispatch(createAccount(formData));
        console.log(response);
        if (response?.payload?.data) {
            navigate("/");
        }
        setSignupDetails({
            email: "",
            fullName: "",
            password: "",
            avatar: ""
        });
        setPreviewImage("");
    }

    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center h-screen">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col gap-4 items-center bg-gray-100 p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="Avatar Preview" />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImage}
                        type="file"
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                    <input
                        onChange={handleUserInput}
                        value={signupDetails.fullName}
                        required
                        type="text"
                        name="fullName"
                        className="bg-transparent px-4 py-2 border rounded-lg w-full"
                        placeholder="Enter your full name"
                    />
                    <input
                        onChange={handleUserInput}
                        value={signupDetails.email}
                        required
                        type="text"
                        name="email"
                        className="bg-transparent px-4 py-2 border rounded-lg w-full"
                        placeholder="Enter your email"
                    />
                    <input
                        onChange={handleUserInput}
                        value={signupDetails.password}
                        required
                        type="password"
                        name="password"
                        className="bg-transparent px-4 py-2 border rounded-lg w-full"
                        placeholder="Enter your password"
                    />
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg w-full">
                        Create Account
                    </button>
                    <p className="mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;
