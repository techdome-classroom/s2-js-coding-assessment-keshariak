/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Loop through the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        // If the current value is less than the next one, subtract it
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }
    
    return total;
};
// console.log(romanToInt("III"));     // Output: 3
// console.log(romanToInt("LVIII"));   // Output: 58
// console.log(romanToInt("MCMXCIV")); // Output: 1994

module.exports = { romanToInt };
