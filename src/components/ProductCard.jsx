
import { Link } from "react-router-dom";
import { products } from "../data/products";


const ProductCard = ({ id, name, image, price }) => {
    return (
        <div className="border rounded-lg shadow-md hover:shadow-lg  transition overflow-hidden flex flex-col h-full">
            <Link to={`/produk/${id}`} className="flex flex-col flex-1">
                <img src= {image} alt={name} className="w-full h-48 object-contain rounded-t-md"/>
                <div className="bg-[#f2f2f2] w-full h-auto rounded-b-lg py-1 flex flex-col justify-between flex-1 px-4  text-center">
                    <h3 className="mt-2 text-lg font-semibold font-thin">{name}</h3>
                    <p className="text-gray-600 mt-auto mb-2">IDR {price}</p>
                </div>
            </Link>
            
        </div>
    )
};



export default ProductCard;