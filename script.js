function updateTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector(
      '[data-testid="currentDay"]'
    );

    currentTime = new Date().toUTCString();
    currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
    
    currentTimeElement.textContent = `The Current Time in UTC is ${currentTime}`;
    currentDayElement.textContent = `The Current Day is: ${currentDay}`;
}

updateTime();