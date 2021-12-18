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

router.get('/cadastro', (req, res) => res.render("cadastro"))

router.post('/cadastro', (req, res, next) => {

    const query = /*sql*/ `
      INSERT INTO ClIENTE (NOME, CPF, EMAIL, SENHA)
    VALUES (?, ?, ?, ?) `
    db.run(query, [req.body.nome, req.body.cpf, req.body.email, req.body.senha],  err => {
        if (err) {
            console.log(err.message);
            return next(err);
        }
        res.redirect("cadastro")
    })
});



router.get('/login', (req, res) => res.render("login"))
router.post('/login', (req, res) => res.render("login"))

router.get('/novo_lancamento', (req, res) => res.render("novo_lancamento"))

router.post('/novo_lancamento', (req, res, next) => {
    const query = /*sql*/`
    INSERT INTO TRANSACAO (DESCRICAO, VALOR, DATE, TIPO)
    VALUES (?, ?, ?, ?);
    `
    db.run(query, [req.body.descricao, req.body.valor, req.body.date, req.body.tipo], err => {
        
        if (err) {
            console.log(err.message)
            return next(err);
        }
        res.redirect("meus_lancamentos")
    })
});

router.get('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))
//router.post('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))

router.get('/encerramento', (req, res) => res.render("encerramento"))
router.get('/equipe', (req, res) => res.render("equipe"))

module.exports = router