/*const valuePromise = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000);
});
console.log(valuePromise);

const letterContainer = document.getElementById("letter-output");
let letterArray = [];
let nameString = "VAIBHAV";
letterArray = nameString.split("").reverse();
console.log(letterArray);

const span = document.createElement("span");

const val = setInterval(() => {
	if (letterArray.length) {
		span.innerHTML += letterArray.pop();
		letterContainer.appendChild(span);
	} else {
		console.log("STOPPED");
		clearInterval(val);
	}
}, 1000);
*/
//Balanced substring problem.
// Q-1 : We are given a string of brackets like {{{}}}}}{ and we have to check if the given string is balanced or not.?
// Q-2 : The second variation is to find the minimum number of brackets required to make this string a balanced string.?

const str = "{}{}{{}}}{}}}";
const bracketStack = [];
let minBracketCount = 0;
let closeBraceLeft = true;
for (let i = 0; i < str.length; i++) {
	if (str.charAt(i) == "{") {
		bracketStack.push(str.charAt(i));
	} else {
		if (bracketStack.length == 0) {
			closeBraceLeft = true;
			minBracketCount++;
			continue;
		} else {
			bracketStack.pop();
			closeBraceLeft = false;
		}
	}
}
if (bracketStack.length == 0 && !closeBraceLeft) {
	console.log("String is balanced");
} else {
	console.log("String is not balanced" + minBracketCount);
}

//Flatten an Array problem.

//You are given an array of arrays and numbers like [1,2,[3,4,[45,10,6]]] and you have to flatten it as [1,2,3,4,45,10,6].

const flatArray = [];
const nonFlatArray = [1, 2, [3, 4, [45, 10, 6]]];

function flattenArray(array) {
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			flattenArray(array[i]);
		} else {
			flatArray.push(array[i]);
		}
	}
	return flatArray;
}
console.log(flattenArray(nonFlatArray));

const x = {};
const y = { a: 2 };
console.log(x);
x[JSON.stringify(y)] = 123;
console.log(x);

const arr = [1, 22, 34, 123, 10, 34, 2, 3];
let temp = 0;

console.log(arr);
//Bubble Sort
for (let i = 0; i < arr.length; i++) {
	for (let j = i; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
	}
}

//Longest palindromic substring
let inputString = "abbabababaaabababaaaaababaababbbababa";
console.log(str.substr());
//abcd
//a,b,c,d,ab,abc,abcd,bc,bcd,cd
//h,e,l,l,o,he,hel,hell,hello,el,ell,ello,ll,llo
let maxLength = 0;
let subsStringArray = [];
for (let i = 0; i < inputString.length; i++) {
	for (let j = i + 1; j <= inputString.length; j++) {
		let subString = inputString.substring(i, j);

		if (subString == subString.split("").reverse().join("")) {
			subsStringArray.push(subString);
			if (subString.length > maxLength) {
				maxLength = subString.length;
			}
		} else {
			continue;
		}
	}
}
console.log(subsStringArray);
subsStringArray.map((item) => {
	if (item.length == maxLength) {
		console.log(item + " " + item.length);
	}
});

function func() {
	console.log("hello i am in func() function");
}
const callFunction = func;

console.log(callFunction());
