// Code your solutions in this file
function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
    startingNumber--;
    }
  }
  countDown(10);
  
 //countdown done//

  function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);