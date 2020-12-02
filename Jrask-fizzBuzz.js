// To run in node navigate to file and run the following in your terminal
// node Jrask-fizzBuzz.js

//Fizzbuzz
const fizzBuzz = () => {
	for(let num = 1; num <= 100; num++){
		if(num % 3 === 0 && num % 5 === 0) {
			console.log('FizzBuzz')
		}else if(num % 5 === 0) {
			console.log('Buzz')
		}else if(num % 3 === 0) {
			console.log('Fizz')
		}else {
			console.log(num)
		}
	}
}

const fizzBuzzArray = () => {
    const out = []
	for(let num = 1; num <= 100; num++){
		if(num % 3 === 0 && num % 5 === 0) {
			out.push('FizzBuzz')
		}else if(num % 5 === 0) {
			out.push('Buzz')
		}else if(num % 3 === 0) {
			out.push('Fizz')
		}else {
			out.push(num)
		}
    }
    return out
}

// fizzBuzz()
console.log('fizBuzzArray', fizzBuzzArray())