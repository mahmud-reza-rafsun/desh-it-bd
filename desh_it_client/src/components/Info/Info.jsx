import bgImg from "../../assets/images/Rectangle 32.jpg";
import { MdPhone, MdEmail } from "react-icons/md";

const Info = () => {
    return (
        <div
            className="text-center text-white py-10 mb-10 px-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Say Hello</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <MdPhone className="text-lg sm:text-xl" />
                    <a href="tel:+8801851885867" className="hover:underline text-sm sm:text-base">+8801813320587</a>
                </div>
                <div className="flex items-center gap-2">
                    <MdEmail className="text-lg sm:text-xl" />
                    <a href="mailto:info@deshit-bd.com" className="hover:underline text-sm sm:text-base">info@deshit-bd.com</a>
                </div>
            </div>
            <button className="bg-white text-gray-800 cursor-pointer font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
                Free Consultation
            </button>
        </div>
    );
};

export default Info;