/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/Products/ProductCard";
import { motion } from "framer-motion";

const Products = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
            return data;
        }
    });

    return (
        <div className="container mx-auto my-10 pb-12">
            <div className="text-center mb-10">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-3xl lg:text-4xl font-semibold"
                >
                    <span className="text-[#FA8370]">Our</span> Products
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 lg:gap-y-16">
                {products.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
