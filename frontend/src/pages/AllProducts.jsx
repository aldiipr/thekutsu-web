import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react";



const AllProducts = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log("gagal ambil produk", err))
    }, []);


    return (
        <div className="py-10 px-5">
            <h2 className="text-2xl font-bold text-center mb-6">Semua Produk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.map((product) => ( <ProductCard key={product.id} {...product}/>))}
            </div>
        </div>
    )
}


export default AllProducts;