export default class Player {
    constructor(name) {
        this.name = name
    }

    static attack(gameBoard, coordinate = Player.randomCoordinate()) {
        return gameBoard.receiveAttack(coordinate)
    }

    static randomCoordinate() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }

    getName() {
        return this.name
    }
}
