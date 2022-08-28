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

const about = document.getElementById('ab');
about.addEventListener('click', () => {
    document.getElementById('screen1').textContent = 'Made by DJ Cartwright, TOP, 2022';
    document.getElementById('screen2').textContent = '<== JS Calc ==>';
});


