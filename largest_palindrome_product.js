/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

//module.exports.multiples_5_3_sum = multiples_5_3_sum;

function largest_palindromic_up_to_n (n){
    var product=0;
    var max_product = 0
    for (var i = n-1; i>99; i-=1){
        for (var j = n-1; j>i; j-=1){
			product = i*j;
			var digits = product.toString().split('').join('');
	        var inverse = product.toString().split('').reverse().join('');
			if (digits==inverse && product>max_product){
				console.log(i,j, max_product, product);
				max_product = product;


			}
			
        }

	}
  return max_product;  
}

console.log("The largest palindromic number made from the product of two 3-digit numbers is:" + largest_palindromic_up_to_n(1000));