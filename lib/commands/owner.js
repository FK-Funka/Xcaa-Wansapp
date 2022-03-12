/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^>?> /.test(body): {
             if (!isOwner) return reply(mess.owner)
             let teks
             try {
                 teks = await eval(`(async () => { ${(/^>>/.test(budy) ? 'return ' : '') + text} })()`)
             } catch (e) {
                 teks = e
             } finally {
                 reply(util.format(teks))
             }
             break
         }
         case /^[$] /.test(body): {
             if (!isOwner) return reply(mess.owner)
             await reply('Executing...')
             exec(text, (stderr, stdout) => {
                 if (stderr) reply(stderr)
                 if (stdout) reply(stdout)
             })
             break
         }
         case /^setprefix$/i.test(command): {
             if (!isOwner) return reply(mess.owner)
             global.prefix = text
             reply(`Success Set Prefix To ${text}`)
             break
         }
         case /^(self|publi(k|c))$/i.test(command): {
             if (!isOwner) return
             global.mode = /self/i.test(body) ? 'self' : 'public'
             reply(`Success Set Mode To ${mode}`)
             break
         }
         case /^set(ppbot|botpp)$/i.test(command): {
             if (!isOwner) return reply(mess.owner)
             let media = quoted ? quoted : m
             if (/image|document/.test(media.mtype)) {
                 reply(mess.wait)
                 conn.updateProfilePicture(conn.user.jid, await media.download()).then(() => reply('Sukses Update Profile Picture Bot'))
             } else reply('Picture needed.')
             break
         }
         case /^join$/i.test(command): {
             if (!isOwner) return reply(mess.owner)
             let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
             let [_, code] = text.match(linkRegex) || []
             if (!code) return reply('Invalid code.')
             let res = await conn.acceptInvite(code)
             reply(`Success join group.`)
             break
         }
         case /^restart$/i.test(command): {
             if (!isOwner) return reply(mess.owner)
             await reply('Restarting...')
             process.send('reset')
             break
         }
     }
})()