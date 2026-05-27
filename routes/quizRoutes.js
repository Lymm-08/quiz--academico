import express from "express";

import {
    getPerguntas
}
from "../controllers/quizController.js";

const router = express.Router();

router.get(
    "/perguntas/:id",
    getPerguntas
);

export default router;