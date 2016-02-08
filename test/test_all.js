var assert = require('assert');
var multiples_5_3_sum = require('../multiples_of_3_and_5.js').multiples_5_3_sum;

var nthFibonacci = require('../even_fibonacci_numbers').nthFibonacci,
    even_fibo_terms_sum = require('../even_fibonacci_numbers').even_fibo_terms_sum;


suite('Sum of all the multiples of 3 or 5', function() {
    test('multiples of 3 and 5 under 10 is 23', function() {
        assert.equal(23, multiples_5_3_sum(10));
    });
    test('multiples of 3 and 5 under 20 is 78', function() {
        assert.equal(78, multiples_5_3_sum(20));
    });
});

suite('Even fibo numbers sum', function() {
    test('5th fibo number is 5', function(){
        assert.equal(5, nthFibonacci(5));
    });
    test('7th fibo number is 13', function(){
        assert.equal(13, nthFibonacci(7));
    });

    test('sum of even fibo numbers under 14 is 10', function(){
        assert.equal(10, even_fibo_terms_sum(14));
    });
});