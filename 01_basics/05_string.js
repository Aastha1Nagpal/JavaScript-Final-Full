const name = "aastha"
const repoCount = 10

console.log(name + repoCount+ "lala" + 12);
//this syntax is not good, not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this syntax is more reliable and better

//string interpollation - ${}


const gameName = new String('ass-tha-as')
console.log(typeof(gameName));



console.log(gameName[0]);
console.log(gameName.__proto__);

// string methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4); //end number is not included
console.log(newString);

const anotherString = gameName.slice(-5, 2) //it can give negative values as well
console.log(anotherString);

const newString1 = "   aastha  ";
console.log(newString1);
console.log(newString1.trim()); // for removing whitespaces

const url = "https://aastha.com/aastha%20nagpal"

console.log(url.replace('%20', '-'))

console.log(url.includes('aastha'))
console.log(url.includes("lala"));

console.log(gameName.split('-'));