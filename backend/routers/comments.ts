import serverMySQL from "../serverMySQL";
import {RowDataPacket} from "mysql2";
import {Router} from "express";
import {CommentsPost} from "../types";

export const commentsRouter = Router();

commentsRouter.post('/', async (req, res, next) => {

    try {
        if (req.body.author === '') {
            req.body.author = 'Anonymous';
        }

        const Comments: CommentsPost = {
            news_id: req.body.news_id,
            author: req.body.author,
            comment: req.body.comment
        }

        const [results, error] =
            await serverMySQL.getConnection().query(
                'INSERT INTO comments SET ?', Comments) as RowDataPacket[];

        if (error) {
            console.error('Error post comment:', error);
            res.status(500).send({error: 'Internal Server Error'});
        } else {
            const insertComment = {...Comments, id: results.insertId};
            res.status(201).json(insertComment);
        }

    } catch (e) {
        return next(e);
    }
});

commentsRouter.get('/', async (req, res) => {
    try {

        let query = 'SELECT comments.id, comments.news_id, comments.author, comments.comment FROM comments;';

        if (req.query.news_id) {
            query = 'SELECT comments.comment FROM comments WHERE comments.news_id = ? ;';
        }

        const [comments] = await serverMySQL.getConnection().query(query, [req.query.news_id]);

        res.status(200).json(comments);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


commentsRouter.delete('/:id', async (req, res, next) => {
    try {
        const [result] = await serverMySQL.getConnection().query(
            'DELETE FROM comments WHERE id = ? LIMIT 1;',
            [req.params.id]) as RowDataPacket[];

        if (result) {
            res.status(200).send({success: "Resource on comments table was been deleted!"});
        }

    } catch (e) {
        return next(e);
    }
});

