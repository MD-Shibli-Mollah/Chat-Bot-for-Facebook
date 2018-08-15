var botBuilder = require('claudia-bot-builder'), excuse = require('huh'); 
module.exports = botBuilder(function (request) { 
return 'Thanks for sending ' + request.text + '. We love to text you back and your message is very important to us, but ' + excuse.get() +'. Sorry for the Inconvenience'; 
});