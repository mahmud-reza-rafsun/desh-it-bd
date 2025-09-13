/* eslint-disable no-unused-vars */
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
    const handleContact = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const bio = form.bio.value;
        const data = { name, email, phone, bio };

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, data);
            console.log(res);
            toast.success("send info successfully!!!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="container mx-auto my-10">
            {/* Title animation */}
            <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center font-semibold text-3xl lg:text-4xl pb-6"
            >
                Contact <span className="text-[#FA8370]">Us</span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-15">
                {/* Form animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="hero-content flex-col">
                        <div className="bg-base-100 w-full shadow-xl rounded-md">
                            <div className="card-body">
                                <form onSubmit={handleContact} className="fieldset">
                                    <label className="label">Name</label>
                                    <input
                                        type="text"
                                        className="input w-full rounded-lg focus:outline-none"
                                        placeholder="Name"
                                        name="name"
                                    />
                                    <label className="label">Email</label>
                                    <input
                                        type="email"
                                        className="input w-full rounded-lg focus:outline-none"
                                        placeholder="Email"
                                        name="email"
                                    />
                                    <label className="label">Phone</label>
                                    <input
                                        type="number"
                                        className="input w-full rounded-lg focus:outline-none"
                                        placeholder="Phone"
                                        name="phone"
                                    />
                                    <label className="label">Your Bio</label>
                                    <textarea
                                        className="textarea w-full rounded-lg focus:outline-none"
                                        placeholder="Your Bio"
                                        name="bio"
                                    ></textarea>
                                    <button className="btn bg-[#FA8370] hover:bg-[#fa644d] rounded-lg text-white mt-4">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Map animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    className="w-full lg:w-1/2"
                >
                    <div style={{ width: "100%", height: "420px" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187116.55217531667!2d90.25487277109089!3d23.78106723920633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1755325424267!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "5px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dhaka Map"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
