// FIRST PROBLEM

// first approach

// function computeAmount() {
//   let totalAmount = 0;

//   function lakhs(amountToBeAddedInLakhs) {
//     totalAmount += amountToBeAddedInLakhs * 100000;
//     return this;
//   }

//   function crore(newAmountToBeAddedInCrores) {
//     totalAmount += newAmountToBeAddedInCrores * 10000000;

//     return this;
//   }

//   function thousand(newAmountToBeAddedInThousands) {
//     totalAmount += newAmountToBeAddedInThousands * 1000;

//     return this;
//   }
//   function value() {
//     return totalAmount;
//   }

//   return { lakhs, crore, thousand, value };
// }

// console.log(
//   computeAmount()
//     .lakhs(15)
//     .crore(5)
//     .crore(2)
//     .lakhs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

// second approach

// function computeAmount() {
//   this.totalAmount = 0;

//   this.lakhs = function (amountToBeAddedInLakhs) {
//     this.totalAmount += amountToBeAddedInLakhs * 100000;
//     return this;
//   };

//   this.crore = function (newAmountToBeAddedInCrores) {
//     this.totalAmount += newAmountToBeAddedInCrores * 10000000;
//     return this;
//   };

//   this.thousand = function (newAmountToBeAddedInThousands) {
//     this.totalAmount += newAmountToBeAddedInThousands * 1000;
//     return this;
//   };
//   this.value = function () {
//     return this.totalAmount;
//   };

//   return this;
// }

// console.log(
//   computeAmount()
//     .lakhs(15)
//     .crore(5)
//     .crore(2)
//     .lakhs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

// SECOND PROBLEM

// const obj = {
//   helloWorld: function () {
//     return this.name;
//   },
//   name: "John",
// };

// const obj2 = {
//   helloWorld: obj.helloWorld,
//   name: "Bye",
// };

// console.log(obj2.helloWorld()); // returns "Bye"

// console.log(obj2.helloWorld.call(obj)); // returns "John" as we referenced the function call to obj

// THIRD PROBLEM

// const input = document.getElementById("input");
// const state = { value: "Hi" };

// function model(state, input) {
//   input.value = state.value;
//   Object.defineProperty(state, "value", {
//     get() {
//       return input.value;
//     },
//     set(newValue) {
//       if (newValue !== input.value) input.value = newValue;
//     },
//   });

//   input.addEventListener("input", (e) => {
//     const newValue = e.target.value;
//     state.value = newValue;
//   });
// }

// model(state, input);

// console.log(input.value);

// state.value = "Hello";

// console.log(input.value);

// input.value = "engineering";

// input.dispatchEvent(new Event("input"));

// console.log(state.value);

// state.value = "how are you";

// input.value = "I am fine";

// input.dispatchEvent(new Event("input"));

// console.log(state.value);

// FOURTH PROBLEM

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// });

// ["C", "D"].forEach((item) => {
//   console.log(item);
// });

// console.log("E");

// FIFTH PROBLEM

const obj = [
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 2",
    data: "Data2",
  },
  {
    key: "sample 1",
    data: "Data1",
  },
  {
    key: "sample 3",
    data: "Data1",
  },
  {
    key: "sample 4",
    data: "Data1",
  },
];

// const keyObject = {
//   "sample 1": [],
//   "sample 2": [],
//   "sample 3": [],
//   "sample 4": [],
// };

// let i = obj.filter((item) => item.key === "sample 1");

// if (obj.filter((item) => item.key === "sample 1")) {
//   for (let x = 0; x < i.length; x++) {
//     keyObject["sample 1"].push(i);
//   }
// }
// console.log(keyObject);

// const output = {};

// obj.forEach((item) => {
//   if (output[item.key]) {
//     output[item.key].push(item);
//   } else {
//     output[item.key] = [item];
//   }
// });

// console.log(output);

// SIXTH PROBLEM

// const add = (a, b) => a + b;

// const memoizeAdd = memoizeOne(add);

// function memoizeOne(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(2, 2));
// console.log(memoizeAdd(3, 2));

// console.log(memoizeAdd(1, 2));
// console.log(memoizeAdd(1, 2));

// SEVENTH PROBLEM

// First approach

// const a = [1, 2, 3, [4, [5, 6]], 7, 8];

// const flattenArray = (arr) => {
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       return acc.concat(flattenArray(val));
//     }
//     return acc.concat(val);
//   }, []);
// };

// console.log(flattenArray(a));

// second approach

// const a = [1, 2, 3, [4, [5, 6]], 7, 8];

// const flattenArray = (arr) => {
//   return arr.flatMap((val) => (Array.isArray(val) ? flattenArray(val) : val));
// };

// console.log(flattenArray(a));

// third approach

const a = [1, 2, 3, [4, [5, 6]], 7, 8];

const flattenArray = (arr, flattenedArray = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArray.push(arr[i]);
    } else {
      flattenArray(arr[i], flattenedArray);
    }
  }

  return flattenedArray;
};

console.log(flattenArray(a));

// EIGHTH PROBLEM
