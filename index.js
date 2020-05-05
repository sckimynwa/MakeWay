const express = require('express');
const app = express();
const port = 3000;

const Tesseract = require('tesseract.js');
const bodyParser = require('body-parser');

// default route
app.get('/', (req, res, next) => {
    res.send('hello world');
});

// image to text
const multer = require('multer');
const upload = multer({
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});
app.post('/image', upload.single('img'), (req, res, next) => {
    res.send(req.file);
})

app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});