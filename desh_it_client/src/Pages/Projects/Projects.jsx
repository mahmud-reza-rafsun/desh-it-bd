/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "../../components/Projects/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
            return data;
        }
    });

    return (
        <div className="container mx-auto mt-32 pb-16">
            <div className="text-center mb-15">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-3xl lg:text-4xl font-semibold"
                >
                    Our <span className="text-[#FA8370]">Developed</span> Project
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
                {projects.map((project) => (
                    <ProjectCard key={project?._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
