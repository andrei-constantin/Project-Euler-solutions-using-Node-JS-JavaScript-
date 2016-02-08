/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

module.exports.multiples_5_3_sum = multiples_5_3_sum;

function multiples_5_3_sum (n){
    var sum=0;
    for (var i = 0; i<n; i++){
        if (i%3===0 || i%5===0){ 
            sum += i;
        }
    }
    return sum;
}

console.log("The sum of all the multiples of 3 and 5 is:" + multiples_5_3_sum(1000));