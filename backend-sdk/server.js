// import files
import express from "express";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

import { connect } from './mongo/conn.js';
import auth from './routes/auth.js';
import bids from './routes/bids.js';
import post from './routes/post.js';
// use files  
app.use(cors());
app.use(express.json());

app.use('/auth', auth);
app.use('/bids', bids);
app.use('/post', post);
// get request
app.get('/', async (req, res) => {
  res.send('<h1> CATER BID API </h1>');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
// connect to mongo
connect(function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } 
  else {
    console.log('Connected to Mongo');
  }
});



