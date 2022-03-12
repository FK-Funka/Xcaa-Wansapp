/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^s(tic?ker)?(gif)?$/i.test(command): {
             let media = quoted ? quoted : m
             let mime =  (media.msg || media).mimetype || ''
             if (/image|video/.test(mime)) {
                 reply(mess.wait)
                 let img = await media.download()
                 await xcaa.sendSticker(from, img, m, { pack: packName, author: authorName, keepScale: /-crop/i.test(args[0]) ? false : true, crop: /-crop/i.test(args[0]) })
             } else if (isQuotedSticker && !quoted.isAnimated || isQuotedImage || isQuotedVideo) {
                 reply(mess.wait)
                 let img = await media.download()
                 await xcaa.sendSticker(from, img, m, { pack: packName, author: authorName, keepScale: /-crop/i.test(args[0]) ? false : true, crop: /-crop/i.test(args[0]) })
             } else reply(`Example : Kirim Video/Gif/Image Caption *${prefix + command}*`)
             break
         }
         case /^tourl$/i.test(command): {
             reply(mess.wait)
             let q = quoted ? quoted : m
             let mime = (q.msg || q).mimetype || ''
             if (/image|video|sticker|audio|document/.test(mime)) {
                 let media = await q.download()
                 let link = await uploadFile(media)
                 reply(link)
             } else reply('Example : Tag Image/Video/Sticker/Audio/Documen Yang Dikirim')
             break
         }
         case /^to(img|image|vid|video)$/i.test(command): {
            if (isQuotedSticker && quoted.isAnimated == false) {
            	reply(mess.wait)
                await convert.webp2png(await quoted.download()).then(v => xcaa.sendFile(from, v, '', '', m))
            } else if (isQuotedSticker && quoted.isAnimated == true) {
            	reply(mess.wait)
                await convert.webp2mp4(await quoted.download()).then(v => xcaa.sendFile(from, v, '', '', m))
            } else reply('Example : Tag Image/Video Yang Dikirim')
            break
        }
        case /^to(mp3|a(udio)?)$/i.test(command): {
            let media = quoted ? quoted : m
            if (isQuotedDocument && /video/.test(quoted.mimetype) || /video/.test(media.mtype)) {
            	reply(mess.wait)
                await convert.toAudio(await media.download(), 'mp4').then(v => xcaa.sendMessage(from, v, 'audioMessage', {quoted: ftroli, mimetype: 'audio/mp4' }))
            } else if (isQuotedDocument && /audio/.test(quoted.mimetype) || isQuotedAudio) {
            	reply(mess.wait)
                await convert.toPTT(await media.download(), 'mp4').then(v => xcaa.sendMessage(from, v, 'audioMessage', {quoted: ftroli, ptt: true, mimetype: 'audio/mp4' }))
            } else reply(`Example : Kirim Video Caption *${prefix + command}*`)
            break
        }
     } 
})()