const express = require('express');
const bodyParse = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// POST - PDF generation and data fetching
app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

// GET - Send generated PDF to the client
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
