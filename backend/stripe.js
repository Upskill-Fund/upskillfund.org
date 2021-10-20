const stripeAPI = require('stripe')(process.env.SECRET_KEY);
console.log('proces enc', process.env.SECRET_KEY);
module.exports = stripeAPI;
