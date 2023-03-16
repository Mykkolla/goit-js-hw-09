import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const dayMain = document.querySelector('[data-days]')
const hoursMain = document.querySelector('[data-hours]')
const minutesMain = document.querySelector('[data-minutes]')
const secondsMain = document.querySelector('[data-seconds]')

const timerDiv = document.querySelector('.timer')

const btnStart = document.querySelector('[data-start]')
btnStart.setAttribute('disabled', true);


let selectDate;
flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // minDate: "today",
    onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      selectDate = selectedDates[0];
      
      if (selectedDates[0] < new Date()) {
        window.alert("Please choose a date in the future");
        btnStart.setAttribute('disabled', true);
      }
      if (selectedDates[0] > new Date()) {
        btnStart.removeAttribute('disabled');
    }
    
    },
  });

const handleClickStart = () => {    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = selectDate - now;
        // console.log(distance);
    const { days, hours, minutes, seconds } = convertMs(distance);
    console.log(`${days}:${hours}:${minutes}:${seconds}`)
    dayMain.textContent =`${days}`;
    hoursMain.textContent =`${hours}`;
    minutesMain.textContent =`${minutes}`;
    secondsMain.textContent =`${seconds}`;
        // Если обратный отсчет закончился, очищаем таймер
        if (distance < 0) {
            clearInterval(timer);
            console.log("Обратный отсчет закончился!");
        }
    
    }, 1000); 
    }




btnStart.addEventListener("click", handleClickStart);



// helping functions

function addLeadingZero(value)  {
    return String(value).padStart(2, '0')
   } 

timerDiv.style.display = "flex";

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
