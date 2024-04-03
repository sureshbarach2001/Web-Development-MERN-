const cityName = 'Karachi';
let price = 10000;
let customer = 50;
const displayMessage = () => `-1-> Welcome to ${cityName} ==> Price ${price} , Custumer ${customer} ==>> Total Value  {${price*customer}}`;

module.exports = {
  cityName,
  displayMessage,
};