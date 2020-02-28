// // The rgb() method is incomplete.Complete the method so that passing in
// // RGB decimal values will result in a hexadecimal representation being returned.
// // The valid decimal values for RGB are 0 - 255. Any(r, g, b) argument values that 
// // fall out of that range should be rounded to the closest valid value.

// // The following are examples of expected output values:

// // rgb(255, 255, 255) // returns FFFFFF
// // rgb(255, 255, 300) // returns FFFFFF
// // rgb(0, 0, 0) // returns 000000
// // rgb(148, 0, 211) // returns 9400D3

// function rgb(r, g, b) {
//     return toHexStr(r) + toHexStr(g) + toHexStr(b)
// }

// // function toHexStr(dec) {
// //     let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// //     let sixteens = 0;
// //     while (dec >= 16) {
// //         dec -= 16;
// //         sixteens += 1;
// //     }
// //     if (sixteens >= 16) return "FF"
// //     if (dec < 0) return "00"
// //     return String(hex[sixteens]) + String(hex[dec])
// // }

// function toHexStr(dec) {
//     if (dec < 0) return "00"
//     if (dec > 255) return "FF"
//     return ("0" + dec.toString(16)).slice(-2).toUpperCase()
// }

// console.log( rgb(255, 255, 255)) // returns FFFFFF
// console.log( rgb(255, 255, 300)) // returns FFFFFF
// console.log( rgb(0, 0, 0)) // returns 000000
// console.log( rgb(148, 0, 211)) // returns 9400D3