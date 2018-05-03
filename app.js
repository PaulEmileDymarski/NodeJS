const API = require('axios')
const inquirer = require('inquirer')
const fs = require('fs');
const program  = require('commander');

let donnee = {}
const promises = []
const APIkey = 'api_key=RGAPI-74cce822-c34c-440e-986a-c1e482516ecc'

program
  .version('1.0.0')
  .option('-i, --item', 'stat item')
  .option('-ver, --versions', 'historique version')

program.parse(process.argv);
///////////////////////////////appel pour les version du jeu////////////////////////////////
console.log(program.version)
if (program.versions) {
  mainVersion();
}
///////////////////////////appel Main des items///////////////////////////////
else if (program.item) {
  mainItems();
}
////////////////////////appel Main des champions//////////////////////////////////
else {
  mainChamps();
}
/////////////////////////////Fonctino Main des Champions///////////////////////////////////////////////////
async function mainChamps() {
  try {
    await inquirer.prompt([
    {
      type:'input',
      message:'Entrez un nom de champions',
      name:'champName'
    }
    ]).then((answer)=>{
      console.log(answer.champName)
      championName = answer.champName
      fs.writeFile('MYFILETEST.txt', championName, function (err) {
        if (err) throw err;
        console.log('Saved!');
      })
    })
  let donnee = await API.get('https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=stats&dataById=false&' + APIkey)
  console.log(donnee.data);
}
catch(e) {
    console.error(e)
  }
}
/////////////////////////////////Fonction main des items///////////////////////////////
async function mainItem() {
  try {
    await inquirer.prompt([
    {
      type:'input',
      message:'Entrez un nom d item',
      name:'itemName'
    }
    ]).then((answer)=>{
      console.log(answer.itemName)
      itemName = answer.itemName
      fs.writeFile('MYFILETEST.txt', itemName, function (err) {
        if (err) throw err;
        console.log('Saved!');
      })
    })
  let donnee = await API.get('https://euw1.api.riotgames.com/lol/static-data/v3/items?locale=en_US&' + key)
  console.log(donnee.data.itemnName);
}
catch(e) {
    console.error(e)
  }
}
////////////////////////////////////Fonction main des Versions//////////////////////////////////
async function mainVersion() {
  try {
let donnee = await API.get('https://euw1.api.riotgames.com/lol/static-data/v3/versions?api_key=RGAPI-74cce822-c34c-440e-986a-c1e482516ecc')
console.log('Historique des versions du jeu : '+donnee.data);
}
catch(e) {
    console.error(e)
  }
}
