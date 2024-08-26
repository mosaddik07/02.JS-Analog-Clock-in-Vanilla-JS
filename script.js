const secondHand = document.querySelector('.second_hand');
const minuteHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');
const tickSound = document.querySelector('#tickSound');

function setDate() {
    // Seconds 
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg) `;

    // Minutes  
    const minute = date.getMinutes();
    const minutesDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg) `;

    // Hours 
    const hours = date.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg) `;
    tickSound.currentTime = 0;
    tickSound.play()
}



setInterval(setDate, 1000);