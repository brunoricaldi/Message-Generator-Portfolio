const object = {
    firstMessage: ['The true meaning of life is ', 'What life is all about is, actually, ', 'Well, ladies and gentlemen, coming to think of it, in life, you have '],
    secondMessage: ['to have fun with your friends. ', 'to meet as many new people as you can. ', 'to travel around the world. '],
    thirdMessage: ['Simple as that.', 'That\'s it.', 'End of story.']
};

const art = {
    arts: ['(#^.^#)     Iglybuff, the kawaii person.', '(^._.^)~    Spoink, the smart pig.', '<(o.o )>      John, the illusionist.']
}

const getRandomNumb = array => Math.floor(Math.random() * array.length);

const generateRandomMessage = () => {
    let randomNumber1 = getRandomNumb(object.firstMessage);
    let randomNumber2 = getRandomNumb(object.secondMessage);
    let randomNumber3 = getRandomNumb(object.thirdMessage);

    let randomMessage = object.firstMessage[randomNumber1] + object.secondMessage[randomNumber2] + object.thirdMessage[randomNumber3];

    console.log(randomMessage);
    console.log(' ');
    console.log(' ');
}

const generateRandomArt = () => {
    let randomNumber = getRandomNumb(art.arts);
    let randomArt = art.arts[randomNumber];

    console.log("Author:");
    console.log(' ');
    console.log(randomArt);
}

generateRandomMessage();
generateRandomArt();