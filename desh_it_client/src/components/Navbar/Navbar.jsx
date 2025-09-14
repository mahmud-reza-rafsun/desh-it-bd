import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
    { name: "Training", path: "/training" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-colors duration-500">
      {/* Navbar container */}
      <div className={` px-4 md:px-8 h-20 transition-colors duration-500 ${scrolled
        ? "bg-white shadow-md"
        : "bg-gradient-to-r from-[#FA776F] to-[#FA8E71] backdrop-blur-3xl"}`} >
        {/* Logo */}
        <div className="container mx-auto flex items-center justify-between pt-7">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className={`w-32 object-contain transition-all duration-300 ${scrolled ? "" : "mix-blend-multiply"}`} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10 text-[15px]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`relative transition-colors duration-300 font-medium ${scrolled
                    ? isActive
                      ? "text-orange-500"
                      : "text-black"
                    : isActive
                      ? "text-white"
                      : "text-white"
                    }`}
                >
                  {item.name}
                  {!scrolled && isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`focus:outline-none transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Top bar with logo + close */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img src={logo} alt="Logo" className="w-32 object-contain" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items vertically centered */}
        <div className="flex flex-col justify-center items-center h-[calc(100%-64px)]">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`text-3xl font-semibold transition-colors duration-300 ${isActive ? "text-orange-500" : "text-black"
                      }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
