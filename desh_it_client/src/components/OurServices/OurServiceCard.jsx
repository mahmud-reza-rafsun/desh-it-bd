/* eslint-disable no-unused-vars */
import { motion } from "motion/react"

const OurServiceCard = ({ service }) => {
    return (
        <motion.div initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <div className="p-4 rounded-md">
                <figure>
                    <img
                        className='w-full object-cover'
                        src={service?.image}
                        alt="Shoes" />
                </figure>
                <div className="py-3 rounded-b-md text-center bg-gray-800">
                    <h2 className='text-xl lg:text-2xl text-white'>{service?.title}</h2>
                </div>
            </div>
        </motion.div >
    );
};

export default OurServiceCard;