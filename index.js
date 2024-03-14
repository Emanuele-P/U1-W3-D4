const generateTable = () => {
  const bingoTable = document.querySelector('.bingo-table')
  const table = document.createElement('table')
  table.style.width = '100%'

  let number = 1

  for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < 10; j++) {
      if (number <= 76) {
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
