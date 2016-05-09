/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */
var primes = [2, 3, 5];
function is_prime (n){
		
		for (var i = 0; i < primes.length; i++){
			if ( n%primes[i] === 0)
				return false;
		};

		var sqrt = Math.floor(Math.sqrt(n));
		for (i = primes[ primes.length - 1 ] ;i<=sqrt;i += 2){
			if( n%i === 0)
				return false;
		};

		primes.push( n );
		
	};
	
for (var term = 7;primes.length<10002;term+=2){	
	is_prime(term);	
	}


console.log(primes[10000]);


	
