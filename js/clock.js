const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
//지정한 시간단위로 반복하는 작업..(반복 할 함수, 반복시간)
setInterval(getClock, 1000);

//동작이 한번 이루어진다
//setTimeout(getClock, 5000);