/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OurServiceCard from "./OurServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurServices = () => {
    const { data: services = [] } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
            return data;
        },
    });

    const { ref, inView } = useInView({
        triggerOnce: true,  // ekbar animate hobar por abar hobe na
        threshold: 0.2,     // 20% element viewport e ashle trigger
    });

    return (
        <div className="container mx-auto mt-20 px-3 lg:px-0">
            <motion.div
                ref={ref}
                initial={{ y: 25, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-center mb-10 max-w-4xl mx-auto"
            >
                <h2 className="text-2xl lg:text-4xl font-semibold">
                    <span className="text-[#FA8370]">Our</span> Service
                </h2>
                <p className="font-light text-sm lg:text-base text-gray-500 mt-4">
                    We deliver innovative digital solutions including Mobile App Development, UI/UX Design, and Web Development. Our focus is on creating seamless
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <OurServiceCard key={service?._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default OurServices;
