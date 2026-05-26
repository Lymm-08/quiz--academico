import { pool } from "../config/database.js";

export const insertQuestoes = async (questao) => {

    const [resultado] = await connection.execute(
        'INSERT INTO questao (enunciado, pontuacao, id_disciplina) VALUES (?, ?, ?)',
        [questao.enunciado, questao.pontuacao, questao.id_disciplina]
    );

    return resultado;
};

export const updateQuestoes = async (questao) => {

    const [resultado] = await connection.execute(
        'UPDATE questao SET enunciado = ?, pontuacao = ?, id_disciplina = ? WHERE id = ?',
        [
            questao.enunciado,
            questao.pontuacao,
            questao.id_disciplina,
            questao.id
        ]
    );

    return resultado;
};

export const deleteQuestoes = async (id) => {

    const [resultado] = await connection.execute(
        'DELETE FROM questao WHERE id = ?',
        [id]
    );

    return resultado;
};

export const buscarPerguntasPorDisciplina = async (idDisciplina) => {

    const [rows] = await connection.execute(`
        SELECT 
            q.id,
            q.enunciado AS pergunta,
            q.pontuacao,
            a.perguntas AS alternativa,
            a.correta
        FROM questao q
        INNER JOIN alternativa a
            ON q.id = a.id_questao
        WHERE q.id_disciplina = ?
    `, [idDisciplina]);

    return rows;
};
