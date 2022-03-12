/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^next$/i.test(command): {
             if (isGroup) return reply('*Group Only*')
             let rom = Object.values(anonymous).find(room => room.check(sender))
             if (!rom) {
                xcaa.reply(from, 'You have no partner 🤔\nType '+ prefix +'search to find a new partner', m)
             }
             let other = rom.other(sender)
             if (other) {
                 xcaa.reply(other, 'Your partner has stopped the dialog 😞\nType '+ prefix +'search to find a new partner', m)
             }
             delete anonymous[rom.id]
         } 
         case /^(start|search)$/i.test(command): {
             if (isGroup) return reply('*Group Only*')
             if (Object.values(anonymous).find(room => room.check(sender))) return reply('Kamu masih berada di dalam anonymous chat')
             let room = Object.values(anonymous).find(room => room.state === "WAITING" && !room.check(sender))
             if (room) {
                 xcaa.reply(room.c, 'Partner found 🐵\n'+ prefix + 'next — find a new partner\n'+ prefix + 'stop — stop this dialog', m)
                 room.b = sender
                 room.state = "CHATTING"
                 xcaa.reply(from, 'Partner found 🐵\n' + prefix + 'next — find a new partner\n'+ prefix + 'stop — stop this dialog', m)
             } else {
                 let ifd = +new Date()
                 anonymous[ifd] = {
                     id: ifd,
                     c: sender,
                     b: '',
                     state: "WAITING",
                     check: function (who = '') {
                     return [this.c, this.b].includes(who)
                 },
                 other: function (who = '') {
                     return who === this.c ? this.b : who === this.b ? this.c : ''
                 },
             }
             reply('Looking for a partner...')
             }
             break
         }
         case /^stop$/i.test(command): {
             if (isGroup) return reply('*Group Only*')
             let reme = Object.values(anonymous).find(room => room.check(sender))
             if (!reme) {
                 xcaa.reply(from, 'You have no partner 🤔\nType '+ prefix + 'search to find a new partner', m)
             }
             xcaa.reply(from, 'You stopped the dialog 🙄\nType '+ prefix + 'search to find a new partner', m)
             delete anonymous[reme.id]
             let erh = reme.other(sender)
             if (erh) {
                 xcaa.reply(erh, 'Your partner has stopped the dialog 😞\nType '+ prefix +'search to find a new partner', m)
             }
             break
         }
     } 
})()