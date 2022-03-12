/*
> Author : FxSx
> NameB : Xcaa
> Library : Baileys
> Program : NodeJs
> Apikey : Zaki

Note:
Kalo Mau Ambil Case Kasih Nama Gua FxSx
*/
require('./config.js')
'use strict';
const { WAConnection, MessageType, Mimetype, GroupSettingChange } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const util = require('util')
const { exec } = require('child_process')

const simple = require('./lib/simple.js')
const convert = require('./lib/converter.js')
const { mess } = require('./lib/txt.js')
const functions = require('./lib/function.js')
const { color, print, isUrl, getBuffer, getAdmin, pickRandom, urlShort, uploadFile } = functions

let anonymous = {}


module.exports = { 
     async chatUpdate(xcaa, chat) {
        try {
           if (!chat.hasNewMessage) return
           let m = chat.messages.all()[0]
           if (!m.message || m.key && m.key.remoteJid == 'status@broadcast') return
           m.message = m.message.hasOwnProperty('ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
           await simple.smsg(xcaa, m)
           switch (m.mtype) {
               case 'audioMessage':
               case 'videoMessage':
               case 'imageMessage':
               case 'stickerMessage':
               case 'documentMessage': {
                   if (!m.fromMe) await functions.sleep(1000)
                   if (!m.msg.url) await xcaa.updateMediaMessage(m)
                   break
               }
           }
           const { chat: from, fromMe, isGroup, sender, mtype, quoted, mentionedJid, reply, isQuotedSticker, isQuotedImage, isQuotedVideo, isQuotedDocument, isQuotedAudio, isBaileys } = m
           if (isBaileys) return
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
           var budy = typeof m.text == 'string' ? m.text : ''
           const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
           const args = body.trim().split(/ +/).slice(1)
           const isCmd = command.startsWith(prefix);
           const text = q = args.join(" ")
           
           const groupMetadata = isGroup ? await xcaa.groupMetadata(from) : ''
           const groupName = isGroup ? groupMetadata.subject : ''
           const meta = isGroup ? await xcaa.chats.get(from).metadata : ''
           const admin = isGroup ? getAdmin(meta.participants) : ''
           const isAdmin = admin.includes(sender) || false
           const isBotAdmin = admin.includes(xcaa.user.jid) || false
           const pushname = fromMe ? xcaa.user.name : xcaa.getName(sender)
           const time = functions.getTime('L HH:mm:ss')
           const isOwner = fromMe || global.ownerNumber.map(v => v.replace(/\D/g, '') + '@s.whatsapp.net').includes(sender)
           const ftroli = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {orderMessage: {itemCount: 1, status: 200, thumbnail: global.thumb, surface: 200, message: `Xcaa-Bot\n© FxSx`, orderTitle: '© FxSx', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {forwardingScore: 508, isForwarded: true}}

           const sendButtVideo = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/asupan.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           asupan = await getBuffer(randKey.result)
           vidnya = await xcaa.prepareMessage(from, asupan, 'videoMessage')
           const butttMess = {
              videoMessage: vidnya.message.videoMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 5
             }
            await xcaa.sendMessage(id, butttMess, 'buttonsMessage', options)
           }
           
           const sendButtImageCwok = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/cowok.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           cowokk = await getBuffer(randKey.result)
           cwok = await xcaa.prepareMessage(from, cowokk, 'imageMessage', {thumbnail: cowokk})
           const buttcowok = {
              imageMessage: cwok.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttcowok, 'buttonsMessage', options)
           }
           
           const sendButtImageCwek = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/cewek.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           cewekk = await getBuffer(randKey.result)
           cwek = await xcaa.prepareMessage(from, cewekk, 'imageMessage', {thumbnail: cewekk})
           const buttcewek = {
              imageMessage: cwek.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttcewek, 'buttonsMessage', options)
           }
           
           const sendButtImageExo = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/exo.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           xoo = await getBuffer(randKey.result)
           exoo = await xcaa.prepareMessage(from, xoo, 'imageMessage', {thumbnail: xoo})
           const buttexo = {
              imageMessage: exoo.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttexo, 'buttonsMessage', options)
           }
           
           const sendButtImageBts = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/bts.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           batues = await getBuffer(randKey.result)
           betes = await xcaa.prepareMessage(from, batues, 'imageMessage', {thumbnail: batues})
           const buttbtes = {
              imageMessage: betes.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttbtes, 'buttonsMessage', options)
           }
           
           const sendButtImageBlackPink = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/blackpink.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           blakpink = await getBuffer(randKey.result)
           bkpink = await xcaa.prepareMessage(from, blakpink, 'imageMessage', {thumbnail: blakpink})
           const buttblkpink = {
              imageMessage: bkpink.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttblkpink, 'buttonsMessage', options)
           }
           
           const sendButtImageDarkJokes = async (id, text1, desc1, gam1, but = [], options = {}) => {
           data = fs.readFileSync('./lib/darkjokes.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length);
           randKey = jsonData[randIndex];
           gelapjok = await getBuffer(randKey.result)
           drakjk = await xcaa.prepareMessage(from, gelapjok, 'imageMessage', {thumbnail: gelapjok})
           const buttbdarkjok = {
              imageMessage: drakjk.message.imageMessage,
              contentText: text1,
              footerText: desc1,
              buttons: but,
              headerType: 4
             }
            await xcaa.sendMessage(id, buttdarkjok, 'buttonsMessage', options)
           }

           if (mode == 'self' && !isOwner) return
           if (m.message) console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(time)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('> Dari'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('> Di'), chalk.green(isGroup ? groupName : 'Private Chat', from))

           if (from.endsWith("@s.whatsapp.net") && !isCmd) {
               let room = Object.values(anonymous).find(room => [room.c, room.b].includes(sender) && room.state === 'CHATTING')
               if (room) {
                   let other = [room.c, room.b].find(user => user !== sender)
                   m.copyNForward(other, true, quoted && quoted.fromMe ? { contextInfo: { ...m.msg.contextInfo, forwardingScore: 508, isForwarded: true, participant: other }} : {})
               }
           }
          
           fs.readdirSync('./lib/commands').forEach((file) => {
           	if (path.extname(file).toLowerCase() == '.js') {
                   eval(fs.readFileSync('./lib/commands/' + file,  'utf8'))
               }
           })
       } catch (e) {
           xcaa.logger.error(e)
       }
   }
}
       
let file = require.resolve(__filename)
fs.watchFile(file, () => {
     fs.unwatchFile(file)
     console.log(`Update '${__filename}'`)
     delete require.cache[file]
     require(file)
})