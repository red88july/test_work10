import express from 'express';
import cors from 'cors';

import {newsRouter} from "./routers/news";
import {commentsRouter} from "./routers/comments";
import serverMySQL from "./serverMySQL";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/news', newsRouter);
app.use('/comments', commentsRouter);

const run = async () => {
    await serverMySQL.init();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
};

void run();