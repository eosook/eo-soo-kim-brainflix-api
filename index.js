import express from 'express'
import 'dotenv/config';
import videoRouter from './routes/videos.js';

const app = express();

app.use('/videos', videoRouter);

app.listen(8081, () => {
    console.log("App listening on 8080");
})