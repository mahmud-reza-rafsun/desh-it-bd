import Banner from '../../components/Banner/Banner';
import Testimonial from '../../components/Testimonial/Testimonial';
import OurServices from '../../components/OurServices/OurServices';
import Products from '../../components/Products/Products';
import Projects from '../../components/Projects/Projects';
import Digital from '../../components/Digital/Digital';
import Techonology from '../../components/Techonology/Techonology';
import Sponsor from '../../components/Sponsor/Sponsor';
import Info from '../../components/Info/Info';


const Home = () => {
    
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
            <Info/>
        </div>
    );
};

export default Home;