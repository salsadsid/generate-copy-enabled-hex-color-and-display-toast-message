
// function to generate hex color
const generateHexColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const changeBtn = document.getElementById("btn")
const container = document.getElementById("container")
const inputField = document.getElementById("input-field");
const copyBtn = document.getElementById("copy-btn");

changeBtn.addEventListener('click', () => {
    const bgColor = generateHexColor()
    container.style.backgroundColor = bgColor;
    inputField.value = bgColor;
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(inputField.value);
    generateToastMessage(inputField.value + ' Copied')
})

const generateToastMessage = (msg) => {
    const div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message';
    document.body.appendChild(div);
}