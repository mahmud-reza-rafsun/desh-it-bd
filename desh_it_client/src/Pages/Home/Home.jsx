import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Testimonial from '../../components/Testimonial/Testimonial';
import OurServices from '../../components/OurServices/OurServices';
import Products from '../../components/Products/Products';
import Projects from '../../components/Projects/Projects';
import Digital from '../../components/Digital/Digital';
import Techonology from '../../components/Techonology/Techonology';
import Sponsor from '../../components/Sponsor/Sponsor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div>
            <Banner />
            <Testimonial />
            <OurServices />
            <Products />
            <Projects />
            <Digital />
            <Techonology />
            <Sponsor />
        </div>
    );
};

export default Home;