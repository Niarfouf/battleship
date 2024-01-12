export default function displayPlayerGrid(playerBoard, player) {
    const main = document.querySelector('#main')

    const playerDiv = document.createElement('div')
    const playerGrid = document.createElement('div')
    const playerName = document.createElement('h1')
    playerName.innerText = player.getName()
    playerDiv.appendChild(playerName)

    playerGrid.classList.add('grid')
    playerBoard.getBoard().forEach((row, y) => {
        row.forEach((cell, x) => {
            const rect = document.createElement('rect')
            if (cell.ship) {
                rect.classList.add('blue')
            } else {
                rect.classList.add('black')
            }
            rect.classList.add('player-cell')
            rect.setAttribute('x', `${x}`)
            rect.setAttribute('y', `${y}`)

            playerGrid.appendChild(rect)
        })
    })
    playerDiv.appendChild(playerGrid)
    main.appendChild(playerDiv)
}
