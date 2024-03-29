import { Box, Typography } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from "../components/footer";
import { logout } from '../Redux/Slices/AuthSlice';

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role);

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        const response = await dispatch(logout());
        if (response.payload?.data) navigate("/");
    };

    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={changeWidth} size={"32px"} className='font-bold text-gray-900 m-4' />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className='menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative'>
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        {isLoggedIn && role === "ADMIN" && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )}
                        {isLoggedIn && role === "ADMIN" && (
                            <li>
                                <Link to="/course/create">Create Course</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/about"> About us </Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact us </Link>
                        </li>
                        <li>
                            <Link to="/courses"> All courses </Link>
                        </li>
                        {!isLoggedIn ? (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full bg-blue-500">
                                        <Link to="/login">Login</Link>
                                    </button>
                                    <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-red-500">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full bg-green-500">
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                    <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-yellow-500" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {children}
            <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: 'yellow', marginTop: '10px', borderRadius: '8px' }}>
                <Typography variant="body2" color="textSecondary">
                    Made with ❤️ by Anand
                </Typography>
            </Box>
            <Footer />
        </div>
    );
}

export default HomeLayout;
