const cityName = 'Lahore';
let price = 5000;
let customer = 25;
const displayMessage = () => `-2-> Welcome to ${cityName} ==> Price ${price} , Custumer ${customer} ==>> Value  {${price*customer}}`;

module.exports = {
  cityName,
  displayMessage,
};