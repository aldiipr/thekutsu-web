const express = require("express");
const  db = require("../db");



const router = express.Router();


router.get("/api/products", (req, res) => {
    db.query("SELECT * FROM products", (err, data) => {
        if(err) return res.status(500).json({message: "gagal ambil data", error: err})
        return res.json(data);
    });
});

router.get("/api/products/:id", (req, res) => {
    const productId = parseInt(req.params.id)

    db.query("SELECT*FROM products WHERE id=?", [productId], (err, data) => {
        if (err) return res.status(500).json({message: "gagal ambil produk", error:err});
        if (data.length === 0) return res.status(400).json({message: "produk tidak ditemukan"});

        return res.json(data[0]);
    });
});


module.exports = router;