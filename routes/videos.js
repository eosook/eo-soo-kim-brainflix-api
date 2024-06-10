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

videoRouter
    .route('./:videoId')
    .get((req, res) =>{
        const videoIdParam = req.params.videoId;
        const videosData = readVideos();
        const foundVideo = videosData.find((video) => video.id === videoIdParam);
    })

export default videoRouter;