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
             sendButtImageCwok(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^cewek$/i.test(command): {
             await reply(mess.wait)
             sendButtImageCwek(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^exo$/i.test(command): {
             await reply(mess.wait)
             sendButtImageExo(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^bts(batues)$/i.test(command): {
             await reply(mess.wait)
             sendButtImageBts(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^blackpink$/i.test(command): {
             await reply(mess.wait)
             sendButtImageBlackPink(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
         case /^dark(joke|jokes)$/i.test(command): {
             await reply(mess.wait)
             sendButtImageDarkJokes(from, `Nih Imagenya`, '© FxSx', {jpegThumbnail: global.thumb}, 
             [
             {buttonId:`${prefix + command}`,buttonText:{displayText:'NEXT'},type:1}
             ], 
             {quoted: m, contextInfo: {mentionedJid: [sender]}})
             break
         }
     }
})()