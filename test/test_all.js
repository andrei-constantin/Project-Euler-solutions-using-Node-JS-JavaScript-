//run with:
//mocha --ui tdd

var assert = require('assert');
var multiples_5_3_sum = require('../multiples_of_3_and_5.js').multiples_5_3_sum;

var nthFibonacci = require('../even_fibonacci_numbers').nthFibonacci,
    even_fibo_terms_sum = require('../even_fibonacci_numbers').even_fibo_terms_sum;

var nth_prime = require('../10001_st_prime.js').nth_prime;

var divisors = require('../highly_divisible_triangular_number.js').divisors;


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

suite('Nth prime', function() {
    test('5th prime number is 11', function() {
        assert.equal(11, nth_prime(5));
    });
    test('6th prime number is 17', function() {
        assert.equal(13, nth_prime(6));
    });
});

suite('THe divisors of a number', function() {
    test('The divisors of 24 are 2 and 3 with the exponents 3 and 1', function() {
        assert.deepEqual({ base: [ 2, 3 ], exponent: [ 3, 1 ] }, divisors(24));
    });
    test('The divisors of 3000 are 2, 3 and 5  with the exponents 3, 1 and 3', function() {
        assert.deepEqual({ base: [ 2, 3, 5 ], exponent: [ 3, 1, 3 ] }, divisors(3000));
    });
});