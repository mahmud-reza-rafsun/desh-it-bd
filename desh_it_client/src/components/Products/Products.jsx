/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Products = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
            return data;
        }
    });
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: gridRef, inView: gridInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="container mx-auto px-4 lg:px-0 mt-20">
            <motion.div
                ref={titleRef}
                initial={{ y: 25, opacity: 0 }}
                animate={titleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-center mb-10"
            >
                <h2 className="text-2xl lg:text-4xl font-semibold">
                    <span className="text-[#FA8370]">Our</span> Products
                </h2>
            </motion.div>

            <motion.div
                ref={gridRef}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 lg:gap-y-16"
            >
                {products.map((product) => (
                    <motion.div
                        key={product?._id}
                        initial={{ y: 25, opacity: 0 }}
                        animate={gridInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
            <Link to="/products">
                <div className="text-center mt-16">
                    <button className="btn bg-[#FA8370] border-none text-white px-16 rounded-3xl shadow-2xl">
                        More
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Products;
