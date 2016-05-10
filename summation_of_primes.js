/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million */

var is_prime = require('./largest_prime_factor.js').is_prime;
var primes = [2,3,5];
var sum = 10;
for(i=7;i<2000000;i+=2){
		if(is_prime(i, primes))
		sum += i; 
}

console.log(sum);