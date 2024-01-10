import Ship from './Ship'

export default class GameBoard {
    constructor(size = 10) {
        this.board = this.constructor.createEmptyBoard(size)
        this.ships = []
    }

    static createEmptyBoard(size) {
        const board = []
        for (let i = 0; i < size; i += 1) {
            const row = []
            for (let j = 0; j < size; j += 1) {
                row.push({ ship: null, hasBeenShot: false })
            }
            board.push(row)
        }
        return board
    }

    getBoard() {
        return this.board
    }

    getShips() {
        return this.ships
    }

    placeShip(length, coordinates) {
        const newShip = new Ship(length)
        if (this.verifyCoordinate(coordinates)) {
            coordinates.forEach((coordinate) => {
                const cell = this.board[coordinate[0]][coordinate[1]]
                cell.ship = newShip
            })
            this.ships.push(newShip)
            return true
        }
        return false
    }

    receiveAttack(coordinate) {
        const markedCell = this.board[coordinate[0]][coordinate[1]]
        if (markedCell.hasBeenShot === true) {
            return { false: 'alreadyTouched' }
        }
        if (markedCell.ship) {
            markedCell.ship.hit()
            markedCell.hasBeenShot = true
            if (markedCell.ship.isSunk()) {
                return { true: 'sunk' }
            }
            return { true: 'touched' }
        }
        markedCell.hasBeenShot = true
        return { true: 'missed' }
    }

    allShipsSunk() {
        return this.ships.reduce((response, ship) => {
            if (!ship.sunk || response === false) {
                return false
            }
            return true
        }, true)
    }

    verifyCoordinate(coordinates) {
        let valid = true
        coordinates.forEach((coordinate) => {
            const cell = this.board[coordinate[0]][coordinate[1]]
            if (cell.ship) {
                valid = false
            }
        })
        return valid
    }
}
