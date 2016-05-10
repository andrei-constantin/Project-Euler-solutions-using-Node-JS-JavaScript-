/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */
module.exports.pyth_triplet = pyth_triplet;
function pyth_triplet(n){
	var triplet = [];
	for (i=1;i<n;i++){
		for(j=i+1;j<n;j++){
			var result = Math.sqrt(i*i+j*j);
			if(i+j+result == n)
				triplet.push(i,j,result);
		}
	}
	return triplet;
}
//console.log(pyth_triplet(1000));

//finding the product of the array members


var triplet_to_use = pyth_triplet(1000);
console.log(triplet_to_use);
var great_product = triplet_to_use[0]*triplet_to_use[1]*triplet_to_use[2];
console.log(great_product);

