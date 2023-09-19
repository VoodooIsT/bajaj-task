const express = require('express');
const router = express.Router();
const {SuccessResponse, ErrorResponse} = require('../util/responses')

router.post('/', (req, res) => {
    const {data} = req.body;
    const alphabets = [];
    const numbers = [];

    data.forEach(item => {
        if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
        } else if (/[0-9]/.test(item)) {
            numbers.push(item);
        }
        else{
            ErrorResponse.message = "Invalid user input"
            res.status(400).json(ErrorResponse)
        }
    });

    const highest_alphabet = alphabets.reduce((max, current) => max > current ? max : current, '');

    SuccessResponse.alphabets = alphabets;
    SuccessResponse.numbers = numbers;
    SuccessResponse.highest_alphabet = highest_alphabet;

    res.status(200).json(SuccessResponse);
});


router.get('/', (req, res) => {
    try{
        res.json({ operation_code: "12345" });
    } catch (err){
        res.status(500).json({message: `Something went wrong!, ${err.message}`});
    }
});

module.exports = router;