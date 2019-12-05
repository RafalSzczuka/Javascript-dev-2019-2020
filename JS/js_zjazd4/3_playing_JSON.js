// 3)	Based on included JSON file.
// a.	Create a function that will return Json from the file. a
// b.	Create a structures to hold data from the file. b
// c.	Map data from function a to structure from b.
// d.	Create >>> object <<< that will give us data about:
// i.	How much money was spend in 2014 <--- DONE
// ii.	What company was earning how much <--- DONE
// iii.	What type on transaction was having what spending’s. <--- DONE
// iv.	Values of the spending in each month <--- DONE
// v.	Values of the spending in each day of the week <--- DONE

const data = require("./Data.json");

// empty array to store data from json file. Array created to use more methods of Array object type
let financialData = [];

// for loop to create objects with fields below and push them to financialData array
for (let i = 0; i < data.length; i++) {
  let {
    index: index,
    _id: id,
    cost: cost,
    detailsOfPayent: detailsOfPayent
  } = data[i];

  financialData.push(new MainEntry(index, id, cost, detailsOfPayent));
}
// constructor for the details of payment
function DetailsOfPayent(type, company, date) {
  this.Type = type;
  this.company = company;
  let [day, month, year] = date.split("-"); // destruction of a date to variables
  let dayOfWeek = new Date(Date.parse([year, month, day])).getDay();
  this.date = [year, month, day, dayOfWeek]; // set date in proper order [yyyy-mm-dd-dayOfWeek]
}
// constructor for whole entry
function MainEntry(index, id, cost, detailsOfPayent) {
  this.index = index;
  this.id = id;
  this.cost = cost;
  let { Type: type, company: company, date: date } = detailsOfPayent;
  this.detailsOfPayent = new DetailsOfPayent(type, company, date);
}
// calculate total spend in year 2014
const totalSpend = `Total spend in 2014: ${financialData
  .filter(item => {
    return item.detailsOfPayent.date[0] == 2014;
  })
  .reduce((currentTotal, item) => {
    return parseFloat(item.cost) + currentTotal;
  }, 0)
  .toFixed(2)}`;

//creating unique set of company names
const companyNames = [
  ...new Set(financialData.map(item => item.detailsOfPayent.company))
];
let spendByCompanyName = []; // empty array, to store spenings by company name
// calculate spendings for each company name
companyNames.forEach((element) => {
  let spend = financialData
    .filter(item => {
      return item.detailsOfPayent.company == element;
    })
    .reduce((currentTotal, item) => {
      return parseFloat(item.cost) + currentTotal;
    }, 0)
    .toFixed(2);
  spendByCompanyName.push(`Spend by company ${element}: ${spend}`);
})

// creating unique set of transaction types
const transactionTypes = [
  ...new Set(financialData.map(item => item.detailsOfPayent.Type).sort())
];
const spendByType = []; // empty array to store spendings by type
// calculate spendings for each type
transactionTypes.forEach((element) => {
  let spend = financialData
    .filter(item => {
      return item.detailsOfPayent.Type == element;
    })
    .reduce((currentTotal, item) => {
      return parseFloat(item.cost) + currentTotal;
    }, 0)
    .toFixed(2);
  spendByType.push(`Spend by Type ${element}: ${spend}`);
})

// creating unique set of months from data provided
const months = [
  ...new Set(financialData.map(item => item.detailsOfPayent.date[1]).sort())
];
const spendByMonth = []; // empty array to store spendings by month
// calculate spendings for each month
months.forEach((element) => {
  let spend = financialData
  .filter(item => {
    return item.detailsOfPayent.date[1] == element;
  })
  .reduce((currentTotal, item) => {
    return parseFloat(item.cost) + currentTotal;
  }, 0)
  .toFixed(2);
spendByMonth.push(`Spend by month ${element}: ${spend}`);
})

//creating unique set of days
const days = [
  ...new Set(financialData.map(item => item.detailsOfPayent.date[3]).sort())
];
// empty array to store spendings by day of week
const spendByDayOfWeek = [];
// calculate spendings by day of week
days.forEach((element) => {
  let spend = financialData
  .filter(item => {
    return item.detailsOfPayent.date[3] == element;
  })
  .reduce((currentTotal, item) => {
    return parseFloat(item.cost) + currentTotal;
  }, 0)
  .toFixed(2);
spendByDayOfWeek.push(`Spend by day ${element}: ${spend}`);
})

console.log(totalSpend);
console.log(spendByCompanyName);
// console.log(spendByType);
// console.log(spendByMonth);
// console.log(spendByDayOfWeek);
