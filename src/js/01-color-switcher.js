

const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
const body = document.querySelector("body");

const handleClickStart = () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();   
      }, 1000);
      console.log(`Start`);
      
      btnStart.setAttribute('disabled', true); 
      if (btnStart.hasAttribute('disabled')) {
        btnStop.removeAttribute('disabled');
    }
  };

  const handleClickStop = () => {
    clearInterval(timerId);
    console.log(`Stop`);
    
    btnStop.setAttribute('disabled', true);
    if (btnStop.hasAttribute('disabled')) {
        btnStart.removeAttribute('disabled');
    }
  };



btnStart.addEventListener("click", handleClickStart);

btnStop.addEventListener("click", handleClickStop);



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }