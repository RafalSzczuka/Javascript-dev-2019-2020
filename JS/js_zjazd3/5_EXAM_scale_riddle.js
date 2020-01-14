// TASK Scale riddle. With 8 balls EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two. Indexes are to be chosen at random. Use compressions only two times.
// find index, where is ball with 2 value. you have 2 times to find. choose at random

let balls = [1, 1, 1, 1, 2, 1, 1, 1];

// find2Ball function (iife)- finds ball with 2 value and returns its index position.
const find2Ball = (array => {
  let firstScale = [];
  let firstScaleIndex = [];
  let secondScale = [];
  let secondScaleIndex = [];
  let restElements = [];
  let restElementsIndex = [];

  // for loop, to random choose for 3 elements and place them to scale One. Scale Two the same way.
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    if (firstScale.length !== 3) {
      if (firstScaleIndex.includes(randomIndex)) {
        i = 0;
        continue;
      }
      firstScale.push(array[randomIndex]);
      firstScaleIndex.push(randomIndex);
      i = 0;
    } else {
      if (secondScale.length !== 3) {
        if (
          firstScaleIndex.includes(randomIndex) ||
          secondScaleIndex.includes(randomIndex)
        ) {
          i = 0;
          continue;
        }
        secondScale.push(array[randomIndex]);
        secondScaleIndex.push(randomIndex);
        i = 0;
      }
    }
  }

  // for loop, to find rest two elements of an original array
  for (let i = 0; i < array.length; i++) {
    if (firstScaleIndex.includes(i) || secondScaleIndex.includes(i)) continue;
    restElements.push(array[i]);
    restElementsIndex.push(i);
  }
  // sum function
  let sumFunction = scale => {
    let sum = 0;
    scale.forEach(function(element) {
      sum += element;
    });
    return sum;
  };
  // weight comparison (iife func)
  const weighting = (() => {
    //scale One and scale Two comparison
    if (sumFunction(firstScale) == sumFunction(secondScale)) {
      if (restElements[0] > restElements[1]) {
        console.log(`'2' ball is on ${restElementsIndex[0]} index`);
      } else {
        console.log(`'2' ball is on ${restElementsIndex[1]} index`);
      }
    } else {
      // if scale one is not equal to scale two - set second weighting. Take for two elements of a scale and compare its values. Same thing wiht scale Two (iife func)
      const secondweighting = (() => {
        if (sumFunction(firstScale) > sumFunction(secondScale)) {
          if (firstScale[0] == firstScale[1]) {
            console.log(`'2' ball is on ${firstScaleIndex[2]} index`);
          } else if (firstScale[0] > firstScale[1]) {
            console.log(`'2' ball is on ${firstScaleIndex[0]} index`);
          } else {
            console.log(`'2' ball is on ${firstScaleIndex[1]} index`);
          }
        } else {
          if (secondScale[0] == secondScale[1]) {
            console.log(`'2' ball is on ${secondScaleIndex[2]} index`);
          } else if (secondScale[0] > secondScale[1]) {
            console.log(`'2' ball is on ${secondScaleIndex[0]} index`);
          } else {
            console.log(`'2' ball is on ${secondScaleIndex[1]} index`);
          }
        }
      })();
    }
  })();
  return {
    firstScale,
    firstScaleIndex,
    secondScale,
    secondScaleIndex,
    restElements,
    restElementsIndex
  };
})(balls);

console.log(
  `\nFirst Scale: ${find2Ball.firstScale}\nFirst Scale indexes: ${find2Ball.firstScaleIndex}\n`
);
console.log(
  `Second Scale: ${find2Ball.secondScale}\nSecond Scale indexes: ${find2Ball.secondScaleIndex}\n`
);
console.log(
  `Rest two elements: ${find2Ball.restElements}\nRest two elements indexes:  ${find2Ball.restElementsIndex}`
);
