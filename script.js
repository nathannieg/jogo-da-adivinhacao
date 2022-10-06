const input = document.querySelector('input')
const tryButton = document.querySelector('form button')
const tryAgainButton = document.querySelector('.retry-screen button')
const statusMessage = document.querySelector('.try-again-message')
const numOfAttempsMessage = document.querySelector('h2')
const tryScreen = document.querySelector('.try-screen')
const tryAgainScreen = document.querySelector('.retry-screen')
let randomNum = ''
let count = 0

function generateRandomNumber() {
  randomNum = Number(Math.round(Math.random() * 10))
  return randomNum
}

generateRandomNumber()

//console.log('Random aqui: ', generateRandomNumber())

tryButton.addEventListener('click', function (e) {
  e.preventDefault()
  const num = Number(input.value)

  if (num == randomNum) {
    //console.log('Igual: ', num, randomNum)
    count++
    showRetryScreen()
  } else {
    showResultAfterWrongTry(num)
  }

  input.value = ''
})

tryAgainButton.addEventListener('click', function () {
  showTryScreen()
  hideStatusMessage()
})

function showRetryScreen() {
  tryScreen.classList.add('hide-try-screen')
  tryAgainScreen.classList.remove('hide-retry-screen')
  numOfAttempsMessage.textContent = `Você acertou em ${count} tentativa(s)!`
  statusMessage.classList.add('hide-message')
}

function showStatusMessage() {
  statusMessage.classList.remove('hide-message')
}

function hideStatusMessage() {
  statusMessage.classList.add('hide-message')
}

function showTryScreen() {
  tryScreen.classList.remove('hide-try-screen')
  tryAgainScreen.classList.add('hide-retry-screen')
  input.value = ''
  generateRandomNumber()
  count = 0
}

function showResultAfterWrongTry(num) {
  const isInvalid = num < 0 || num > 10 || num == ''

  if (isInvalid) {
    count = count
    statusMessage.classList.remove('hide-message')
    statusMessage.textContent = `${num} é um número inválido. Digite um valor entre 0 e 10.`
  } else {
    //console.log('Diferente: ', num, randomNum)
    showStatusMessage()
    statusMessage.textContent = `Humm, não foi dessa vez. Tente de novo.`
    count++
  }
}
