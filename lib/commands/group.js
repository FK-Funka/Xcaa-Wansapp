/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^setpp(gro?up|gc)$/i.test(command): {
             if (!isGroup) return reply(mess.group)
             if (!isBotAdmin) return reply(mess.botAdmin)
             if (!isAdmin) return reply(mess.admin)
             let media = quoted ? quoted : m
             if (/image|document/.test(media.mtype)) {
                 xcaa.updateProfilePicture(from, await media.download()).then(() => reply('Sukses Update Profile Picture Group'))
             } else reply('Picture needed.')
             break
         }
          case /^hidetag$/i.test(command): {
              if (!isGroup) return reply(mess.group)
              if (!isAdmin) return reply(mess.admin)
              let groupMembers = isGroup ? groupMetadata.participants : []
              let users = groupMembers.map(u => u.jid)
              let q = quoted ? quoted : m
              let c = quoted ? quoted : m.msg
              let msg = xcaa.cMod(from, xcaa.prepareMessageFromContent(from, { [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : { text: c || '' }}, { contextInfo: { mentionedJid: users }, quoted: null }), text || q.text)
              await xcaa.relayWAMessage(msg)
              break
          }
          case /^tagall$/i.test(command): {
              if (!isGroup) return reply(mess.group)
              if (!isAdmin) return reply(mess.admin)
              let groupMem = isGroup ? meta.participants : ''
              let mems_id = new Array()
              let text = `*Announcement*${args.length > 0 ? '\n\n'+args.join(' ') : ''}\nFrom: @${sender.split('@')[0]}\n\n`
              for (let i of groupMem) {
                 text += `@${i.jid.split('@')[0]}\n`
                 mems_id.push(i.jid)
              }
              await xcaa.sendMessage(from, text, 'extendedTextMessage', { contextInfo: { mentionedJid: mems_id } })
              break
          }
          case /^link(gro?up|gc)?$/i.test(command): {
              if (!isGroup) return reply(mess.group)
              if (!isBotAdmin) return reply(mess.botAdmin)
              await xcaa.groupInviteCode(from).then(v => xcaa.reply(from, 'https://chat.whatsapp.com/' + v, m))
              break
          }
          case /^promote$/i.test(command): {
              if (!isGroup) return reply(mess.group)
              if (!isBotAdmin) return reply(mess.botAdmin)
              if (!isAdmin) return reply(mess.admin)
              let mem = quoted ? [quoted.sender] : mentionedJid
              if (!mem[0]) return reply('Tag/reply who wants to be appointed as admin.')
              mem.map(v => xcaa.groupMakeAdmin(from, [v]))
              break
          }
          case /^demote$/i.test(command): {
              if (!isGroup) return reply(mess.group)
              if (!isBotAdmin) return reply(mess.botAdmin)
              if (!isAdmin) return reply(mess.admin)
              let mem = quoted ? [quoted.sender] : mentionedJid
              if (!mem[0]) return reply('Tag/reply someone who wants to be demoted.')
              mem.map(v => xcaa.groupDemoteAdmin(from, [v]))
              break
          }
     } 
})()
