
import express from 'express';
import { buscarPerguntasPorDisciplina } from '../models/quizModel.js';

const router = express.Router();

router.get('/perguntas/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const perguntas =
            await buscarPerguntasPorDisciplina(id);

        res.json(perguntas);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            erro: "Erro ao buscar perguntas"
        });
    }
});

export default router;
