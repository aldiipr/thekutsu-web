import { Link } from "react-router-dom";



const Hero = () => {
    return (
        <section className="bg-white py-20 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                Temukan sepatu impianmu!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                JASTIP sepatu original aman dan terpercaya. Lihat, pilih, titip dan tunggu sampai dirumahmu!
            </p>
            <Link to="/produk" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Lihat koleksi
            </Link>

        </section>
    )
}


export default Hero;