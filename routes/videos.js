import express from 'express';
import fs from 'fs';

const videoRouter = express.Router();

const readVideos = () => {
    const videoData = fs.readFileSync('./data/videos.json');
    return JSON.parse(videoData);
}

videoRouter
    .route('/')
    .get((_req, res) => {
        const videosData = readVideos();
        res.json(videosData);
    })

export default videoRouter;