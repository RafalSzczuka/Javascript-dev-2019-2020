//TASK: 12)	Create a function that tells us how many days till Friday

const tillFriday = () => {
    let date = new Date;
    let day = date.getDay();
    const friday = 5;
    let daysLeft = friday-day;
    if (friday == day) {
        console.log("Today is friday!")
    } else if (daysLeft == -1) {
        console.log(`${6} days left till friday ...`);
    } else {
        console.log(`${daysLeft} days left till friday ...`);
    }

}

tillFriday();