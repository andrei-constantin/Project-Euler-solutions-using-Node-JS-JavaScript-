//run with:
//mocha --ui tdd

var assert = require('assert');
var multiples_5_3_sum = require('../multiples_of_3_and_5.js').multiples_5_3_sum;

var nthFibonacci = require('../even_fibonacci_numbers').nthFibonacci,
    even_fibo_terms_sum = require('../even_fibonacci_numbers').even_fibo_terms_sum;

var nth_prime = require('../10001_st_prime.js').nth_prime;

var is_prime = require('../largest_prime_factor.js').is_prime;

var largest_prime_factor = require('../largest_prime_factor.js').largest_prime_factor;

var divisors = require('../highly_divisible_triangular_number.js').divisors;

var large_sum = require('../large_sum.js').large_sum;

var is_palindrome = require('../largest_palindrome_product.js').is_palindrome;

var largest_product_in_a_series = require('../largest_product_in_a_series.js').largest_product_in_a_series;

var large_prod_grid = require('../largest_product_in_grid.js').large_prod_grid;


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
        assert.equal(11, nth_prime(5)); }); test('6th prime number is 17', function() {
        assert.equal(13, nth_prime(6));
    });
});

suite('Is prime', function() {
    test('97 is a prime number', function() {
        assert.equal(true, is_prime(11, [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187]));
    });
    test('93 is not a prime number', function() {
        assert.equal(false, is_prime(93, [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187]));
    });
});

 suite('Largest prime factor', function() {
    test('Largest prime factor for 1700 is 17', function() {
        assert.equal(17, largest_prime_factor(1700));
    });
    test('Largest prime factor for 5100 is 17', function() {
        assert.equal(17, largest_prime_factor(5100));
    });
});

suite('The divisors of a number', function() {
    test('The divisors of 24 are 2 and 3 with the exponents 3 and 1', function() {
        assert.deepEqual({ base: [ 2, 3 ], exponent: [ 3, 1 ] }, divisors(24));
    });
    test('The divisors of 3000 are 2, 3 and 5  with the exponents 3, 1 and 3', function() {
        assert.deepEqual({ base: [ 2, 3, 5 ], exponent: [ 3, 1, 3 ] }, divisors(3000));
    });
});

suite('Big numbers addition', function() {
    test('the sum of 123456789 and 987654321 is 1111111110', function() {
        assert.deepEqual(1111111110, large_sum(["123456789",
         "987654321"]));
    });
});

suite('Is a palindrome', function() {
    test('15551 is a palindrome', function() {
        assert.equal(true, is_palindrome(15551));
    });
    test('15661 is not a palindrome', function() {
        assert.equal(false, is_palindrome(15661));
    });
});

suite('Largest product in a series', function() {
    test('Largest product in the series "73167176531330624919225119674426574742355349194934" formed by multiplying 3 adjacent members is 378', function() {
        assert.equal(378, largest_product_in_a_series('73167176531330624919225119674426574742355349194934',3));
    });
    test('Largest product in the series "73167176531330624919225119674426574742355349194934" formed by multiplying 4 adjacent members is 1512', function() {
        assert.equal(1512, largest_product_in_a_series('73167176531330624919225119674426574742355349194934',4));
    });
});


suite('Largest product in grid', function() {
    test("Largest product of 3 adjacent members in 08 02 22 97"  
         +"\n49 49 99 40"
         + "\n81 49 31 73"
         + "\n52 70 95 23"
         + "\n22 31 16 71"
         + "\n24 47 32 60"
         + "\n32 98 81 28"
         + "\n67 26 20 68 grid is 345800", function() {
        assert.equal( 345800 , large_prod_grid([[08,02,22,97],
                                                [49,49,99,40],
                                                [81,49,31,73],
                                                [52,70,95,23],
                                                [22,31,16,71],
                                                [24,47,32,60],
                                                [32,98,81,28],
                                                [67,26,20,68]
                                                ],3));
    });
     test("Largest product of 4 adjacent members in 08 02 22 97"  
         +"\n49 49 99 40"
         + "\n81 49 31 73"
         + "\n52 70 95 23"
         + "\n22 31 16 71"
         + "\n24 47 32 60"
         + "\n32 98 81 28"
         + "\n67 26 20 68 grid is 9995020", function() {
        assert.equal( 9995020, large_prod_grid([[08,02,22,97],
                                                [49,49,99,40],
                                                [81,49,31,73],
                                                [52,70,95,23],
                                                [22,31,16,71],
                                                [24,47,32,60],
                                                [32,98,81,28],
                                                [67,26,20,68]
                                                ],4));
    });
  });
    