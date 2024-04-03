const cityName = 'Multan';
let price = 50;
let customer = 67;
const displayMessage = () => `-5-> Welcome to ${cityName} ==> Price ${price} , Custumer ${customer} ==>> Value  {${price*customer}}`;

module.exports = {
  cityName,
  displayMessage,
};