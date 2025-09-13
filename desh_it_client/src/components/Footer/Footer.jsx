import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bgImg from "../../assets/images/Rectangle 32.jpg";

const Footer = () => {
    return (
        <footer className="w-full">
            <div
                className="text-center text-white py-10 mb-10 px-4"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 className="text-2xl font-semibold mb-2">Say Hello</h2>
                <p className="mb-1">
                    📞 <a href="tel:+8801851885867" className="hover:underline">+8801813320587</a>
                </p>
                <p className="mb-4">
                    ✉️ <a href="mailto:info@dskillr.com" className="hover:underline">info@deshit-bd.com</a>
                </p>
                <button className="bg-white text-gray-800 font-medium px-5 cursor-pointer py-2 rounded-full hover:bg-gray-100 transition">
                    Free Consultation
                </button>
            </div>
            <div className="bg-white text-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6 border-t border-gray-200">
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-900">Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#FA8370]">Company</a></li>
                            <li><a href="#" className="hover:text-[#FA8370]">Products</a></li>
                            <li><a href="#" className="hover:text-[#FA8370]">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-900">Training</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#FA8370]">Flutter</a></li>
                            <li><a href="#" className="hover:text-[#FA8370]">NodeJS</a></li>
                            <li><a href="#" className="hover:text-[#FA8370]">Laravel</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-900">Our Address</h3>
                        <p className="text-sm mb-4">
                            D/3, Block-E Lalmatia, Dhaka 1207, Bangladesh
                        </p>
                        <div className="flex space-x-4 text-gray-600 text-xl">
                            <a href="#"><FaFacebookF className="hover:text-[#FA8370]" /></a>
                            <a href="#"><FaLinkedinIn className="hover:text-[#FA8370]" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-gray-900">Get In Touch</h3>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-[#FA8370]"
                            />
                            <button
                                type="submit"
                                className="bg-[#FA8370] text-white px-4 py-2 rounded hover:bg-[#eb5b45] cursor-pointer transition text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-sm border-t border-gray-200 py-4">
                    © 2025 All Rights Reserved | Design by{" "}
                    <span className="text-[#FA8370] font-semibold">DeshIT-BD</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
