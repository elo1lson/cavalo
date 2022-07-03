'use strict'

const horse = document.querySelector('img')
const text = document.querySelector('.quiz')
const buttons = document.querySelectorAll('.quiz-button')
let question = 0
let sends = []

function nextQuestion(n, s) {
  if (n == 1) text.innerHTML = 'Você tem certeza que é um humano?'
  if (n == 2) text.innerHTML = 'Cavalo?🐴'
  if (n == 3) {
    horse.src = './assets/img/newHorse.png'
    text.innerHTML = 'iririnhonho?'
  }
  if (n == 4) {
    if (s[0] || s[2] || s[3]) {

      finish('winner', 'Parabéns! Você é uma cavalo!🐴👏')
    } else {
      finish('lost', 'Infelizmente você não é um cavalo😪🐴😭')
    }
  }

}

function finish(name, message) {

  buttons[1].style.display = 'none'
  buttons[0].style.display = 'none'
  horse.src = `./assets/img/${name}.png`
  text.innerHTML = message

}

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('yes-horse')) {
    sends.push(true)
    question++
    nextQuestion(question, sends)
  }
  if (target.classList.contains('no-horse')) {
    sends.push(false)
    question++
    nextQuestion(question, sends)
  }
})