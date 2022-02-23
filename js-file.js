const display = document.querySelector('.display');

const digit = document.querySelectorAll('.digit-row button');
digit.forEach(d => {
    d.addEventListener('click', (e) => {
        if (display.innerText === '0') {
            display.innerText = e.target.innerText;
        } else {
            display.innerText += e.target.innerText;
        }
    });
});

const operator = document.querySelectorAll('.operator-section button');
operator.forEach(o => {
    o.addEventListener('click', (e) => {
        if (display.innerText.charAt(display.innerText.length - 1).match(/[0123456789]/)) {
            display.innerText += ` ${e.target.innerText}  `;
        }
    })
})