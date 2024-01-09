import GameBoard from './GameBoard'

describe('GameBoard class', () => {
    const gameBoard = new GameBoard(10)
    gameBoard.placeShip(3, [
        [0, 1],
        [0, 2],
        [0, 3],
    ])
    const testShip = {
        length: 3,
        hits: 0,
        sunk: false,
    }
    const testShipShot = {
        length: 3,
        hits: 1,
        sunk: false,
    }
    const testShipSunk = {
        length: 3,
        hits: 3,
        sunk: true,
    }
    it('create and place ship', () => {
        expect(gameBoard.board[0][1].ship).toEqual(testShip)
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
    it('ship not already in coordinates', () => {
        expect(
            gameBoard.placeShip(3, [
                [1, 1],
                [1, 2],
                [1, 3],
            ])
        ).toEqual(true)
    })
    it('receive attack missed shot', () => {
        expect(gameBoard.receiveAttack([2, 1])).toEqual(false)
    })
    it('receive attack hit shot', () => {
        expect(gameBoard.receiveAttack([0, 1])).toEqual([true, 'touched'])
    })

    it('record missed shot', () => {
        expect(gameBoard.board[2][1].hasBeenShot).toEqual(true)
    })
    it('record hit shot', () => {
        expect(gameBoard.board[0][1].hasBeenShot).toEqual(true)
    })
    it('ship is touched when shot', () => {
        expect(gameBoard.ships[0]).toEqual(testShipShot)
    })
    it('receive attack hit shot and sunk', () => {
        gameBoard.receiveAttack([0, 2])
        expect(gameBoard.receiveAttack([0, 3])).toEqual([true, 'sunk'])
    })
    it('ship is sunk', () => {
        expect(gameBoard.ships[0]).toEqual(testShipSunk)
    })
    it('all ship are not sunk', () => {
        expect(gameBoard.allShipsSunk()).toEqual(false)
    })
    it('all ship are sunk', () => {
        gameBoard.receiveAttack([1, 1])
        gameBoard.receiveAttack([1, 2])
        gameBoard.receiveAttack([1, 3])
        expect(gameBoard.allShipsSunk()).toEqual(true)
    })
})
