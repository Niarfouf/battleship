import Player from './Player'
import GameBoard from './GameBoard'

describe('Player class', () => {
    const gameBoard1 = new GameBoard()
    const gameBoard2 = new GameBoard()
    const player1 = new Player('player1', gameBoard1, gameBoard2)
    const player2 = new Player('player2', gameBoard2, gameBoard1)
    const attackSpy1 = jest.spyOn(player1.opponentBoard, 'receiveAttack')
    const attackSpy2 = jest.spyOn(player2.opponentBoard, 'receiveAttack')
    it('test attack', () => {
        player1.attack([0, 1])
        expect(attackSpy1).toHaveBeenCalledWith([0, 1])
        player2.attack([1, 1])
        expect(attackSpy2).toHaveBeenCalledWith([1, 1])
    })
    it('random number between 0 and 9 for coordinates', () => {
        const randomValue = Player.randomCoordinate()
        expect(randomValue[0]).toBeGreaterThanOrEqual(0)
        expect(randomValue[0]).toBeLessThan(10)
        expect(randomValue[1]).toBeGreaterThanOrEqual(0)
        expect(randomValue[1]).toBeLessThan(10)
    })
    it('get player name', () => {
        expect(player1.getName()).toBe('player1')
        expect(player2.getName()).toBe('player2')
    })
})
