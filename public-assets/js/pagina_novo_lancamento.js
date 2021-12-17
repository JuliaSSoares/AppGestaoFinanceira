$("#datepicker").datepicker({ dateFormat: "dd/mm/yy" }).val();

const btn = document.querySelector("#send");

btn.addEventListener("click", function (event) {
  const selecionaValor = document.querySelector("#valorLancamento");
  const valor = selecionaValor.value;

  validaNumero(event, valor);
});



function validaNumero(event, valor) {
  if (isNaN(valor)) {
    event.preventDefault();
    return valorInvalido();
  }
}

function valorInvalido() {
  const selecionaMensagem = document.querySelector("#mensagemErro");
  selecionaMensagem.innerText = "";
  const selcionaErro = document.querySelector("#mensagemErro");
  selcionaErro.innerText = "Valor inválido!";
}

