import express from 'express'
import 'dotenv/config';
import videoRouter from './routes/videos.js';
import cors from 'cors'
import fs from 'fs';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.use(express.static('public'));
app.use('/videos', videoRouter);

app.get('/', (_req, res) => {
    try{
        const videoData = JSON.parse(fs.readFileSync('./data/videos.json'));
        console.log(videoData)
        res.json(videoData);
    } catch {   
        res.status(404).send('Could not find your video');
    }
})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});