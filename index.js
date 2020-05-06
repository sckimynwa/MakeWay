const express = require('express');
const app = express();

const port = 3000;
// 나중에 static url은 사용자의 diskurl로 수정.
const staticUrl = '/Users/sangchulkim/Desktop/Project/MakeWay/public';
const staticImgurl = 'http://localhost:3000/public/img.png';

const Tesseract = require('tesseract.js');

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

// middlewares
app.use('/public', express.static('public'));

// default route
app.get('/', (req, res, next) => {
    res.send('hello world');
});

// image to text
app.post('/image', upload.single('img'), (req, res, next) => {
    Tesseract.recognize(staticImgurl, 'kor', 'eng')
        .then(({ data: { text } }) => {
            res.send(text);
        });
});

// server start
app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});