// Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

var shirtWidth = '24';
var shirtLength = '31';
var shirtSleeve = '8.89';

if (
  shirtWidth >= '18' &&
  shirtWidth < '20' &&
  shirtLength >= '28' &&
  shirtLength < '29' &&
  shirtSleeve >= '8.13' &&
  shirtSleeve < '8.38'
) {
  alert('You wear a size small.');
} else if (
  shirtWidth >= '20' &&
  shirtWidth < '22' &&
  shirtLength >= '29' &&
  shirtLength < '30' &&
  shirtSleeve >= '8.38' &&
  shirtSleeve < '8.63'
) {
  alert('You wear a size medium.');
} else if (
  shirtWidth >= '22' &&
  shirtWidth < '24' &&
  shirtLength >= '30' &&
  shirtLength < '31' &&
  shirtSleeve >= '8.63' &&
  shirtSleeve < '8.88'
) {
  alert('You wear a size large.');
} else if (
  shirtWidth >= '24' &&
  shirtWidth < '26' &&
  shirtLength >= '31' &&
  shirtLength < '33' &&
  shirtSleeve >= '8.88' &&
  shirtSleeve < '9.63'
) {
  alert('You wear a size extra large.');
} else if (
  shirtWidth >= '26' &&
  shirtWidth < '28' &&
  shirtLength >= '33' &&
  shirtLength < '34' &&
  shirtSleeve >= '9.63' &&
  shirtSleeve < '10.13'
) {
  alert('You wear a size 2 extra large.');
} else if (
  shirtWidth == '28' &&
  shirtLength == '34' &&
  shirtSleeve == '10.13'
) {
  alert('You wear a size 3 extra large.');
} else {
  alert('Sorry, we do not carry your size.');
}
