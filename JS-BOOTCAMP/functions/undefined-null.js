// undefined for variable

let name;

name = "jen";
if (name === undefined) {
	console.log("please provide a name");
} else {
	console.log(name);
}

//undefined for function
let square = function (num) {
	console.log(num);
};

let result = square();

console.log(result);

// null is an explicitly defined value
let age = 27;

age = null;
console.log(age);
