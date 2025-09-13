/* eslint-disable no-unused-vars */
import bgImg from '../../assets/images/bg-img.jpg'
import mobile from '../../assets/images/mobile.png'
import elips from '../../assets/images/Ellipse1.jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div >
            <div>
                <motion.img animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }} src={elips} className='mix-blend-multiply absolute opacity-20' alt="" />
            </div>
            <section style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='min-h-screen'>
                <div className="container mx-auto">
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className='lg:mt-32 mt-10 pl-8 text-white space-y-3 lg:space-y-5'>
                            <h1 className='text-4xl lg:text-6xl font-semibold '>Outstanding Business</h1>
                            <motion.h4 initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeIn' }} className='text-3xl lg:text-5xl'>Needs Better Apps</motion.h4>
                            <p className='text-[18px]'>We build impactful Apps</p>
                            <button className='btn bg-transparent py-3 border border-white rounded-4xl text-white font-light px-8 shadow-none'>Contact Us</button>
                        </div>
                        <div className='mt-12 flex justify-center lg:mt-20'>
                            <motion.img animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity }} src={mobile} className='' alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={elips} className='mix-blend-multiply absolute left-0 lg:left-50 top-150 opacity-10' alt="" />
                    </div>
                </div>

            </section>
        </div>

    );
};

export default Banner;