// All functionality of the cellphone top navbar (date and clock)
export function dateCellphone(){
    // Get the DOM elements
    const dateSpan = document.getElementById('date')
    const clockSpan = document.getElementById('clock')

    function updateTime() {
        // New Date
        const newDate = new Date();
        const date = newDate.toDateString();

        // Hours & Minutes
        const hours = String(newDate.getHours()).padStart(2, '0');
        const minutes = String(newDate.getMinutes()).padStart(2, '0');

        // Update content
        clockSpan.textContent = `${hours}:${minutes}`;
        dateSpan.textContent = date;
    }

    // Calling the function to show the initial hour
    updateTime();

    // Interval to update the clock
    setInterval(updateTime, 1000);
}