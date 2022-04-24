
// function to generate hex color
const generateHexColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// References
const changeBtn = document.getElementById("btn")
const container = document.getElementById("container")
const inputField = document.getElementById("input-field");
const copyBtn = document.getElementById("copy-btn");

// Chanage Color button click handler
changeBtn.addEventListener('click', () => {
    const bgColor = generateHexColor()
    container.style.backgroundColor = bgColor;
    inputField.value = bgColor;
})

let div = null;

// copy button click handler
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(inputField.value);
    if (div !== null) {
        div.remove();
        div = null;
    }
    generateToastMessage(inputField.value + ' Copied');

})

// dynamic toast message generator
const generateToastMessage = (msg) => {
    div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', () => {
        div.classList.remove('toast-message-slide-in');
        div.classList.add("toast-message-slide-out");
        div.addEventListener('animationend', () => {
            div.remove();
            div = null;
        })
    })
    document.body.appendChild(div);
}