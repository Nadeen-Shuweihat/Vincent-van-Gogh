alert ('Hey there vincent fan');

var userName = prompt('what is your name?');
console.log(userName);
alert('Welcome '+ userName );

var vanQoute = prompt('Who said "There is no blue without yellow and without orange?"');
var answerVan = 'vincent van gogh'
while(vanQoute !== answerVan){vanQoute = prompt('a hint "an artist with one ear and a sad love story"')};

var littleKnowldge = prompt('do you know all of van gogh drawings?');




if(littleKnowldge === 'no'){alert('check our website gallery')}else{alert('GOOD FOR YOU')};


var vinPainting = prompt('What is your favourite van gogh painting','starry night,the sower,almond blossoms');
var goghPainting = prompt('How many times would you like to see ' + vinPainting +' ?');

for( var i = 1 ; i <=goghPainting; i++){if(vinPainting === 'starry night'){document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VanGogh-starry_night_ballance1.jpg/400px-VanGogh-starry_night_ballance1.jpg">')}else if(vinPainting === 'the sower'){document.write('<img src = "https://faithmag.com/sites/default/files/styles/original/public/2018-09/lessons_in_mercy_the_parable_of_the_sower.jpg?itok=YHDzPi2J">')}else if(vinPainting === 'almond blossoms'){document.write('<img src = "https://i.pinimg.com/originals/16/c3/80/16c3806db122c017f9c5a96fb33bda56.jpg">')}else {alert('Then enjoy my humble website')}}



