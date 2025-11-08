const express = require("express");
const router = express.Router();
const db = require('../db');



router.get("/:productId", (req, res) => {
    const productId = parseInt(req.params.productId);

    const sql = "SELECT * FROM reviews WHERE product_id = ?";
    db.query(sql, [productId], (err, result) => {
        if (err) return res.status(500).json({ message: "Gagal ambil ulasan", error: err}) ;
        res.json(result);
    } );
});


router.post('/', (req, res) => {
    const { name, rating, comment, product_id} = req.body;
    if (!name || !rating || !comment || !product_id){
        return res.status(400).json({message: "Data tidak lengkap"});
    }
    const sql = "INSERT INTO reviews (name, rating, comment, product_id) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, rating, comment, product_id], (err, result) => {
        if(err) return res.status(500).json({error: err});
        res.status(201).json({message: 'Ulasan berhasil disimpan', id: result.insertId})
    });
});


module.exports = router;
