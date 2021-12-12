

let linha = document.querySelector('tbody tr:nth-child(2)'); console.log(linha)
const valor =  ((document.querySelector('tr:nth-child(2) td:nth-child(2)')).innerHTML).replace(",","."); console.log(valor)


if(valor < 0){
    linha.classList.add('red');
} else{ 
    linha.classList.add('green')
}



const nLinhas = (document.querySelectorAll('tbody tr')).length ; console.log(nLinhas)

