import express from "express";

import {

    cadastrarUser, 
    loginUser, 
    redefinirSenha
    } from "../controllers/userController.js";

    const router = express.Router();

    // CADASTRO
    router.post("/cadastro", cadastrarUser);

    // LOGIN
    // router.post("/login", loginUser);
    router.post('/login', async (req, res) => {

    console.log("BODY:", req.body);

    const { email, senha } = req.body;

    console.log("EMAIL:", email);
    console.log("SENHA:", senha);

    const usuario = await buscarUsuarioPorEmail(email);

    console.log("USUARIO:", usuario);

    if (!usuario || usuario.senha !== senha) {

        return res.status(401).json({
            mensagem: 'Email ou senha inválidos'
        });

    }

    return res.status(200).json({
        mensagem: 'Login realizado com sucesso'
    });

});

    // REDEFINIR SENHA
    router.put("/redefinir-senha", redefinirSenha);

    export default router;