/* eslint-disable no-unused-vars */
import titleImg from '../../assets/images/ESBO-logo.jpg'
import esboLogo from '../../assets/images/ESBO-logo.jpg'
import social from '../../assets/images/SD-Logo.jpg'
import tab from '../../assets/images/Tabscanner Receipt OCR API.jpg'
import retaina from '../../assets/images/retina.jpg'
import world from '../../assets/images/r12.jpg'
import mission from '../../assets/images/Pasted image (2).png'
import rectingle from '../../assets/images/mobile/Ellipse_3-1-remove.png'
import Marquee from "react-fast-marquee";
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/pagination";

const Sponsor = () => {
    const testimonials = [
        {
            id: 1,
            text: "DeshIT-BD exceeded our expectations with their expertise and professionalism in delivering a high-quality app within the agreed timeline and budget. Highly recommended for their exceptional post-launch support",
            name: "CEO",
            company: "ESBO ltd",
            img: titleImg,
        },
        {
            id: 2,
            text: "They maintained clear communication throughout the project, making the whole experience stress-free. We will work with them again!",
            name: "Manager",
            company: "Social Donut",
            img: social,
        },
        {
            id: 3,
            text: "Outstanding work, on time delivery and professional approach. Highly satisfied with the final result!",
            name: "Founder",
            company: "Tabscanner",
            img: tab,
        },
    ];

    return (
        <div className="bg-[#fff5f5] py-20 md:py-32 relative">
            {/* Floating Circle */}
            <motion.img
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                src={rectingle}
                alt="circle"
                className="absolute right-0 top-0 w-[300px] md:w-[500px] hidden lg:block"
            />

            {/* Section Title */}
            <div className='text-center px-4'>
                <h4 className='text-lg md:text-xl uppercase text-[#FA7070]'>Testimonial</h4>
                <h1 className='text-2xl md:text-4xl mt-3 font-semibold'>
                    What our clients say about us
                </h1>
            </div>

            {/* Slider */}
            <div className="flex justify-center relative z-20 py-7 px-4">
                <div className="relative max-w-4xl w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="w-full"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-center min-h-[350px] md:min-h-[380px] flex flex-col justify-center">
                                    <img
                                        src={item.img}
                                        alt="logo"
                                        className="mx-auto mb-4 h-12 md:h-16 object-contain"
                                    />
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                    <div className="mt-6">
                                        <p className="text-gray-800 text-lg md:text-xl font-medium">{item.name}</p>
                                        <p className="text-gray-600 text-base md:text-lg">{item.company}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation arrows (desktop only) */}
                    <button className="custom-prev hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10">
                        <FaArrowLeft className="text-gray-700" />
                    </button>
                    <button className="custom-next hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10">
                        <FaArrowRight className="text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Clients Section */}
            <div className="text-center mt-12 md:mt-16 px-4">
                <p className="uppercase tracking-wider text-gray-500 text-xs md:text-sm">
                    Clients
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-red-500 mt-2">
                    Who We Work With
                </h3>

                <Marquee gradient={false} speed={50}>
                    <div className="flex justify-center items-center gap-6 md:gap-10 mt-6 md:mt-10">
                        <img src={social} alt="Social Donut" className="h-8 md:h-10 mix-blend-multiply" />
                        <img src={esboLogo} alt="ESBO" className="h-8 md:h-10 mix-blend-multiply" />
                        <img src={tab} alt="Tabscanner" className="h-8 md:h-10 mix-blend-multiply" />
                        <img src={retaina} alt="Retaina" className="h-8 md:h-10 mix-blend-multiply" />
                        <img src={world} alt="World Class" className="h-8 md:h-10 mix-blend-multiply" />
                        <img src={mission} alt="Mission" className="h-8 md:h-10 mix-blend-multiply" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Sponsor;
