// Declare time variables initialized to "00"
let hr = "00",
    min = "00",
    sec = "00",
    ms = "00",
    startTimer; // Variable for interval
let isRunning = false; // Boolean to prevent multiple intervals

// DOM elements for buttons
const startBtn = document.querySelector(".start"),
      stopBtn = document.querySelector(".stop"),
      resetBtn = document.querySelector(".reset");

// Event listeners for Start, Stop, and Reset buttons
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    // Prevent starting multiple intervals by checking if isRunning is true
    if (!isRunning) {
        isRunning = true; // Set to true when stopwatch starts
        startBtn.classList.add("active");
        stopBtn.classList.remove("stopActive");

        startTimer = setInterval(() => {
            ms++; // Increment milliseconds
            ms = ms < 10 ? "0" + ms : ms;

            if (ms == 100) { // Milliseconds reset at 100
                sec++;
                sec = sec < 10 ? "0" + sec : sec;
                ms = "00"; // Reset milliseconds to "00"
            }

            if (sec == 60) { // Seconds reset at 60
                min++;
                min = min < 10 ? "0" + min : min;
                sec = "00"; // Reset seconds to "00"
            }

            if (min == 60) { // Minutes reset at 60
                hr++;
                hr = hr < 10 ? "0" + hr : hr;
                min = "00"; // Reset minutes to "00"
            }

            putValue();
        }, 10); // 1000ms = 1s
    }
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
    isRunning = false; // Set isRunning to false to allow restarting
}

function reset() {
    // Reset all values to initial state
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = "00";
    min = "00";
    sec = "00";
    ms = "00";
    isRunning = false; // Reset isRunning flag
    putValue(); // Update display with reset values
}

// Function to update the time display on the page
function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}
