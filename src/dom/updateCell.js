export default function updateCell(hitInfo, victim) {
    const classSelector = `${victim}-cell`
    const cells = document.querySelectorAll(`.${classSelector}`)
    let cellToUpdate
    cells.forEach((cell) => {
        if (
            parseInt(cell.getAttribute('x'), 10) === hitInfo.coordinate[0] &&
            parseInt(cell.getAttribute('y'), 10) === hitInfo.coordinate[1]
        ) {
            cellToUpdate = cell
        }
    })
    if (hitInfo.true === 'touched' || hitInfo.true === 'sunk') {
        cellToUpdate.classList.add('red')
        cellToUpdate.classList.remove('blue')
        cellToUpdate.classList.remove('black')
    }
    if (hitInfo.true === 'missed') {
        cellToUpdate.classList.add('yellow')
        cellToUpdate.classList.remove('black')
    }
}
