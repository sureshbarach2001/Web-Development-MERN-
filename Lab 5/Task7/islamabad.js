const cityName = 'Islamabad';
let price = 500;
let customer = 50;
const displayMessage = () => `-3-> Welcome to ${cityName} ==> Price ${price} , Custumer ${customer} ==>> Value  {${price*customer}}`;

module.exports = {
  cityName,
  displayMessage,
};