import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 backdrop-blur-3xl bg-gradient-to-r from-[#FA776F] to-[#FA8E71]">
            <div className="navbar container mx-auto px-3 lg:px-9">
                <div className="navbar-start ">
                    <Link to="/">
                        <img src={logo} alt="deshIT" className="w-34 object-cover mix-blend-multiply" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="flex gap-10 text-[15px] bg-transparent text-white">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="projects">Projects</NavLink></li>
                            <li><NavLink to="/company">Company</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/training">Training</NavLink></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute right-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="projects">Projects</NavLink></li>
                            <li><NavLink to="/company">Company</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/training">Training</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;