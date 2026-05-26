
import { pool } from "../config/database.js";

export async function buscarRanking() {

    const [rows] = await pool.query(`
        SELECT
            nome,
            pontuacao
        FROM usuario
        ORDER BY pontuacao DESC
        LIMIT 10
    `);

    return rows;
}

export async function salvarPontuacao(
    idUsuario,
    pontos
) {

    await pool.query(`
        UPDATE usuario
        SET pontuacao = pontuacao + ?
        WHERE id = ?
    `, [pontos, idUsuario]);
}

export default router;