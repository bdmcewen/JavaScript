// lexical (static) coding, let is local, var is global

let varOne = 'varOne'

if(true){
  console.log(varOne)
  let varTwo = 'varTwo'
  console.log(varTwo) // this will display varTwo
}

console.log(varTwo) // this will not display varTwo


