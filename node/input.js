// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let query = 'What is your name?\n'

// rl.question(query, (answer) => {
//   console.log(`Hello ${answer}!`);
  
//   rl.close();
// });
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  rl.question(query, (answer) => {
    console.log(`Hello ${answer}!`);
    rl.close();
  });
}

let query = 'What is your name?\n';

askQuestion(query);