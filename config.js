global.owner = ['6285713041886']  
global.mods = ['6281322667077'] 
global.prems = ['6281395861695']
global.nameowner = 'Fachri'
global.numberowner = '6285713041886' 
global.mail = 'fachristyle.id@gmail.com' 
global.gc = 'https://chat.whatsapp.com/BUU91r7ZQaE1Pw7W78KpSw'
global.instagram = 'https://instagram.com/sfdesign_id'
global.wm = '© FachriStyle'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = '477M6Q8M' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'kwfbrmAN'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
