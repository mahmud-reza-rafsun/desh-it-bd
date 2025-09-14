/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const OurServiceCard = ({ service }) => {
    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        >
            <div
                className="rounded-md overflow-hidden group 
                transform transition-transform duration-300 
                hover:-translate-y-3 shadow-md"
            >
                {/* Image */}
                <figure>
                    <img
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 
                        object-cover rounded-t-md 
                        transition-transform duration-300 group-hover:scale-105"
                        src={service?.image}
                        alt={service?.title || "Service Image"}
                    />
                </figure>

                {/* Bottom Title Box */}
                <div className="bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-b-md shadow text-center">
                    <h2
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-400
                        relative inline-block after:content-[''] after:block after:w-0 
                        after:h-[2px] after:bg-blue-400 
                        after:transition-all after:duration-500 
                        group-hover:after:w-full"
                    >
                        {service?.title}
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

export default OurServiceCard;
