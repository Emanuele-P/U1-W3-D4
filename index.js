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
  bingoNumbers.push(i)
}
const drawnNumbers = []

const checkForBingo = (board) => {
  const cells = board.querySelectorAll('.cell.highlighted')
  if (cells.length === 15) {
    alert('BINGO!')
    return true
  }
  return false
}

const drawNumber = () => {
  if (bingoNumbers.length === 0) {
    document.querySelector('.last-drawn-number').innerText =
      'All numbers have been drawn!'
    return
  }

  const randomNumber = Math.floor(Math.random() * bingoNumbers.length)
  const number = bingoNumbers.splice(randomNumber, 1)[0]
  drawnNumbers.push(number)

  document.querySelector('.last-drawn-number').innerText =
    'Drawn Number: ' + number

  const cells = document.querySelectorAll('.bingo-table td')
  cells.forEach((cell) => {
    if (parseInt(cell.innerText) === number) {
      cell.classList.add('highlighted')
    }
  })
  const userBoardCells = document.querySelectorAll('.user-board .cell')
  userBoardCells.forEach((cell) => {
    if (parseInt(cell.innerText) === number) {
      cell.classList.add('highlighted')
    }
  })
  const userBoards = document.querySelectorAll('.user-board')
  userBoards.forEach((board) => {
    if (checkForBingo(board)) {
    }
  })
}

document
  .querySelector('#draw-number-button')
  .addEventListener('click', drawNumber)

const randomNumber = (range) => {
  const randomIndex = Math.floor(Math.random() * range.length)
  return range.splice(randomIndex, 1)[0]
}

const generateUserBoards = function () {
  const usersNumber = document.getElementById('users-number').value
  const gameCardContainer = document.querySelector('.game-card-container')
  gameCardContainer.innerHTML = ''

  if (parseInt(usersNumber) > 0) {
    for (let userIndex = 0; userIndex < parseInt(usersNumber); userIndex++) {
      const range = [...bingoNumbers]
      const table = document.createElement('table')
      table.className = 'user-board'

      let cellCount = 0
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        const row = document.createElement('tr')
        for (let cellIndex = 0; cellIndex < 5; cellIndex++) {
          const cell = document.createElement('td')
          cell.className = 'cell'
          if (range.length > 0) {
            const randomNum = randomNumber(range)
            cell.textContent = randomNum
            cellCount++
          }
          row.appendChild(cell)
        }
        table.appendChild(row)
      }
      gameCardContainer.appendChild(table)
    }
  }
}

document
  .getElementById('add-cards')
  .addEventListener('click', generateUserBoards)
