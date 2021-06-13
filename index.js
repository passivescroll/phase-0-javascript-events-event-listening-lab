
const input = document.getElementById('input');

const main = document.getElementById('main');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

main.addEventListener('click', clickAlert);


