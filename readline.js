const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});

var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var answer = num1 + num2;

function readLine(){
    rl.question(`sum of ${num1} + ${num2} is? \n`, (answer) => {
        if(answer == num1 + num2){
            rl.close();
        }

        else{
            rl.setPrompt(`the answer ${answer} is wrong. please try again \n`);
            rl.prompt();
            rl.on('line', (new_answer) => {
                if (new_answer != num1+ num2){
                    rl.setPrompt(`the answer ${new_answer} is wrong again. please try again \n`);
                    rl.prompt();
                }
                else{
                    rl.close();
                }
            });
        }
    });
}

good_answer_event = rl.addListener("close", () => {
    console.log(`that's correct ... ${num1} + ${num2} = ${answer}`);
});

module.exports = {readLine : readLine}