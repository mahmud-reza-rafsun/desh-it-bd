import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-290px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;