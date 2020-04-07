const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const data = {};

rl.question('What\'s your name?\n', (answer) => {
  data.name = answer;
  
  rl.question('What\'s an activity you like doing?\n', (answer) => {
   data.activity = answer;
    
    rl.question('What do you listen to while doing that?\n', (answer) => {
     data.music = answer;
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer) => {
       data.meal = answer;
        
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
         data.food = answer;
          
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
           data.sport = answer;
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer) => {
             data.superPower = answer;
              rl.close();
              printProfile(data);
            });
          });
        });
      });
    });
  });
});

const printProfile = (data) => {
  console.log(`${data.name} loves ${data.activity} while listening to ${data.music}, inhaling ${data.food} for ${data.meal}, prefers ${data.sport} over any other sport, and was blessed with the ability of ${data.superPower}. \n`);
};