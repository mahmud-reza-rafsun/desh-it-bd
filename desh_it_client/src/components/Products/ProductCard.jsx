/* eslint-disable no-unused-vars */
import { motion } from "motion/react"

const ProductCard = ({ product }) => {
    return (
        <motion.div initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }}>
            <div
                className="p-4 rounded-md relative 
             transform transition-transform duration-300 
             hover:-translate-y-2"
            >
                <figure>
                    <img
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-md"
                        src={product?.image}
                        alt={product?.title || "Product Image"}
                    />
                </figure>

                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/4 lg:-translate-y-1/3 bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow w-11/12 sm:w-3/4 md:w-2/3 lg:w-[400px] text-center z-20">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-950">
                        {product?.title}
                    </h2>
                </div>
            </div>

        </motion.div>
    );
};

export default ProductCard;