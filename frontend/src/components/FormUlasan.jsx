import React, {useState} from "react";
import { useParams } from "react-router-dom";
// import { post } from "../../../backend/routes/reviews";


const FormUlasan = () => {
    const {id} = useParams();


    const [form, setForm] = useState({
        name: '',
        rating: '5',
        comment: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/reviews', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({...form, product_id : parseInt(id)})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            alert("Ulasan berhasil dikirim");

        });

        console.log("ulasan dikirim:", form);


        setForm({
            name: '',
            rating: '5',
            comment: '',
        });
    };

    
    return (
        <form onSubmit={handleSubmit} className="">
            <h2 className="text-xl font-bold">Tulis Ulasan</h2>

            <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            className="border px-3 py-2 w-full rounded"
            required
             />

             <select 
             name="rating" 
             value={form.rating}
             onChange={handleChange}
             className="border  px-3 py-2 w-full rounded">
                {[1, 2, 3, 4, 5].map((rate) => (
                    <option key={rate} value={rate}>
                        {rate} ⭐
                    </option>
                ))}
             </select>

             <textarea 
             name="comment"
             value={form.comment}
             onChange={handleChange}
             placeholder="Tulis Ulasan Anda"
             className="border px-3 py-2 w-full rounded"
             rows={4}
             required />
             
             <button
             type="submit"
             className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded">
                Kirim Ulasan
             </button>

        </form>
    )
};


export default FormUlasan;