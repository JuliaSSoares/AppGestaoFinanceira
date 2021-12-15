

let linha = document.querySelector('tbody tr:nth-child(1)'); console.log(linha)
let valor =  ((document.querySelector('tr:nth-child(1) td:nth-child(2)')).innerHTML).replace(",","."); console.log(valor)


if(valor < 0){
    linha.classList.add('red');
} else{ 
    linha.classList.add('green')
}



const nLinhas = (document.querySelectorAll('tbody tr')).length ; console.log(nLinhas)

function mudaCor(){
    let linha = document.querySelector('tbody tr:nth-child(1)');
    let valor =  ((document.querySelector('tr:nth-child(1) td:nth-child(2)')).innerHTML).replace(",","."); 
    const nLinhas = (document.querySelectorAll('tbody tr')).length ; console.log(nLinhas)
    for(let i = 0; i < nLinhas; i++){
        if(valor < 0){
            linha.classList.add('red');
        } else{ 
            linha.classList.add('green')
        }
         linha = document.querySelector('tbody tr:nth-child(i)');
         valor =  ((document.querySelector('tr:nth-child(i) td:nth-child(2)')).innerHTML)
    }
}
