import logo from '../assets/logo.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';



const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const toggleMenu = () => {
        SetIsOpen(!isOpen);
    };


    return (
        <header className="bg-neutral-100 shadow-md px-8 flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <Link to="/">
                    <img src= {logo} alt="logo" className='h-14 w-14 object-contain'/>
                </Link>
                <h1 className="text-2xl font-bold text-black"><Link to={"/"}>The Kutsu Hunter</Link></h1>
            </div>
            <div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-2xl text-gray-800'>
                        {isOpen? <FiX/> : <FiMenu/>}
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium gap-4  ">
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    <li><Link to="/produk" className='nav-link'>Produk</Link></li>
                    <li><Link to="/tentang" className='nav-link'>Tentang</Link></li>
                </ul>
            </div>
            {isOpen && (
                <ul className='md:hidden absolute top-16 right-0 w-50% bg-white shadow-md px-4 py-2 space-y-3 text-gray-700 font-medium'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produk">Produk</Link></li>
                    <li><Link to="/tentang">Tentang</Link></li>
                </ul>
            )}
        </header>
    )
};

export default Navbar;