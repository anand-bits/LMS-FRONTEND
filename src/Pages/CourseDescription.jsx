import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

const CardContainer = styled('div')({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Increased shadow for a larger card effect
  padding: '40px', // Increased padding for more space inside the card
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const CourseDescription = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, data } = useSelector((state) => state.auth);

    return (
        <HomeLayout>
            <CardContainer>
                <div className="grid grid-cols-2 gap-10 py-10 relative">
                    <div className="space-y-5">
                    <img 
    className="w-full h-96 object-cover"
    alt="thumbnail"
    src={state?.thumbnail?.secure_url}
/>

                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-between text-xl">
                                <p className="font-semibold">
                                    <span className="font-bold text-yellow-500">Total Lectures: {" "}</span> {state?.numberOfLectures}
                                </p>
                                <p className="font-semibold">
                                    <span className="font-bold text-yellow-500">Instructor: {" "}</span> {state?.createdBy}
                                </p>
                            </div>
                            {role == "ADMIN" || data?.subscription?.status === 'active'? (
                                <button
                                    onClick={() => navigate("/course/displaylectures", {state: {...state}})}
                                    className="bg-yellow-500 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300"
                                >
                                    Watch Lectures
                                </button>
                            ): (
                                <button
                                    onClick={() => navigate("/checkout")}
                                    className="bg-yellow-500 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300"
                                >
                                    Subscribe
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right of the grid */}
                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
                            {state?.title}
                        </h1>
                        <p className="text-yellow-500">
                            Course Description: {" "}
                        </p>
                        <p>
                            {state?.description}
                        </p>
                    </div>
                </div>
            </CardContainer>
        </HomeLayout>
    );
}

export default CourseDescription;
