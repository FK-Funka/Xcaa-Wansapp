/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^cowok$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/cowok.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             cowokk = await getBuffer(randKey.result)
             cwok = await conn.prepareMessage(from, cowokk, 'imageMessage', {thumbnail: cowokk})
             const buttu = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttcowok = {
             imageMessage: cwok.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: buttu,
             headerType: 4
             }
             await conn.sendMessage(from, buttcowok, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^cewek$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/cewek.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             cewekk = await getBuffer(randKey.result)
             cwek = await conn.prepareMessage(from, cewekk, 'imageMessage', {thumbnail: cewekk})
             const buot = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttcewek = {
             imageMessage: cwek.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: buot,
             headerType: 4
             }
             await conn.sendMessage(from, buttcewek, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^exo$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/exo.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             xoo = await getBuffer(randKey.result)
             exoo = await conn.prepareMessage(from, xoo, 'imageMessage', {thumbnail: xoo})
             const buut = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttexo = {
             imageMessage: exoo.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: buut,
             headerType: 4
             }
             await conn.sendMessage(from, buttexo, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^bts(batues)$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/bts.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             batues = await getBuffer(randKey.result)
             betes = await conn.prepareMessage(from, batues, 'imageMessage', {thumbnail: batues})
             const buttuu = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttbtes = {
             imageMessage: betes.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: buttuu,
             headerType: 4
             }
             await conn.sendMessage(from, buttbtes, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^blackpink$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/blackpink.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             blakpink = await getBuffer(randKey.result)
             bkpink = await conn.prepareMessage(from, blakpink, 'imageMessage', {thumbnail: blakpink})
             const butytu = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttblkpink = {
             imageMessage: bkpink.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: butytu,
             headerType: 4
             }
             await conn.sendMessage(from, buttblkpink, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})  
             break
         }
         case /^dark(joke|jokes)$/i.test(command): {
             await reply(mess.wait)
             data = fs.readFileSync('./lib/darkjokes.js')
             jsonData = JSON.parse(data)
             randConn = Math.floor(Math.random() * jsonData.length);
             randKey = jsonData[randConn];
             gelapjok = await getBuffer(randKey.result)
             drakjk = await conn.prepareMessage(from, gelapjok, 'imageMessage', {thumbnail: gelapjok})
             const bbuttu = [
                 {buttonId:`${prefix + command}`,buttonText:{displayText:'Next'},type:1}
             ]
             const buttbdarkjok = {
             imageMessage: drakjk.message.imageMessage,
             contentText: `Image ${command}nya nih kak`,
             footerText: '© FxSx',
             buttons: bbuttu,
             headerType: 4
             }
             await conn.sendMessage(from, buttdarkjok, 'buttonsMessage', {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
     }
})()