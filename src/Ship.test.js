import Ship from './Ship'

describe('Ship class', () => {
    const submarine = new Ship(3)
    const carrier = new Ship(5)
    it('one hit', () => {
        submarine.hit()
        expect(submarine.hits).toEqual(1)
    })
    it('two hit', () => {
        carrier.hit()
        carrier.hit()
        expect(carrier.hits).toEqual(2)
    })
    it('is not sunk', () => {
        expect(submarine.isSunk()).toBe(false)
    })
    it('is sunk', () => {
        submarine.hit()
        submarine.hit()
        expect(submarine.isSunk()).toBe(true)
    })
})
