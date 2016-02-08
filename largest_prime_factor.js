/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var primes = [2, 3, 5];

function prime_number (n){
		
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
		console.log('last prime:' + primes[ primes.length - 1 ] + 'total primes so far: ' + primes.length);
		return true;
};
		
function largest_prime_factor(m){
	var largest_prime = 2;
		//for (n=Math.floor(m/2)+1;n>=2;n--){
		for (n=2;n<=Math.floor(m)/2+1;n++){
			if (prime_number(n) && m%n === 0){
				largest_prime = n;
			};
		};
	return largest_prime;
};

console.log(largest_prime_factor(600851475143));
