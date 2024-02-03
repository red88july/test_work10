import {Router} from "express";
import {RowDataPacket} from "mysql2";
import serverMySQL from "../serverMySQL";
import {imagesUpload} from "../multer";
import {NewsPost} from "../types";

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

        const [results, error] =
            await serverMySQL.getConnection().query(
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

newsRouter.get('/', async (req, res) => {

    try {
        const [results] =
            await serverMySQL.getConnection().query(
                'SELECT news.id, news.image, news.title, news.datetime FROM news;');

        res.status(200).json(results);

    } catch (error) {
        console.error('Error GET items:', error);
        res.status(500).send({error: 'Internal Server Error'});
    }
});

newsRouter.get('/:id', async (req, res, next) => {

    try {

        const [results, error] =
            await serverMySQL.getConnection().query(
                'SELECT news.id, news.title, news.datetime, news.content, news.image FROM news ' +
                'WHERE news.id = ?; ',
                [req.params.id],) as RowDataPacket[];

        const news = results[0];

        if (!news) {
            return res.status(404).send({error: 'News not found!'});
        }
        res.status(200).json(results);

        if (error) {
            console.error('Error get by id news:', error);
            res.status(500).send({error: 'Internal server error'})
        }

    } catch (e) {
        return next(e);
    }

});

newsRouter.delete('/:id', async (req, res, next) => {
    try {
        const [result] = await serverMySQL.getConnection().query(
            'DELETE FROM news WHERE id = ? LIMIT 1;',
            [req.params.id]) as RowDataPacket[];

        if (result) {
            res.status(200).send({success: "Resource on news table was been deleted!"});
        }

    } catch (e) {
        return next(e);
    }
});