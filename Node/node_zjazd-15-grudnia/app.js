// ZADANIE 01

// const fs = require("fs");

// try {
//   const user = JSON.parse(fs.readFileSync("01/user.json"));
//   console.log(user.name);
// } catch (error) {
//   console.log(error.message);
// }

// ------------------------------------------------------------

// ZADANIE 02

// const divide = (a, b) => {
//   if (b === 0) {
//     throw new Error("Error: divide by 0");
//   }
//   return a / b;
// };

// try {
//   console.log(divide(5, 0));
// } catch (error) {
//   console.log(error.message);
// }

// ------------------------------------------------------------

// ZADANIE 03

// const myFunc = async () => {
//   return "hello world";
// };

// myFunc().then(result => {
//   console.log(result);
// });

// ------------------------------------------------------------

// ZADANIE 04

// const add = async (a, b) => {
//   if ((a + b) % 2 === 0) {
//     throw new Error("Error! Przysta liczba");
//   }
//   return a + b;
// };

// add(4, 5)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));

// ------------------------------------------------------------

// ZADANIE 05

// const add = (a, b) => {
//   if ((a + b) % 2 === 0) {
//     throw new Error("Error! Przysta liczba");
//   }
//   return a + b;
// };

// (async () => {
//   try {
//     const result = await add(4, 4);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// ------------------------------------------------------------

// ZADANIE 06

// const axios = require("axios");

// const getUser = async id => {
//   const response = await axios(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   console.log(response.data.name);
// };

// getUser(2);

// ------------------------------------------------------------

// ZADANIE 07

// const axios = require("axios");

// const getUser = async id => {
//   try {
//     const response = await axios(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     console.log(response.data.name);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getUser(22);

// ------------------------------------------------------------

// ZADANIE 08

// const axios = require("axios");

// const getUser = async id => {
//   try {
//     const response = await axios(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     console.log(response.data.name);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const userIds = [2, 3, 5, 7];

// const userPromises = userIds.map(id => getUser(id));

// Promise.all(userPromises);

// ------------------------------------------------------------

// ZADANIE 09

// const axios = require("axios");

// const getUser = async id => {
//   try {
//     const response = await axios(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     console.log(`User name: ${response.data.name}`);
//     return response;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getWeather = async (lat, lng) => {
//   try {
//     const response = await axios(
//       `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
//     );
//     console.log(`User main temp: ${response.data.main.temp}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getUser(2)
//   .then(weather => {
//     return getWeather(
//       weather.data.address.geo.lat,
//       weather.data.address.geo.lng
//     );
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// ------------------------------------------------------------

// ZADANIE 10

const axios = require("axios");

const getUser = async id => {
  return (response = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ));
};

const getPosts = async userId => {
  return (response = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ));
};

const getComments = async;

getUser(2)
  .then(user => {
    console.log(`User name: ${user.data.username}`);
    console.log(`User email: ${user.data.email}`);
    return getPosts(user.data.id);
  })
  .then(posts => {
    console.log(`User posts: ${posts.data.length}`);
  })
  .catch(error => {
    console.log(error.message);
  });
