/* eslint-disable no-undef */
import GameBoard from './GameBoard'

describe('GameBoard class', () => {
    const size = 10
    const gameBoard = new GameBoard()
    const board = GameBoard.createEmptyBoard(size)
    it('creates a 2 dimensional array of required size', () => {
        expect(board.length).toEqual(size)
        expect(board[0].length).toEqual(size)
        expect(board[9].length).toEqual(size)
    })
    it('board is populated with correct object', () => {
        expect(board[0][0]).toEqual({ ship: null, hasBeenShot: false })
        expect(board[9][9]).toEqual({ ship: null, hasBeenShot: false })
    })
    it('gameBoard is correctly created', () => {
        expect(gameBoard.board).toEqual(board)
        expect(gameBoard.ships).toEqual([])
    })

    const testShip = {
        length: 3,
        hits: 0,
        sunk: false,
    }
    it('place ship', () => {
        expect(
            gameBoard.placeShip(3, [
                [0, 1],
                [0, 2],
                [0, 3],
            ])
        ).toBe(true)

        expect(gameBoard.board[1][0].ship).toEqual(testShip)
        expect(gameBoard.board[2][0].ship).toEqual(testShip)
        expect(gameBoard.board[3][0].ship).toEqual(testShip)
    })
    it('ship is placed in ship array', () => {
        expect(gameBoard.ships[0]).toEqual(testShip)
    })
    it('ship already in coordinates', () => {
        expect(
            gameBoard.placeShip(3, [
                [0, 1],
                [0, 2],
                [0, 3],
            ])
        ).toEqual(false)
    })

    it('receive attack missed shot', () => {
        expect(gameBoard.receiveAttack([2, 1])).toEqual({
            true: 'missed',
            coordinate: [2, 1],
        })
        expect(gameBoard.board[1][2].hasBeenShot).toEqual(true)
    })
    it('receive attack hit shot', () => {
        expect(gameBoard.receiveAttack([0, 1])).toEqual({
            true: 'touched',
            coordinate: [0, 1],
        })
        expect(gameBoard.board[1][0].hasBeenShot).toEqual(true)
    })
    it('receive attack already touched cell', () => {
        expect(gameBoard.receiveAttack([2, 1])).toEqual({
            false: 'alreadyTouched',
        })
    })
    it('all ship are not sunk', () => {
        expect(gameBoard.allShipsSunk()).toEqual(false)
    })
    it('receive attack hit shot and sunk', () => {
        gameBoard.receiveAttack([0, 2])
        expect(gameBoard.receiveAttack([0, 3])).toEqual({
            true: 'sunk',
            coordinate: [0, 3],
        })
    })

    it('all ship are sunk', () => {
        expect(gameBoard.allShipsSunk()).toEqual(true)
    })
})
