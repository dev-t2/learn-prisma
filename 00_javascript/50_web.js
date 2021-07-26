const result = document.querySelector('.result');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');

increase.addEventListener('click', () => {
  result.innerHTML = parseInt(result.innerHTML) + 1;
});

decrease.addEventListener('click', () => {
  result.innerHTML = parseInt(result.innerHTML) - 1;
});
