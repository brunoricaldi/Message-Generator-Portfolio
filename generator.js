const object = {
    firstMessage: ['The true meaning of life is ', 'What life is all about is, actually, ', 'Well, ladies and gentlemen, coming to think of it, in life, you have '],
    secondMessage: ['to have fun with your friends. ', 'to date as many people as you can. ', 'to travel around the world. '],
    thirdMessage: ['Simple as that.', 'That\'s it', 'End of story.']
};


const generateRandomMessage = () => {
    let randomNumber1 = Math.floor(Math.random() * object.firstMessage.length);
    let randomNumber2 = Math.floor(Math.random() * object.secondMessage.length);
    let randomNumber3 = Math.floor(Math.random() * object.thirdMessage.length);

    let randomMessage = object.firstMessage[randomNumber1] + object.secondMessage[randomNumber2] + object.thirdMessage[randomNumber3];

    console.log(randomMessage);
}

generateRandomMessage();