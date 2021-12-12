
// const linha = document.querySelectorAll('tr')

// console.log(coluna);

// const colunaValue = coluna.innerHTML;

// console.log(colunaValue);

// if (colunaValue > 0){
//     (coluna).classList.add('green');
// }
// else{
//     (coluna).classList.add('red');

// }


function mudaCor(){
    const coluna=  document.querySelectorAll('.tabela td:nth-child(2)');
    const coluna=  document.querySelector('.tabela td:nth-child(2)');
    const colunaValue = coluna.Value;
    for( let i = 0; i < coluna.length; i++ ){
        
        console.log(colunaValue);

        if (colunaValue > 0){
            (coluna[i]).classList.add('green');
        }
        else{
            (coluna[i]).classList.add('red');

        }


    }
};

mudaCor();