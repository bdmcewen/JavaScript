let is_freezing = false
let temp = 121

//boolean
is_freezing = temp < 32


//if statement
if (temp < 32) {
  is_freezing = true
}

//advanced if statement if else & else if
if (temp<32) {
  is_freezing = true
  console.log("Burrr, too cold")
} else if (temp > 100){
  console.log("Hot Damn!!")
} else{
  console.log("Nice.")
}

// conditional statements && ||

if (temp >60 && temp < 90) {
  console.log("Into the Woods!")
}else if (temp < 32 || temp > 100) {
  console.log("Work")
}else {
  console.log("Play")
}


// console.log(is_freezing)
