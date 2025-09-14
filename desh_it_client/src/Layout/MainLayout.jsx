import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { DotLoader } from "react-spinners";
import { useEffect, useState } from 'react';

const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <DotLoader
                    color="#fa8070"
                    cssOverride={{}}
                    loading
                    speedMultiplier={1.5}
                />
            </div>
        );
    }
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