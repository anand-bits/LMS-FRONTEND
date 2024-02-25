import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom"; // Import useHistory hook

import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regesMatcher";
import HomeLayout from "../Layouts/HomeLayout";

function Contact() {
    const navigate = useNavigate(); // Initialize useHistory hook

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }
        if (!isEmail(userInput.email)) {
            toast.error("Invalid email provided");
            return;
        }
        try {
            const response = axiosInstance.post('user/contact', userInput);
            toast.promise(response, {
                loading: "Submitting your query",
                success: "Form submitted successfully",
                error: "Failed to submit the form"
            });
            const responseData = await response;
            console.log(responseData);
            if (responseData?.data) {
                setUserInput({
                    email: "",
                    name: "",
                    message: ""
                });
                navigate("/"); // Navigate to the home page after successful form submission
            }
        } catch (error) {
            toast.error("Operation failed...");
        }
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form onSubmit={onFormSubmit} className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-semibold text-center mb-8">Contact Form</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={userInput.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={userInput.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Enter your message"
                            name="message"
                            value={userInput.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Contact;
