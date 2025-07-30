import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom"
import SosmedFloatingButton from "../components/SosmedFloatingButton"
import Footer from "../components/Footer"



const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <SosmedFloatingButton />
            <Footer />
        </div>
    )
}

export default MainLayout;