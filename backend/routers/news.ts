import {Router} from "express";
import {NewsPost} from "../types";
import {imagesUpload} from "../multer";
import serverMySQL from "../serverMySQL";
import {RowDataPacket} from "mysql2";

export const newsRouter = Router();

newsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {

    try {
        if (!req.body.title && !req.body.content) {
            res.status(422).send({error: 'Title or Content value is not to be an empty'});
        }

        const News: NewsPost = {
            title: req.body.title,
            content: req.body.content,
            image: req.file ? req.file.filename : null
        }

        const [results, error] = await serverMySQL.getConnection().query(
            'INSERT INTO news SET ?', News) as RowDataPacket[];

        if (error) {
            console.error('Error inserting news:', error);
            res.status(500).send({error: 'Internal Server Error'});
        } else {
            const insertNews = {...News, id: results.insertId};
            res.status(201).json(insertNews);
        }

    } catch (e) {
        return next(e);
    }
});