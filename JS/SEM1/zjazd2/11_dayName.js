//TASK: 11)	Create a function that will return the current day name in Polish.

//nd = 0
//pn = 1
//etc...

const currentDay = () => {
    let date = new Date;
    let day = date.getDay();
    const polishDays = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "pątek", "sobota"];
    return polishDays[day];
}

console.log("Dziś jest " + currentDay());


