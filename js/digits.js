const one = document.getElementById('one');
one.addEventListener('click', () => {
 if (value.textContent == '0') {
    value.textContent = '1';
    calculation.textContent = '1'
 } else if (value.textContent == '- 0') {
    value.textContent = '- 1';
    calculation.textContent = '- 1';
 } else if (!isNaN(parseInt(value.textContent))){
    value.textContent += '1';
    calculation.textContent += '1';
 }
});