import express from 'express';
import cors from 'cors';
import router from './src/router';
import errorHandler from './src/errorHandler';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.get(`/`, (req, res) => {
  res.send('Welcome to Space Transporter API!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

module.exports = app;
