
console.log("\"Introduction to JavaScript\"");

console.log("FizzBuzz Program");
for (let i = 1; i < 101 ; i++) {
    if (i % 3 == 0 && (i % 5 == 0)) console.log("FizzBuzz");
    else if (i % 3 == 0 && !(i % 5 == 0)) console.log("Fizz");
    else if (i % 5 == 0 && !(i % 3 == 0)) console.log("Buzz");
    else console.log(i)
}
// for (let i = 0; i < 100 ; i++) {
//     let d = a => (a % 3) === 0;
//     let e = a => (a % 5) === 0;
//     switch (i) {
//         case d && !e:
//             console.log("Fizz");
//             break;
//         case e && !d:
//             console.log("Buzz");
//             break;
//         case d && e:
//             console.log("FizzBuzz");
//             break;
//         default:
//             console.log(i);
//     }
// }
console.log("Count \"B\'s\" Program");

const countBs = (bString) => console.log((bString.match(new RegExp("B", "g")) || []).length);
test = "Big boys buy Big Belly burgers!";
countBs(test);

const  countChar = (mainStr, CharToCount) => {
   console.log(mainStr.split(CharToCount).length - 1)
};

console.log("Count \'selected char\' Program");
countChar(test, "y");
