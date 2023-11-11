let quote= document.querySelector('.text-area');
let author= document.querySelector('.author');
let button= document.querySelector('.btn');


quotesArr=[
    {quote:`"The way to get started is to quit talking and begin doing"`, 
    auth:"Walt Disney"},
    {quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking."`, 
    auth:"Steve Jobs"},
     {quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`, 
    auth:"James Cameron"},
     {quote:`"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`, 
    auth:"Helen Keller"},
     {quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier." `, 
    auth:"Mother Teresa"},
     {quote:`"In the end, it's not the years in your life that count. It's the life in your years."`, 
    auth:"Abraham Lincoln"},
     {quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`, 
    auth:"Thomas A. Edison"},
     {quote:`"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`, 
    auth:"Martin Luther King Jr"},
    {quote:`"It is during our darkest moments that we must focus to see the light." `, 
    auth:"Aristotle"}
];

button.addEventListener('click',
    function() 
     {
        let random=Math.floor(Math.random()*quotesArr.length);
        quote.innerText=quotesArr[random].quote;
        author.innerText=quotesArr[random].auth;
     }

)
