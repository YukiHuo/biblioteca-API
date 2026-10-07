
//importando express e criando o router
const express = require("express");
const router = express.Router();

//importar dependências
const validateTitle = require("../middlewares/validateTitle");
const bookController = require("../Controllers/bookController");


//chamar todas as rotas
router.post("/book", validateTitle, bookController.createBook);
router.get("/book", bookController.getBooks);
router.get("/book/:id", bookController.getBookById);
router.patch("/book/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);
router.get("/", bookController.listBooks);


module.exports = router;