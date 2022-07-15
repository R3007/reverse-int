module.exports = function reverse (n) {
    return Number(Math.abs(n).toString().split('').reverse().join(''))
}


//Number - return number(not string)
//Math.abs(n) - method returns the absolute value of a number n (-1 = 1)
//toString - method retrn a string - need for split
//split - method splits a string into an array
//reverse - method reverses the order of the elements in an array
//join - method returns an array as a string
