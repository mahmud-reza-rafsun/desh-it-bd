/* eslint-disable no-unused-vars */
import bgImg from '../../assets/images/bg-img.jpg'
import mobile1 from '../../assets/images/mobile/mobile-1.png'
import mobile2 from '../../assets/images/mobile/mobile-2.png'
import mobile3 from '../../assets/images/mobile/mobile-3.png'
import mobile4 from '../../assets/images/mobile/mobile-4.png'
import elips from '../../assets/images/Ellipse1.jpg'
import elips1 from '../../assets/images/mobile/Ellipse1-remove.png'
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import {Link} from 'react-router-dom'

const slidesData = [
  {
    title: "Made-to-Order Solutions",
    subtitle: "Around Your Needs",
    text: "Unique builds centered on your requirements",
    image: mobile1
  },
  {
    title: "Bespoke Delivery",
    subtitle: "On Demand",
    text: "Individualized solutions aligned to your goals",
    image: mobile2
  },
  {
    title: "Tailor-Made Platform",
    subtitle: "Fit Your Vision",
    text: "Customized and client-focused from day one",
    image: mobile3
  },
  {
    title: "Innovative Apps",
    subtitle: "Next Level",
    text: "Smart solutions for modern businesses",
    image: mobile4
  }
]

const Banner = () => {
  return (
    <div className="relative">
      <section
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="min-h-screen relative"
      >
        {/* ==== Top Ellipse ==== */}
        <motion.img
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          src={elips}
          className="mix-blend-multiply absolute opacity-20 top-3 -left-10 z-0"
          alt="Top Ellipse"
        />

        <div className="container mx-auto relative z-10 pt-16 lg:pt-20">
          {/* ==== Slider ==== */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-between md:flex-row flex-col">
                  {/* Left Text */}
                  <div className='lg:mt-32 mt-10 pl-8 text-white space-y-3 lg:space-y-5'>
                    <h1 className='text-4xl lg:text-6xl font-semibold'>{slide.title}</h1>
                    <motion.h4
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                      className='text-3xl lg:text-5xl'
                    >
                      {slide.subtitle}
                    </motion.h4>

                    {/* Blink subtitle */}
                    <motion.p
                      className='text-[18px]'

                    >
                      {slide.text}
                    </motion.p>

                    <Link to="/contact">
                      <button className='btn bg-transparent py-3 border border-white rounded-4xl text-white font-light px-8 shadow-none'>
                        Contact Us
                      </button>
                    </Link>
                  </div>

                  {/* Right Image */}
                  <div className='mt-12 flex justify-center lg:mt-20'>
                    <motion.img
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      src={slide.image}
                      className='w-[250px] lg:w-[350px] object-contain'
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ==== Bottom Ellipse ==== */}
          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            src={elips1}
            className='mix-blend-multiply absolute opacity-10 left-0 -bottom-50'
            alt="Bottom Ellipse"
          />
        </div>
      </section>
    </div>
  )
}

export default Banner
