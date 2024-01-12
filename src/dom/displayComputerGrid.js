export default function displayComputerGrid(computerBoard, computer) {
    const main = document.querySelector('#main')

    const computerDiv = document.createElement('div')

    const computerGrid = document.createElement('div')
    computerGrid.classList.add('grid')

    const computerName = document.createElement('h1')
    computerName.innerText = computer.getName()
    computerDiv.appendChild(computerName)

    computerBoard.getBoard().forEach((row, y) => {
        row.forEach((cell, x) => {
            const rect = document.createElement('rect')
            rect.classList.add('computer-cell')
            rect.classList.add('black')
            rect.setAttribute('x', `${x}`)
            rect.setAttribute('y', `${y}`)
            computerGrid.appendChild(rect)
        })
    })
    computerDiv.appendChild(computerGrid)
    main.appendChild(computerDiv)
}
