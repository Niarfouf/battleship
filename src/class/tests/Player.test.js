/* eslint-disable no-undef */
import Player from '../Player'
import GameBoard from '../GameBoard'

describe('Player class', () => {
    const gameBoard1 = new GameBoard()
    const gameBoard2 = new GameBoard()
    const player1 = new Player('player1')
    const player2 = new Player('player2')
    const attackSpy1 = jest.spyOn(gameBoard1, 'receiveAttack')
    const attackSpy2 = jest.spyOn(gameBoard2, 'receiveAttack')
    it('player created with name', () => {
        expect(player1.name).toBe('player1')
        expect(player2.name).toBe('player2')
    })
    it('test attack', () => {
        Player.attack(gameBoard1, [0, 1])
        expect(attackSpy1).toHaveBeenCalledWith([0, 1])
        Player.attack(gameBoard2, [1, 1])
        expect(attackSpy2).toHaveBeenCalledWith([1, 1])
    })
    it('random number between 0 and 9 for coordinates', () => {
        const randomValue = Player.randomCoordinate()
        expect(randomValue[0]).toBeGreaterThanOrEqual(0)
        expect(randomValue[0]).toBeLessThan(10)
        expect(randomValue[1]).toBeGreaterThanOrEqual(0)
        expect(randomValue[1]).toBeLessThan(10)
    })
})
