#!/usr/bin/env node
console.log('Hello world')

const inquirer = require('inquirer')

inquirer.prompt([
{
 type: 'checkbox',
 message: 'Quelle stat voulez vous choisir',
 name: 'StatChoice',
 choices: [
 'Armure',
 'Resistance Magic',
 'Point de Vie',
 'Dégats physique'
 ]
 }
]).then((answers) => {
 console.log(answers)
})
