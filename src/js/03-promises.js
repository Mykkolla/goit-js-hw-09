import Notiflix from 'notiflix';

const delay1 = document.querySelector("input[name='delay']");
const step1 = document.querySelector("input[name='step']")
const amount1 = document.querySelector("input[name='amount']")


let delay= 0;
delay1.addEventListener("input", (event) => {
delay = event.currentTarget.value;
return delay;
});
let step= 0;
step1.addEventListener("input", (event) => {
  step = event.currentTarget.value;
return step;
});
let amount= 0;
amount1.addEventListener("input", (event) => {
  amount= event.currentTarget.value;
return amount;
});


document.querySelector('.form').addEventListener('submit', Event);



function createPromise(position, delay) {
;
  // const shouldResolve = Math.random() > 0.3;
  const promis = new Promise ((resolve, reject) => {
    setTimeout(() => {
      const result = { position, delay };
      if (delay % 2 === 0) {
        resolve(result)
      } else {
        reject(result)
      }
    }, delay)
  });
  return promis;
}

function Event(e) {
  e.preventDefault();


for (let i = 0; i < amount; i++) {
  const position = i + 1;
  const delayi = delay + (i * step);
  createPromise(position, delayi).then(({ position, delay }) => {
    Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
};

