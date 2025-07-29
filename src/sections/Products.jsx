import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";







const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log("gagal ambil produk", err))
    }, []);


    return (
        <section className="py-10 px-5">
            <h2 className="text-2xl font-bold text-center mb-6">Produk Tersedia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products
                .filter ((product)=> product.available)
                .map ((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        </section>
    )
};




export default Products;