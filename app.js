const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(cors());

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.post('/upload', (req, res) => {
    const fileFields = Object.keys(req.files);
    fileFields.forEach((el) => console.log(`Filename: ${req.files[el].name}`));
    return res.send('See server log.');
})

module.exports = app;