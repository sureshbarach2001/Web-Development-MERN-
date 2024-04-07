const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Schema = require('./modules/Schema');
//Execute express 
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

const port = 4001;

const connectionString = process.env.MONGO_URI;
mongoose.connect(connectionString)
    .then(() => console.log('Connected to the database…'))
    .catch((err) => console.error('Connection error:', err));


app.get('/Info', async (req, res) => {
    const todos = await Schema.find();
    res.json(todos);
});
app.get('/Info/:id', async (req, res) => {
    try {
        const info = await Schema.findOne({ _id: req.body._id });
        if (info == null) {
            return res.status(404).json({ message: "Info not found" });
        }
        res.status(201).json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/Info/new', async (req, res) => {
    const newTask = await Schema.create(req.body);
    res.status(201).json({ newTask })
})

app.delete('/Info/delete/:id', async (req, res) => {
    try {
        const result = await Schema.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`)); 