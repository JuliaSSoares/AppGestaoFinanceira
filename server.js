//IMPORTAÇÕES 
const express = require('express') //chamando o express
const routers = require('./src/routers')

//INSTÂNCIA DO FRAMEWORK EXPRESS
const app = express() 


//configurando o handlebars
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views") //indica qual o diretório

//CONFIGURAÇÃO DOS CONTEÚDOS ESTÁTICOS
app.use(express.static( __dirname + "/public-assets"))

//Rotas da aplicação
app.use(routers)

//Definindo a porta 3000 como porta de escuta
app.listen(3000, () => console.log("servidor rodando na porta 3000"))