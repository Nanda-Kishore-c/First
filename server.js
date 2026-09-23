const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello From User2 API'
    });
});

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});
