import { pool } from "../config/database.js";

export const buscarPerguntasPorDisciplina = async (idDisciplina) => {

    const [rows] = await pool.execute(`
    
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