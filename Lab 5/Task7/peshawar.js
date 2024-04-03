const cityName = 'Peshawar';
let price = 600;
let customer = 30;
const displayMessage = () => `-4-> Welcome to ${cityName} ==> Price ${price} , Custumer ${customer} ==>> Value  {${price*customer}}`;

module.exports = {
  cityName,
  displayMessage,
};