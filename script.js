setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();
    // clock.textContent = time;

    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = "AM"

    // alert(hr + "hr " + min + "min " + sec + "sec");
    if (hr > 12) {
        day = 'PM';
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
})