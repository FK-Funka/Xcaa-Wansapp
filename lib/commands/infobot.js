/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki
*/
(async () => {
     switch(true) {
         case /^(menu|help)$/i.test(command): {
             menunya = `╭「 *INFO BOT* 」
├ ${prefix}owner
├ ${prefix}runtime
├ ${prefix}speed
├ ${prefix}listgrup
├ ${prefix}get
├ ${prefix}rvo
└ ${prefix}delete

╭「 *ANONYMOUS* 」
├ ${prefix}start
├ ${prefix}next
└ ${prefix}stop

╭「 *RDM IMAGE* 」
├ ${prefix}cowok
├ ${prefix}cewek
├ ${prefix}exo
├ ${prefix}bts
├ ${prefix}blackpink
└ ${prefix}darkjokes

╭「 *CONVERTER* 」
├ ${prefix}toimg
├ ${prefix}tovideo
├ ${prefix}tourl
├ ${prefix}tomp3
└ ${prefix}sticker

╭「 *DOWNLOAD* 」
├ ${prefix}ytv
├ ${prefix}yta
├ ${prefix}fbdl
├ ${prefix}pixiv
├ ${prefix}igdl
├ ${prefix}pindl
├ ${prefix}twitter
├ ${prefix}tiktokdl
├ ${prefix}mediafire
├ ${prefix}anonfiles
├ ${prefix}sfilemobi
├ ${prefix}zippyshare
└ ${prefix}asupan

╭「 *SEARCHING* 」
├ ${prefix}domain
├ ${prefix}google
├ ${prefix}gimage
├ ${prefix}sfilemobi
├ ${prefix}ytsearch
├ ${prefix}wikipedia
├ ${prefix}konachan
├ ${prefix}pinterest
├ ${prefix}stickerpack
├ ${prefix}happymod
├ ${prefix}stickerline
├ ${prefix}stelesearch
├ ${prefix}alphacoders
└ ${prefix}wallpapercave

╭「 *GROUPS* 」
├ ${prefix}linkgc
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}promote
├ ${prefix}demote
└ ${prefix}setppgc

╭「 *FUNNY* 」
├ ${prefix}bonk
├ ${prefix}ship
├ ${prefix}gay
├ ${prefix}kiss
├ ${prefix}bully
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}lick
└ ${prefix}slap

╭「 *MAKER* 」
├ ${prefix}lisa
├ ${prefix}changemymind
├ ${prefix}blur
├ ${prefix}jojo
├ ${prefix}trash
├ ${prefix}rip
├ ${prefix}burn
├ ${prefix}circle
├ ${prefix}wanted
├ ${prefix}wasted
├ ${prefix}hornycard
├ ${prefix}komunis
├ ${prefix}patrick
└ ${prefix}spongebob

╭「 *OWNER* 」
├ ${prefix}public
├ ${prefix}self
├ ${prefix}restart
├ ${prefix}join
├ ${prefix}setprefix
├ ${prefix}setppbot
├ $
└ >
`
              data = fs.readFileSync('./lib/imageB.js')
              jsonData = JSON.parse(data)
              randIndex = Math.floor(Math.random() * jsonData.length);
              randKey = jsonData[randIndex];
              imgB = await getBuffer(randKey.image)
              let prep = await xcaa.toMSG(imgB, 'imageMessage')
              xcaa.sendMessage(from, { contentText: menunya.trim(), footerText: '© FxSx', buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}ping`, buttonText: { displayText: 'SPEED' }, type: 1 },{ buttonId: `${prefix}runtime`, buttonText: { displayText: 'RUNTIME' }, type: 1 }], headerType: 'IMAGE', imageMessage: prep }, 'buttonsMessage', { thumbnail: imgB, quoted: m })
              break
         }
         case /^(get|fetch)$/i.test(command): {
             if (!text) return reply('Urlnya?')
             let res = await fetch(args[0])
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
                 delete res.headers
                 reply(`Content-Length: ${res.headers.get('content-length')}`)
             } 
             if (!/text|json/.test(res.headers.get('content-type'))) return xcaa.sendFile(from, text, 'file', text, m)
             let txt = await res.buffer()
             try {
                txt = util.format(JSON.parse(txt + ''))
             } catch (e) {
                txt = txt + ''
             } finally {
                reply(txt.slice(0, 65536) + '')
             }
             break
         }
         case /^owner$/i.test(command): {
             let listOwner = new Array()
             for (let i of global.ownerNumber.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net')) {
                 listOwner.push({ vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${xcaa.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Home\nitem2.URL:https://www.instagram.com/thenay_xploit_\nitem2.X-ABLabel:Xcaa\nitem3.X-ABLabel:Pinky\nEND:VCARD` })
             }
             xcaa.sendMessage(from, { displayName: listOwner.length + ' kontak', contacts: listOwner }, 'contactsArrayMessage', { quoted: ftroli })
             break
         }
         case /^d(elete|elate|el)?$/i.test(command): {
             if (quoted && quoted.fromMe) {
                  await quoted.delete()
             } else reply('Reply chat bot')
             break
         }
         case /^(up|run)time$/i.test(command): {
             reply(functions.clockString(process.uptime()))
             break
         }
         case /^(ping|speed)$/i.test(command): {
             let old = +new Date
             await reply('Testing speed...')
             let neww = +new Date
             let speed = functions.parseMs(neww - old)
             reply(`Merespon dalam ${speed.seconds}.${speed.milliseconds} detik`)
             break
         }
         case /^(list(grup|group|gc)|grouplist)$/i.test(command): {
             let txt = xcaa.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
             reply('List Groups:\n' + txt)
             break
         }
         case /^r(vo|eadviewonce)$/i.test(command): {
             if (!m.quoted) return reply('Reply viewOncenya')
             if (m.quoted.mtype !== 'viewOnceMessage') return reply('Thats not a viewOnce message')
             await xcaa.copyNForward(from, await xcaa.loadMessage(from, m.quoted.id), false, { readViewOnce: true }).catch(_ => reply('Maybe its been opened by a bot'))
             break
         }
     }
})()
