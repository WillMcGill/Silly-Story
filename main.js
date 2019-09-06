

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}



let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ['Willy the Goblin',
                'Big Daddy',
                'Father Christmas'
];

let insertY = ['the soup kitchen',
                'Disneyland',
                'the White House'
];

let insertZ = ['spontaneously combusted',
                'melted into a puddle on the sidewalk',
                'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

let newStory = storyText;


let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace (":insertx:", xItem );
newStory = newStory.replace (":inserty:", yItem );
newStory = newStory.replace (":insertz:", zItem );
newStory = newStory.replace (":insertx:", xItem );

function result() {

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace ("Bob", name)

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 / 14) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace ("94 fahrenheit", temperature);
    newStory = newStory.replace ("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

/*function getRandom(){

  console.log ('getRandom has been run')  // tests that function runs on page load //

  let randomName = fetch ('https://randomuser.me/api/?results=1');
      randomName.then(
        function(x) {
          return x.json;
        })

      .then(function(x){
        console.log(JSON.stringify(x));

      })

     
}
*/
window.onload = getRandom;

function getRandom() {fetch('https://randomuser.me/api/?results=1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

}

