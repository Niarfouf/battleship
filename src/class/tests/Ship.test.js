/* eslint-disable no-undef */
import Ship from '../Ship'

describe('Ship class', () => {
    const submarine = new Ship(3)
    const carrier = new Ship(5)
    it('create a ship object', () => {
        expect(submarine).toEqual({ length: 3, hits: 0, sunk: false })
    })
    it('create a ship object again', () => {
        expect(carrier).toEqual({ length: 5, hits: 0, sunk: false })
    })
    it('receive one hit', () => {
        submarine.hit()
        expect(submarine.hits).toBe(1)
    })
    it('receive two hit', () => {
        carrier.hit()
        carrier.hit()
        expect(carrier.hits).toBe(2)
    })
    it('is not sunk after one hit', () => {
        carrier.hit()
        expect(carrier.sunk).toBe(false)
    })
    it('is sunk after hits', () => {
        submarine.hit()
        submarine.hit()
        expect(submarine.sunk).toBe(true)
    })
})
