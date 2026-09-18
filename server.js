const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());


app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'index.html'));
});


app.post('/api/products', (req, res) => {
    const product = req.body;

    console.log('Product received:', product);

    res.json(product);
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});