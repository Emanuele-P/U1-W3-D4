const generateTable = () => {
  const bingoTable = document.querySelector('.bingo-table')
  const table = document.createElement('table')
  table.style.width = '100%'

  let number = 1

  for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < 10; j++) {
      if (number <= 75) {
        const cell = document.createElement('td')
        cell.innerText = number
        row.appendChild(cell)
        number++
      }
    }
    table.appendChild(row)
  }
  bingoTable.appendChild(table)
}

generateTable()

const bingoNumbers = []
for (let i = 1; i <= 75; i++) {
  bingoNumbers.push[i]
}
const drawnNumbers = []

const drawNumber = () => {
  if (bingoNumbers === 0) {
    return 'All numbers have been drawn!'
  }

  const randomNumber = Math.floor(Math.random() * bingoNumbers.length)
  const number = bingoNumbers.splice(randomNumber, 1)[0]
  drawnNumbers.push(number)

  document.getElementsByClassName('last-drawn-number').innerText =
    'Drawn Number:' + ' ' + number

  const cells = document.querySelectorAll('.bingo-table td')
  cells.forEach((cells) => {
    if (parseInt(cells.innerText) === number) {
      cell.classList.add('highlighted')
    }
  })

  return number
}

document
  .querySelector('#draw-number-button')
  .addEventListener('click', drawNumber)
