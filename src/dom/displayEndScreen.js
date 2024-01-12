export default function displayEndScreen(player) {
    const main = document.querySelector('#main')
    main.textContent = ''
    const endTitle = document.createElement('h1')
    if (player.name === 'Player') {
        endTitle.textContent = 'You win !'
    } else {
        endTitle.textContent = 'You lose !'
    }
    main.appendChild(endTitle)
}
