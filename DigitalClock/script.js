    // chaiaurcode.js

    // Function to update the clock with the current time every second.
    function updateClock() {
        // Get the current date and time.
        const now = new Date();
    
        // Extract hours, minutes, and seconds.
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
    
        // Format the time as HH:MM:SS.
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
        // Update the content of the clock element.
        document.getElementById("clock").innerText = formattedTime;
    }
    
    // Function to pad a single-digit number with a leading zero.
    function padZero(number) {
        return number < 10 ? "0" + number : number;
    }
    
    // Update the clock initially and then every second.
    updateClock();
    setInterval(updateClock, 1000);
    