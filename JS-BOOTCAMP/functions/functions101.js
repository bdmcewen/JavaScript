//function - input, code , output

let greetUser = function () {
	console.log("Welcome user");
};

greetUser();

let numIn = 3;
let numSquared = 0;

let squareNum = function (numIn) {
	return numIn * numIn;
};

numSquared = squareNum(numIn);

console.log(numSquared);
