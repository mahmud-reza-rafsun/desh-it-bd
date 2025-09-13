/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
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
        <div className="container mx-auto mt-20">
            <motion.div
                ref={titleRef}
                initial={{ y: 25, opacity: 0 }}
                animate={titleInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl lg:text-4xl font-semibold">
                    Our <span className="text-[#FA8370]">Developed</span> Project
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project?._id}
                        initial={{ y: 25, opacity: 0 }}
                        animate={gridInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
            <Link to="/projects">
                <div className="text-center mt-16 mb-10">
                    <button className="btn bg-[#FA8370] border-none text-white px-12 rounded-3xl shadow-2xl">
                        More
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Projects;
