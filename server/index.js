require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const auth = require('./routes/auth')
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use('/api/auth',auth)
app.use('/api/user',require('./routes/user'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/list',require('./routes/list'))
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})