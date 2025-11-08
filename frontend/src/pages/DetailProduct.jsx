import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FormUlasan from "../components/FormUlasan";




const DetailProduct = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [otherProducts, setOtherProducts] = useState([]);
    const [reviews, setReviews] = useState([]);


    useEffect(()=> {
        fetch(`http://localhost:5000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log("gagal ambil produk", err));

        fetch(`http://localhost:5000/api/products`)
        .then((res) => res.json())
        .then((data) => {
            const others = data 
            .filter((p) => p.id !== parseInt(id) && p.available)
            .slice(0, 4);
            setOtherProducts(others);
        });

        fetch(`http://localhost:5000/api/reviews/${id}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("gagal ambil ulasan", err));

    }, [id]);

    if (!product) return <p className="text-center p-10">Memuat produk...</p>;

   


    return (
        <div className="max-w-6xl mx-auto p-4 space-y-10">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img src={product.image} alt={product.name} className="w-full max-h-96 object-contain rounded-xl shadow" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                    <a href="https://wa.me/6285669706652" className="bg-black rounded-full text-white w-full md:w-auto px-6 py-2 hover:bg-gray-800 transition self-start">Pesan sekarang</a>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold">Ulasan Pembeli</h2>
                 {reviews.length === 0? (
                    <p className="text-gray-500 italic">Belum ada ulasan.</p>
                 ) : (
                    <div className="space-y-2">
                        {reviews.map((r) => (
                            <div key={r.id} className="bg-gray-100 p-4 rounded shadow">
                                <p className="font-semibold">{r.name} - {r.rating}⭐</p>
                                <p>{r.comment}</p>
                            </div>
                        ))}
                    </div>
                 )}
            </div>
            <div>
                <FormUlasan productId={id} />
            </div>
            <div>
                <h2 className="text-gray-600 text-xl font-semibold">Produk Lainnya</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    {otherProducts.map((p) => (
                        <ProductCard
                            key={p.id} {...p}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}


export default DetailProduct;