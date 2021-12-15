const express = require("express")
const router = express.Router()
const sqlite3 = require("sqlite3").verbose()

//Acesso ao banco de dados
const db = new sqlite3.Database(
    "./database/database.db",
    sqlite3.OPEN_READWRITE,

    err => {
        if (err) {
            console.log(err.message)
            return 
        }
        else
        {console.log("conectado com sucesso ao BD")}
    }
)

router.get('/', (req, res) => res.render("../../index"))

router.get('/cadastro', (req, res) => res.render("cadastro"))
router.post('/cadastro', (req, res) => res.render("cadastro"))

router.get('/login', (req, res) => res.render("login"))
router.post('/login', (req, res) => res.render("login"))

router.get('/novo_lancamento', (req, res) => res.render("novo_lancamento"))
router.post('/novo_lancamento', (req, res) => res.render("novo_lancamento"))

router.get('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))
router.post('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))

module.exports = router