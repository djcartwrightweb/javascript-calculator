const about = document.getElementById('ab');
about.addEventListener('click', () => {
    document.getElementById('screen1').textContent = 'Made by DJ Cartwright, TOP, 2022';
    document.getElementById('screen2').textContent = '<== JS Calc ==>';
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    document.getElementById('screen1').textContent = '';
    document.getElementById('screen2').textContent = '0';
});


