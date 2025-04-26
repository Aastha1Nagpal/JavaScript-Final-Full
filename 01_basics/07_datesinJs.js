//Dates

let myDate = new Date(); // current date and time
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
//sytanxes are different
console.log((typeof myDate));

// let myCreateDate = new Date(2005, 0, 5, 3)
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


let myCreateDate1 = new Date("01-14-2023")
// console.log(myCreateDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());

console.log(`Date today is ${newDate.getDay()}`);

let newDate2 = newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'Asia/Kolkata'
})

console.log(newDate2);

