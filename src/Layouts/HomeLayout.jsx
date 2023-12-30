import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';

function HomeLayout({ children }) {

const dispatch=useDispatch();
const navigate=useNavigate();


const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn);


const role=useSelector((state)=>state?.auth?.role);






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
        <div className="min-h-[90vh] m-0 p-0">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
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

                        {isLoggedIn && role==='ADMIN' &&(
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
                    </ul>
                </div>
            </div>

            {children}

            <Footer />
        </div>
    );
}

export default HomeLayout;
