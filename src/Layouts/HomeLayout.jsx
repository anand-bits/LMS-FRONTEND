import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { Button,Box , Typography} from '@mui/material';

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role);

    function openDrawer() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function closeDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer m-0">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-4"> {/* Added padding-left (pl-4) for space */}
                    <label htmlFor="my-drawer" className="m-0 p-0">
                        <FiMenu
                            onClick={openDrawer}
                            size={"40px"}
                            className='text-black cursor-pointer'
                        />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={closeDrawer}></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={closeDrawer}>
                                <AiFillCloseCircle
                                    size={"34px"}
                                    className='text-black'
                                />
                            </button>
                        </li>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>

                        {isLoggedIn && role === 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
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

                        {!isLoggedIn && (
                            <div className='w-full flex items-center justify-center space-x-2'>
                                <Button variant='contained' color='primary'>
                                    <Link to="/login"> Login</Link>
                                </Button>

                                <Button variant='contained' color='secondary'>
                                    <Link to="/signup"> SignUp</Link>
                                </Button>
                            </div>
                        )}

                            {isLoggedIn && (
                            <div className='w-full flex items-center justify-center space-x-2'>
                                <Button variant='contained' color='primary'>
                                    <Link to="/user/profile"> Login</Link>
                                </Button>

                                <Button variant='contained' color='secondary'>
                                    <Link to="/logout"> Logout</Link>
                                </Button>
                            </div>
                        )}
                        



                    </ul>
                </div>
            </div>

            {children}

           
            <Footer />
            <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: 'yellow', marginTop: '10px', borderRadius: '8px' }}>
                    {/* Typography for the footer with a heart symbol */}
                    <Typography variant="body2" color="textSecondary">
                        Made with ❤️ by Anand 
                    </Typography>
                </Box>

        </div>
    );
}

export default HomeLayout;
