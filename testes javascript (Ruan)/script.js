const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTrasactionAmount = document.querySelector('#amount')


const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []


const removeTransaction = ID => {
        transactions = transactions.filter(transaction =>
            transaction.id !== ID)
        updateLocalStore()
        init()
}

const addTransactionIntoDOM = transaction => {
        const operator = transaction.amount < 0 ? '-' : '+'
        const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
        const amountWithoutOperator = Math.abs(transaction.amount)
        const li = document.createElement('li')

 li.classList.add(CSSClass)
 li.innerHTML = `
 ${transaction.name}  
 <span>${operator} R$ ${amountWithoutOperator}</span>
 <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
 x
 </button>
 `
 transactionsUl.append(li)
}
const updateBalanceValues = () => {
    const transactionAmounts = transactions
        .map(transaction => transaction.amount)
          const total = transactionAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2)
    const income = transactionAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    const expense = Math.abs(transactionAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0))
        .toFixed(2)
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
    
} 
init()

const updateLocalStore = () => {
    localStorage.setItem('transactions' , JSON.stringify(transactions) )
}

const gererateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmaunt = inputTrasactionAmount.value.trim()


 if (transactionName === '' ||  transactionAmaunt === ''){
alert('Por favor, prencha TODOS os dados. O valor da transação, a data e o título do lançamento')
return
 }   

const transaction = {
    id: gererateID(),
    name: transactionName,
    amount: Number(transactionAmaunt)
}

transactions.push(transaction)
init()

updateLocalStore()


inputTransactionName.value = ''
inputTrasactionAmount.value = ''
})