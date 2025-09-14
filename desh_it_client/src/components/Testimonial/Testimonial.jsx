/* eslint-disable no-unused-vars */
import frame1 from '../../assets/images/Frame.jpg'
import group from '../../assets/images/Group.jpg'
import tranding from '../../assets/images/tranding.jpg'
import CountUp from 'react-countup';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
    const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const leftVariant = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const rightVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const cardVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="container mx-auto mt-16">
            <div className="px-9 flex justify-between flex-col lg:flex-row items-center gap-7">
                <motion.div
                    ref={leftRef}
                    variants={leftVariant}
                    initial="hidden"
                    animate={leftInView ? "visible" : "hidden"}
                    className='z-40 w-full lg:w-1/2'
                >
                    <h2 className='text-2xl lg:text-[32px] font-semibold'>DeshIT-Bd</h2>
                    <p className='text-gray-700 mt-5'>
                        Started its journey with the determination of enabling organizations to leverage technology for betterment. Our priority is to deliver impact solutions with superior user experience. We are highly design-focused and practice SCRUM to meet client requirements and deliver solutions in time and within budget.
                    </p>
                </motion.div>
                <motion.div
                    ref={rightRef}
                    variants={rightVariant}
                    initial="hidden"
                    animate={rightInView ? "visible" : "hidden"}
                    className='flex flex-col lg:flex-row gap-5 w-full lg:w-1/2'
                >
                    {/* Card 1 */}
                    <motion.div variants={cardVariant} className='bg-white shadow-lg p-5 w-full lg:w-1/3 text-center space-y-5 rounded-md'>
                        <img className='mx-auto' src={frame1} alt="" />
                        <span className='text-[28px] font-medium'>
                            <CountUp start={0} end={7} duration={10}></CountUp> +
                        </span>
                        <p className='text-sm font-light text-gray-400'>Years Experience in App Development</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={cardVariant} className='bg-white shadow-lg p-5 w-full lg:w-1/3 text-center space-y-5 rounded-md'>
                        <img className='mx-auto' src={group} alt="" />
                        <span className='text-[28px] font-medium'>
                            <CountUp start={0} end={30} duration={10}></CountUp> +
                        </span>
                        <p className='text-sm font-light text-gray-400'>Mobile Apps Developed</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={cardVariant} className='bg-white shadow-lg p-5 w-full lg:w-1/3 text-center space-y-5 rounded-md'>
                        <img className='mx-auto' src={tranding} alt="" />
                        <span className='text-[28px] font-medium'>
                            <CountUp start={0} end={25} duration={10}></CountUp> +
                        </span>
                        <p className='text-sm font-light text-gray-400'>Websites Developed</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonial;
