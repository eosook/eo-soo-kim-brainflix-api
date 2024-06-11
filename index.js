import express from 'express'
import 'dotenv/config';
import videoRouter from './routes/videos.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.use('/videos', videoRouter);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});