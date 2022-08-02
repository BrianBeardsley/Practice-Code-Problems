/*
Is N Divisible by X and Y

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/

/* (P.R.E.P)
    P = we are given 3 parameters, the first parameter (n) is the "parent" integer, and the following two parameters
        (x) (y) are given as possible divisors of (n)

    R = we must return a boolean value (true/false) representing if the child divisors (x)(y) divide evenly into (n) (divides with no decimal places)

    E = 
        1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
        2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
        3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
        4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
    P = we can use the modulus operator and compare if n % x or n % y === 0
*/

// Answer

function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
        return true;
    }else{
        return false;
    }
}

// refactored

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;