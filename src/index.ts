import express, { Request, Response } from 'express';
import cors from 'cors';
import path from "path";
require('dotenv').config();

const app = express();
const {PORT = 3001} = process.env;
const staticPath = path.join(__dirname, '../ModelDataTEST', 'model_data');

app.use(cors());
app.use(express.json());
app.use(express.static(staticPath));

app.get('/model_metadata', (req: Request, res: Response) => {
  res.sendFile(staticPath + '/model.json')
})

app.listen(PORT, () => {
  console.log(`Server starting on ${PORT} port`)
})