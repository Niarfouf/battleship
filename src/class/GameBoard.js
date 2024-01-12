import Ship from './Ship'

export default class GameBoard {
    constructor(size = 10) {
        this.board = GameBoard.createEmptyBoard(size)
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
                const cell = this.board[coordinate[1]][coordinate[0]]
                cell.ship = newShip
            })
            this.ships.push(newShip)
            return true
        }
        return false
    }

    receiveAttack(coordinate) {
        const markedCell = this.board[coordinate[1]][coordinate[0]]
        if (markedCell.hasBeenShot === true) {
            return { false: 'alreadyTouched' }
        }
        markedCell.hasBeenShot = true
        if (markedCell.ship) {
            markedCell.ship.hit()
            if (markedCell.ship.isSunk()) {
                return { true: 'sunk', coordinate: [...coordinate] }
            }
            return { true: 'touched', coordinate: [...coordinate] }
        }
        return { true: 'missed', coordinate: [...coordinate] }
    }

    allShipsSunk() {
        return this.ships.reduce((response, ship) => {
            if (!ship.sunk || response === false) {
                return false
            }
            return true
        }, true)
    }

    verifyCoordinate(coordinatesArray) {
        let verified = true
        coordinatesArray.forEach((coordinate) => {
            if (
                coordinate[0] < 0 ||
                coordinate[1] < 0 ||
                coordinate[0] > 9 ||
                coordinate[1] > 9
            ) {
                verified = false
            }
            const cell = this.board[coordinate[1]][coordinate[0]]
            if (cell.ship) {
                verified = false
            }
        })
        return verified
    }
}
