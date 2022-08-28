/*** button animations ***/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.classList.remove('button-up');
        button.classList.add('button-down');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('button-down');
        button.classList.add('button-up');
    });
});

/*** screens calculation and values ***/
const value = document.getElementById('value');
const calculation = document.getElementById('calculation');


/*** other operators ***/
const about = document.getElementById('ab');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');

/*** other operator event listeners ***/
about.addEventListener('click', () => {
    calculation.textContent = 'Made by DJ Cartwright, TOP, 2022';
    value.textContent = '(ABout)... ;-)';    
    clear.textContent = 'C';
});

clear.addEventListener('click', () => {
    calculation.textContent = '0';
    value.textContent = '0';    
    clear.textContent = 'AC';
});

sign.addEventListener('click', () => {
    let currentValue = value.textContent;
    if (currentValue[0] != '-') {
        value.textContent = '- ' + currentValue;
        clear.textContent = 'C';
    } else {
        let newValue = currentValue.slice(2);
        value.textContent = newValue;
        if (newValue = '0') {
            clear.textContent = 'AC';
        }
    }
});


