const express = require("express")
const router = express.Router()


//Acesso ao banco de dados


router.get('/', (req, res) => res.render("../../index"))
router.get('/cadastro', (req, res) => res.render("cadastro"))
router.get('/login', (req, res) => res.render("login"))
router.get('/novolancamento', (req, res) => res.render("novo_lancamento"))
router.get('/meuslancamentos', (req, res) => res.render("meus_lancamentos"))
//router.post('/novo_lancamento', (req, res) => res.render("novo_lancamento"))

module.exports = router