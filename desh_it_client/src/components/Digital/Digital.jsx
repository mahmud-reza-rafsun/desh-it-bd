/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import img1 from "../../assets/images/Group 10.jpg";
import img2 from "../../assets/images/Group 11.jpg";
import img3 from "../../assets/images/Group 12.jpg";
import img4 from "../../assets/images/Group 13.jpg";
import img5 from "../../assets/images/Group 14.jpg";
import img6 from "../../assets/images/Group 15.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DigitalMarketingCircle() {
    const items = [
        { img: img1, title: "SEO Marketing", desc: "Use creative short video to spark reach and brand affinity." },
        { img: img2, title: "Social Media", desc: "Engage audiences across platforms." },
        { img: img3, title: "Email", desc: "Reach users directly with campaigns." },
        { img: img4, title: "Content", desc: "Craft engaging articles & visuals." },
        { img: img5, title: "Ads", desc: "Run targeted ad campaigns." },
        { img: img6, title: "Analytics", desc: "Measure performance and growth." },
    ];

    const [angleOffset, setAngleOffset] = useState(0);
    const requestRef = useRef();

    const animate = () => {
        setAngleOffset(prev => prev + 0.01);
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    // Title Typing Animation
    const fullTitle = "Digital Marketing";
    const [displayedTitle, setDisplayedTitle] = useState("");
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (!titleInView) return;
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedTitle(fullTitle.slice(0, index + 1));
            index++;
            if (index === fullTitle.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [titleInView]);

    // Center Text Typing Animation
    const centerTextFull = "Digital Marketing";
    const [centerDisplayed, setCenterDisplayed] = useState("");
    const { ref: centerRef, inView: centerInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (!centerInView) return;
        let index = 0;
        const interval = setInterval(() => {
            setCenterDisplayed(centerTextFull.slice(0, index + 1));
            index++;
            if (index === centerTextFull.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, [centerInView]);

    return (
        <div className="bg-gray-50 py-20">
            {/* Typing Title */}
            <div ref={titleRef} className="text-center mb-10 max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-semibold">
                    <span className="text-[#FA8370]">{displayedTitle.split(" ")[0]}</span>{" "}
                    {displayedTitle.split(" ").slice(1).join(" ")}
                </h2>
                <motion.p
                    initial={{ y: 25, opacity: 0 }}
                    animate={titleInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="font-light text-gray-500 mt-4"
                >
                    We deliver innovative digital solutions including Mobile App Development, UI/UX Design, and Web Development.
                </motion.p>
            </div>

            {/* Rotating Circle */}
            <div className="flex items-center justify-center mt-20">
                <div className="relative w-[90vw] max-w-[600px] aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[75%] h-[75%] rounded-full border border-gray-400 border-dashed"></div>
                    </div>

                    {items.map((item, index) => {
                        const containerSize = Math.min(window.innerWidth * 0.9, 600);
                        const radius = containerSize * 0.37;
                        const boxDistance = radius * 0.45;

                        const angle = (index / items.length) * 2 * Math.PI + angleOffset;
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);

                        const boxX = x + boxDistance * Math.cos(angle);
                        const boxY = y + boxDistance * Math.sin(angle);

                        return (
                            <div key={index}>
                                <div
                                    className="absolute rounded-full overflow-hidden shadow-lg"
                                    style={{
                                        width: containerSize * 0.12,
                                        height: containerSize * 0.12,
                                        left: "50%",
                                        top: "50%",
                                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                    }}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover" />
                                </div>
                                <div
                                    className="absolute p-2 bg-white rounded-md shadow-md text-left hidden lg:block"
                                    style={{
                                        width: containerSize * 0.25,
                                        left: "50%",
                                        top: "50%",
                                        transform: `translate(${boxX}px, ${boxY}px) translate(-50%, -50%)`,
                                    }}>
                                    <h3 className="text-sm font-semibold">{item.title}</h3>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}

                    {/* Center Text with Typing */}
                    <div ref={centerRef} className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
                            <span className="text-[#FA8370]">{centerDisplayed.split(" ")[0]}</span>{" "}
                            {centerDisplayed.split(" ").slice(1).join(" ")}
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
}
