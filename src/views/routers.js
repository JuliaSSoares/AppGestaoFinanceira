//Rotas da aplicação
const express = require("express")
const router = express.Router()
const sqlite = require("sqlite").verbose() // Versão verbosa. Contem mais argumentos



//Acesso ao banco de dados
const db = new sqlite.Database(
    "./dgit adddatabase/Esqueleto_DB.db",
    sqlite.OPEN_READWRITE,
    err => {
        if (err) {
            console.log(err.message)
            return
        }
        console.log("Conexão com BD efetuada com sucesso")
    }
)



router.get('/', (req, res) => res.render("../index"))
router.get('/cadastro', (req, res) => res.render("cadastro"))
router.get('/login', (req, res) => res.render("login"))
router.post('/novo_lancamento', (req, res) => res.render("novo_lancamento"))
router.get('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))


module.exports = router