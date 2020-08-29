
const button = document.querySelector('#btn');
const body = document.querySelector('body');
const p = document.querySelector('p');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const textColor = ["white", "black", "red", "green"];
const value = document.querySelector('#hex-value')
button.addEventListener('click', changeHex)

function changeHex() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
    }
    const colorIndex = parseInt(Math.random() * textColor.length);
    p.style.color = textColor[colorIndex];
    value.textContent = hex;
    body.style.backgroundColor = hex;
};