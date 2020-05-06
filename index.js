const express = require('express');
const app = express();

const port = 3000;
const staticUrl = '/Users/sangchulkim/Desktop/Project/MakeWay/assets';

const Tesseract = require('tesseract.js');
const bodyParser = require('body-parser');
const request = require('request');
const fs = require('fs');

const multer = require('multer');
const upload = multer({ 
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, staticUrl)
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '.png')
        }
    })
});

app.use(express.static('uploads'));

// default route
app.get('/', (req, res, next) => {
    res.send('hello world');
});

// image to text
app.post('/image', upload.single('img'), (req, res, next) => {
    
    Tesseract.recognize(
        staticUrl+'/img.png',
      ).then(({ data: { text } }) => {
        res.send(text);
      });
});

app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});