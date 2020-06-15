// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 a bit more clean, keeping variables locally in the function counterMaker. The second one, although less text, the variable lives in the global scope, which could complicate things down the line.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * the first counter uses a closure. It uses a function within a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * the first scenario would be preferable if you making a webite and want it to be used several times throughout the experience. the second one isnt as good for scaling.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(score){
  score = Math.floor(Math.random() * 4);
  return score;
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num){
  let total = {Home: 0, Away: 0};
  for(let i = 0; i < num; i++){
    total.Home += inning();
    total.Away += inning();
    }
  return total;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */



function scoreboard(inning, innNum) {
  let teamA = 0;
  let teamB = 0;
  for(let j = 1; j <= innNum; j++){
    teamA += inning();
    teamB += inning();
    console.log(`Inning ${j}: ${teamA} - ${teamB}`);
  }
  console.log(`Final Score: ${teamA} - ${teamB}`);
}

console.log(scoreboard(inning, 9));


// function scoreboard(inning, innNum) {
//   let teamA = inning();
//   let teamB = inning();
//   finalScore = {[`Inning 1`]: `${teamA} - ${teamB}`};
//   for(let j = 0; j <= innNum; j++){
//     teamA += inning();
//     teamB += inning();
//     finalScore[`Inning ${j}`] = `${teamA} - ${teamB}`;
//   }
//   finalScore[`Final Score`] = `${teamA} - ${teamB}`;


// }

// console.log(scoreboard(inning, 9));