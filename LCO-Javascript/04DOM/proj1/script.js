var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

let count = 0;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 10);

setTimeout(() => {
    followers.innerText = "Followers on Instagram!";
}, 10000)