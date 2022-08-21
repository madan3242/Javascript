
let clock = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    
    let peroid = "AM";
    if (hours == 0) hours = 12;

    if (hours > 12) {
        hours = hours - 12;
        peroid = "PM"
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    let time = `${hours} : ${minutes} : ${seconds} : ${peroid}`;
    setTimeout(clock, 1000);
    // console.log(time);
    document.getElementById('clock').innerText = time;
};
clock();