import { Link } from "react-router-dom";
import homePageMainImage from '../assets/Images/Anand.jpg';
import HomeLayout from "../Layouts/HomeLayout";

function Home() {
    return (
        <HomeLayout>
            <div className="bg-pink-400 pt-8 text-black flex items-center justify-center gap-10 mx-0 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses" className="text-black">
                            <button className="bg-light-blue-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-light-blue-600 hover:text-white">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contacts" className="text-black">
                            <button className="border border-light-blue-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-light-blue-600 hover:text-white">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={homePageMainImage} alt="home page" />
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home;
