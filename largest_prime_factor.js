/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
module.exports.is_prime = prime_number;

function prime_number (n, primes){
		
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
		return true;
};
		
var primes = [2, 3, 5];
function largest_prime_factor(m){
	if ( prime_number( m, primes ) ){
		return m;
	}

	for (n=2;n<=m;n++){
		if (prime_number(n, primes) && m%n === 0){
			return largest_prime_factor( m / n);
		};
	};

};

//console.log(largest_prime_factor(600851475143));

