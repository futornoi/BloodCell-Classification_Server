import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express()
const PORT = 3001

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Maksim')
})

app.listen(PORT, () => {
  console.log(`Server starting on ${PORT} port`)
})