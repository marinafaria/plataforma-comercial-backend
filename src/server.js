const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');

require('dotenv').config();

const app = express();
const routes = require('./routes');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}`, {
   useNewUrlParser: true 
}).then(() => {
   console.log('Database connected!');
});

app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); 

// npm run dev
