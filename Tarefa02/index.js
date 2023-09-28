import inquirer from 'inquirer';
import chalk from 'chalk';

const erro = null;
inquirer.prompt([
    {
        name: 'p1', 
        message: 'Qual é seu nome?'
    },{
        name: 'p2', 
        message: 'Qual é a sua idade?'
    },
]).then((answers) => {
    if(answers.p1 === ''){
        erro = 'sim'
    }
    console.log(`Meu nome é ${chalk.bgYellow.black(answers.p1)} e tenho ${chalk.bgYellow.black(answers.p2)} anos!`)
}).catch((err) => console.log('Nome deve ser preenchido, tente novamente!'))