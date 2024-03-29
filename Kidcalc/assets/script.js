const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

function changeStyle(style) {
  document.body.classList.remove('style1', 'style2', 'style3'); // Remove all styles first
  document.body.classList.add(style);
}

button1.addEventListener('click', () => changeStyle('style1'));
button2.addEventListener('click', () => changeStyle('style2'));
button3.addEventListener('click', () => changeStyle('style3'));
