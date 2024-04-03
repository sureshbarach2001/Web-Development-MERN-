const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
let users = [
    { id: 1, username: "abasit", password: 1234 },
    { id: 2, username: "rai", password: 123 },
    { id: 3, username: "ali", password: 123456 }
]
app.post('/login', (req, res) => {
    const { username, password} = req.body;
    
    if (username === 'Basit' && password === 'Adbul') {
        res.redirect('/success?username=' + username);
    } else {
        res.redirect('/?invalid=true');
    }
});

app.get('/success', (req, res) => {
    const { username } = req.query;
    res.send(`Welcome, ${username}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on:${PORT}`);
});