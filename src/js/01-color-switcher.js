

const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
const body = document.querySelector("body");


btnStart.addEventListener("click", handleClickStart);

btnStop.addEventListener("click", handleClickStop);


function handleClickStart()  {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();   
      }, 1000);
      console.log(`Start`);
      
      btnStart.disabled = true;
      btnStop.disabled = false;

    //   btnStart.setAttribute('disabled', true); 
    //   if (btnStart.hasAttribute('disabled')) {
    //     btnStop.removeAttribute('disabled');
    // };
  };

function handleClickStop()  {
    clearInterval(timerId);
    console.log(`Stop`);
    
    btnStart.disabled = false;
    btnStop.disabled = true;

    // btnStop.setAttribute('disabled', true);
    // if (btnStop.hasAttribute('disabled')) {
    //     btnStart.removeAttribute('disabled');
    // }
  };


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }