/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
const fs = require('fs')

global.packName = 'Xcaa-Bot'
global.authorName = '© FxSx'
global.prefix = '#'
global.mode = 'publik'
global.ownerNumber = ['6283818221226']
global.thumb = fs.readFileSync('./src/foto.jpg')

global.APIs = {
	zaki: 'https://api.kizakixd.xyz/api'
}
global.APIKeys = {
	'https://api.kizakixd.xyz/api': 'Your_Apikey'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update '${__filename}'`)
    delete require.cache[file]
    require(file)
})
