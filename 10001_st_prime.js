/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

var is_prime = require('./largest_prime_factor.js').is_prime;
var primes = [2,3,5];

for (var term = 7;primes.length<10002;term+=2){	
	is_prime(term, primes);	
}

console.log(primes[10000]);


	
