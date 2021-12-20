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

//Renderiza a página inicial (Home)
router.get('/', (req, res) => res.render("../../index"))

//Renderiza a página Cadastro
router.get('/cadastro', (req, res) => res.render("cadastro"))

//Insere no Banco de Dados as informações preenchidas pelo usuário nos formulários da página Cadastro
router.post('/cadastro', (req, res, next) => {

    const query = /*sql*/ `
      INSERT INTO CLIENTE (NOME, CPF, EMAIL, SENHA)
    VALUES (?, ?, ?, ?) `

    db.run(query, [req.body.nome, req.body.cpf, req.body.email, req.body.senha],  err => {
        if (err) {
            console.log(err.message);
            return next(err);
        }

        inserirConta()
        res.redirect("login")
    })
});

//Renderiza a página Login
router.get('/login', (req, res) => res.render("login"))

//Renderiza a página Novo Lançamento
router.get('/novo_lancamento', (req, res) => res.render("novo_lancamento"))

//Insere no Banco de Dados as informações preenchidas pelo usuário nos formulários da página Novo Lançamento
router.post('/novo_lancamento', (req, res, next) => {
    const query = /*sql*/`
    INSERT INTO TRANSACAO (DESCRICAO, VALOR, DATATRANSACAO, TIPO)
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

//Renderiza a página Meus Lançamentos
router.get('/meus_lancamentos', (req, res, next) => {
    const query = /*sql*/`
    SELECT DESCRICAO, VALOR, DATATRANSACAO FROM TRANSACAO ORDER BY DATATRANSACAO DESC
    `

    db.all(query, (err, transacoes) => {
        if (err)
        {
            console.log(err.message)
            return next(err)
        }

        console.log(transacoes[0].DESCRICAO)
        res.render("meus_lancamentos", {transacoes})
    })
})


//Renderiza a página Encerramento
router.get('/encerramento', (req, res) => res.render("encerramento"))

//Renderiza a página Equipe
router.get('/equipe', (req, res) => res.render("equipe"))




// Função para inserir na tabela CONTA as informações, ficará condicionada ao sucesso da função de inserção na tabela CLIENTE
function inserirConta() {

    const query = /*sql*/ `
    INSERT INTO CONTA (IDCLIENTE)
    SELECT IDCLIENTE FROM CLIENTE ORDER BY IDCLIENTE DESC LIMIT 1
    `

    db.run(query,  err => {
        if (err) {
            console.log(err.message);
            return(err)
        }
    })
}

module.exports = router