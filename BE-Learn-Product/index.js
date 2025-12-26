const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Trang Chủ');
});

app.get('/product', (req, res) => {
    res.send('Danh sách sản phẩm');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
