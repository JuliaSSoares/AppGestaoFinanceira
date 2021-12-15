const btn = document.querySelector("#send");

btn.addEventListener("click", function(event){

    event.preventDefault();

    const selecionaTitulo = document.querySelector("#titulo");
    const selecionaValor = document.querySelector("#valorLancamento");
    const selecionaData = document.querySelector("#data");
 

    const titulo = selecionaTitulo.value;
    const valor = selecionaValor.value;
    const data = selecionaData.value;


    validaVazio(titulo, valor, data);
    validaNumero(valor)

})


function validaVazio(titulo, valor, data){
    if(titulo.length == 0 || 
        valor.length == 0 ||
        data.length == 0 ){
        return alert("Por favor preencha TODOS os campos antes de enviar!")
    }else { return }
}

function validaNumero(valor){
    if(isNaN(valor)){
        return valorInvalido()
    }
}


function valorInvalido(){
    const selecionaMensagem = document.querySelector('#mensagemErro');
    selecionaMensagem.innerText = ("");
    const selcionaErro = document.querySelector('#mensagemErro');
    selcionaErro.innerText = ("Valor inválido!");
}



// function positivoNegativo(valor){
//     if( ){

//     }
// }
