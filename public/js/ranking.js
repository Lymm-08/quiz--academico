
async function showRanking() {

    resultScreen.style.display = "none";

    rankingScreen.style.display = "block";

    rankingTabela.innerHTML = "";

    try {

        const response =
            await fetch("/api/ranking/ranking");

        const ranking =
            await response.json();

        ranking.forEach((usuario) => {

            rankingTabela.innerHTML += `

                <tr>

                    <td>${usuario.posicao}</td>

                    <td>${usuario.nome}</td>

                    <td>${usuario.pontuacao}</td>

                </tr>
            `;
        });

    } catch (error) {

        console.log(error);
    }
}

