const express = require('express');
const app = express();
const port = 3000;

const Tesseract = require('tesseract.js');
const bodyParser = require('body-parser');

app.use(express.static('uploads'));

// default route
app.get('/', (req, res, next) => {
    res.send('hello world');
});

// image to text
const request = require('request');
const fs = require('fs');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});
app.post('/image', upload.single('img'), (req, res, next) => {

    const url = 'localhost:3000/' + req.file.destination + req.file.filename;
    console.log(url);
    var writeFile = fs.createWriteStream('image.png');

    request(url).pipe(writeFile).on('close', function() {
        Tesseract.recognize(filename, {
            lang: 'kor'
        }).then(function(result) {
            console.log(result.text)
        });
    });


    res.send(req.file);
})

app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});