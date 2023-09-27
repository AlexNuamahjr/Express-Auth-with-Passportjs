const express = require('express');
require('dotenv').config();
const dbConnect = require('./dbConnect');
const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, ()=>{
    dbConnect.authenticate();
    console.log(`Server is running on http://localhost:${PORT}`);
})

