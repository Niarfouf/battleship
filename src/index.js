import './styles.css'

import displayComputerGrid from './dom/displayComputerGrid'

import displayPlayerGrid from './dom/displayPlayer'

import GameBoard from './class/GameBoard'
import Player from './class/Player'
import displayEndScreen from './dom/displayEndScreen'
import updateCell from './dom/updateCell'

const playerBoard = new GameBoard()
const computerBoard = new GameBoard()
const player = new Player('Player')
const computer = new Player('Computer')
playerBoard.placeShip(3, [
    [0, 1],
    [1, 1],
    [2, 1],
])
playerBoard.placeShip(4, [
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
])
computerBoard.placeShip(3, [
    [0, 1],
    [1, 1],
    [2, 1],
])
computerBoard.placeShip(4, [
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
])

displayPlayerGrid(playerBoard, player)
displayComputerGrid(computerBoard, computer)

const enemyCells = document.querySelectorAll('.computer-cell')
enemyCells.forEach((cell) => {
    cell.addEventListener('click', () => {
        playRound(cell)
    })
})

function playRound(cell) {
    const responsePlayerAttack = Player.attack(computerBoard, [
        parseInt(cell.getAttribute('x'), 10),
        parseInt(cell.getAttribute('y'), 10),
    ])
    if (responsePlayerAttack.true) {
        updateCell(responsePlayerAttack, 'computer')
        if (computerBoard.allShipsSunk()) {
            displayEndScreen(player)
            return
        }
        let responseComputerAttack = Player.attack(playerBoard)
        while (!responseComputerAttack.true) {
            responseComputerAttack = Player.attack(playerBoard)
        }

        updateCell(responseComputerAttack, 'player')
        if (playerBoard.allShipsSunk()) {
            displayEndScreen(computer)
        }
    }
}
