
export async function calcularPontuacao(respostas) {

    let acertos = 0;
    let pontuacao = 0;

    for (const resposta of respostas) {

        const alternativa =
            await buscarAlternativa(
                resposta.idAlternativa
            );

        if (alternativa.correta) {

            acertos++;

            if (alternativa.nivel === "facil") {
                pontuacao += 1;
            }

            if (alternativa.nivel === "medio") {
                pontuacao += 3;
            }

            if (alternativa.nivel === "dificil") {
                pontuacao += 5;
            }
        }
    }

    return {
        acertos,
        pontuacao
    };
}

