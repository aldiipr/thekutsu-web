import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";



const SosmedFloatingButton = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
            <a 
            href="https://wa.me/6285669706652"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
            aria-label="WhatsApp"
            >
                <FaWhatsapp className="w-6 h-6" />
            </a>
            <a 
            href="https://instagram.com/thekutsuhunter"
            target="_blank"
            rel="noopener norefrrer"
            className="p-3 rounded-full shadow-lg transition hover:scale-110 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
            aria-label="Instagram"
            >
                <FaInstagram className="w-6 h-6 text-white" />
                
            </a>
        </div>
    )
};



export default SosmedFloatingButton;