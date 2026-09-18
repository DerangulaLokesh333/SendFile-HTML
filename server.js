const express = require('express');
const path = require('path');

const app = express();

app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'index.html'));
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});