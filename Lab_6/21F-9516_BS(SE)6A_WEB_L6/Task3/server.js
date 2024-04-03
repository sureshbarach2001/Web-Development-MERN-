const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get(["/", "/index.ejs"], (req, res) => {
    res.render("index", {totalFare: ""});
});

app.get('/calculatefare', (req, res) => {
    let passengers = Number(req.query.passengers);
    let fare = Number(req.query.fare);
    let city = String(req.query.city);

    let tFare = passengers * fare;

    if (passengers >= 5 && passengers < 7) {
        tFare *= 0.9; // 10% discount
    } else  if (city === "lahore" || city === "fsd") {
        tFare *= 0.7; // 30% discount
    }else if (passengers >= 7) {
        tFare *= 0.85; // 15% discount
    }

    res.render('index', { totalFare: tFare });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});