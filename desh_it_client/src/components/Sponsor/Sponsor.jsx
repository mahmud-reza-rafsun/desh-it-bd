/* eslint-disable no-unused-vars */
import titleImg from '../../assets/images/ESBO-logo.jpg'
import esboLogo from '../../assets/images/ESBO-logo.jpg'
import social from '../../assets/images/SD-Logo.jpg'
import tab from '../../assets/images/Tabscanner Receipt OCR API.jpg'
import retaina from '../../assets/images/retina.jpg'
import world from '../../assets/images/r12.jpg'
import mission from '../../assets/images/Pasted image (2).png'
import rectingle from '../../assets/images/Ellipse 3-1.jpg'
import Marquee from "react-fast-marquee";
import { motion } from "motion/react"

const Sponsor = () => {
    return (
        <div className="bg-[#fff5f5] py-32 relative">
            <motion.img animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                src={rectingle}
                alt="circle"
                className="absolute right-0 top-2 opacity-30 w-[500px] hidden lg:block"
            />
            <div className="flex justify-center relative z-20">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl text-center">
                    <img
                        src={titleImg}
                        alt="logo"
                        className="mx-auto mb-4 h-10"
                    />
                    <p className="text-gray-600 text-sm leading-relaxed">
                        DeshIT-BD&apos;s professionalism and expertise shone throughout
                        the app development process, delivering a high-quality app
                        within the aged time frame and budget. Their exceptional
                        post-launch support ensures a seamless user experience.
                    </p>
                    <div className="mt-6">
                        <p className="text-gray-800 font-medium">CEO</p>
                        <p className="text-gray-600 text-sm">ESBO ltd</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-16">
                <p className="uppercase tracking-wider text-gray-500 text-sm">
                    Clients
                </p>
                <h3 className="text-xl font-semibold text-red-500 mt-2">
                    Who We Work With
                </h3>

                <Marquee>
                    <div className="flex justify-center items-center gap-10 mt-10">
                        <img src={social} alt="Social Donut" className="h-10 mix-blend-multiply" />
                        <img src={esboLogo} alt="ESBO" className="h-10 mix-blend-multiply" />
                        <img src={tab} alt="Tabscanner" className="h-10 mix-blend-multiply" />
                        <img src={retaina} alt="Retaina" className="h-10 mix-blend-multiply" />
                        <img src={world} alt="World Class" className="h-10 mix-blend-multiply" />
                        <img src={mission} alt="Mission" className="h-10 mix-blend-multiply" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Sponsor;
