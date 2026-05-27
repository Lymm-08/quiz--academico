import {
    buscarPerguntasPorDisciplina
}
from "../models/quizModel.js";

export async function getPerguntas(req, res) {

    try {

        const { id } = req.params;

        const perguntas =
            await buscarPerguntasPorDisciplina(id);

        res.status(200).json(perguntas);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            erro: "Erro ao buscar perguntas"
        });
    }
}