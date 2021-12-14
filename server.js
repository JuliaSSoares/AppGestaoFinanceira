//IMPORTAÇÕES 
const express = require('express') //chamando o express


//INSTÂNCIA DO FRAMEWORK EXPRESS
const app = express() 


//configurando o handlebars
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src") //indica qual o diretório

//CONFIGURAÇÃO DOS CONTEÚDOS ESTÁTICOS
app.use(express.static( __dirname + "/public-assets"))

//Rotas da aplicação
app.get('/', (req, res) => res.render("../index"))
app.get('/cadastro', (req, res) => res.render("cadastro"))
app.get('/login', (req, res) => res.render("login"))
app.get('/novo_lancamento', (req, res) => res.render("novo_lancamento"))
app.get('/meus_lancamentos', (req, res) => res.render("meus_lancamentos"))


//Definindo a porta 3000 como porta de escuta
app.listen(3000, () => console.log("servidor rodando na porta 3000"))