export default class Player {
    constructor(name, playerBoard, opponentBoard) {
        this.name = name
        this.playerBoard = playerBoard
        this.opponentBoard = opponentBoard
    }

    attack(coordinate = Player.randomCoordinate()) {
        return this.opponentBoard.receiveAttack(coordinate)
    }

    static randomCoordinate() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    }

    getName() {
        return this.name
    }
}
