const count_digits = (n) => {
    var count = 0;
    if (n >= 1) {
        count++
    }
    while (n / 10 >= 1) {
        n /= 10;
        ++count;
    }
    return count;


}
console.log("The nO. Of digit is :" + count_digits(12345));