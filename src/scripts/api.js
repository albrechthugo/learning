const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('/', async ( req, res ) => {
    const { data } = await axios.get(`https://api.github.com/users/${req.query.user}`)

    return res.json(data);
});

app.listen('4567');