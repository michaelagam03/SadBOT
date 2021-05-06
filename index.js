const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const {
	listzodiak,
	aries,
	taurus,
	gemini,
	cancer,
	Leo,
	Virgo,
	Libra,
	Scorpio,
	Sagittarius,
	Capricorn,
	Aquarius,
	Pisces
} = require('./src/listzodiak')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { animesaran } = require('./src/animesaran')
const { kodenuklir } = require('./src/kodenuklir')
const { daftarvip } = require('./src/daftarvip')
const { listsurah } = require('./src/listsurah')
const { modapk } = require('./src/modapk')
const { fetchJson } = require('./lib/fetcher')
const { nekopoi } = require('./src/nekopoi')
const { addfoto } = require('./src/addfoto')
const { spawn } = require('child_process')
const { bahasa } = require('./src/bahasa')
const { addsay } = require('./src/addsay')
const { exec } = require('child_process')
const { cekvip } = require('./src/cekvip')
const { listsay } = require('./src/listsay')
const { recognize } = require('./lib/ocr')
const { toxic } = require('./src/toxic')
const { wibu } = require('./src/wibu')
const { rules } = require('./src/rules')
const { iklan } = require('./src/iklan')
const { ind } = require('./language')
const { snk } = require('./src/snk')
const { tnc } = require('./src/tnc')
const imageToBase64 = require('image-to-base64')
const moment = require('moment-timezone')
const kagApi = require('@kagchi/kag-api')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper');
const ffmpeg = require('fluent-ffmpeg')
const tiktod = require('tiktok-scraper')
const isNumber = require('is-number');
const fetch = require('node-fetch')
const crypto = require('crypto')
const lolis = require('lolis.life')
const fs = require('fs')
const loli = new lolis()
blocked = []
ban = []
prefix = '.'
limitawal = 20
memberlimit = 2
cr = '*Tempest大 BOT*'
vz = '*Terima Kasih Sudah Daftar Di TEMPEST大*'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:DuingZ\n'
            + 'ORG:Creator AGAM;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6282217590187:+62 822 - 1759 - 0187\n'
            + 'END:VCARD'
/*
]=====> SETTINGS <=====[
*/
const ownerNumber = ["6282217590187@s.whatsapp.net"]
const frendsowner = ["lagi nyari member"]
const vip = ["6282217590187@s.whatsapp.net"]
const botName = 'Tempest大'
const ownerName = 'Michael Agam'
const apiKey = 'Apikey'
const apikey = 'O8mUD3YrHIy9KM1fMRjamw8eg'
const vhtear = 'ApiKey'
const zekapi = 'apivinz'
/*
]=====> LOAD JSON <=====[
*/
const adminbotnumber = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./database/json/bacot.json'))
const _dolaran = JSON.parse(fs.readFileSync('./database/group/dolaran.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const anlink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const sayrandom = JSON.parse(fs.readFileSync('./database/json/say.json'))
const anime = JSON.parse(fs.readFileSync('./database/group/anime.json'))
const public = JSON.parse(fs.readFileSync('./database/group/public.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/vip.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const _dolar = JSON.parse(fs.readFileSync('./database/user/dolar.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const user = JSON.parse(fs.readFileSync('./database/user/user.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { upmenu } = require('./database/menu/upmenu')
const { listmenu } = require('./database/menu/listmenu')
const { vipmenu } = require('./database/menu/vipmenu')
const { funmenu } = require('./database/menu/funmenu')
const { infomenu } = require('./database/menu/infomenu')
const { nsfwmenu } = require('./database/menu/nsfwmenu')
const { othermenu } = require('./database/menu/othermenu')
const { editormenu } = require('./database/menu/editormenu')
const { adminmenu } = require('./database/menu/adminmenu')
const { makermenu } = require('./database/menu/makermenu')
const { mediamenu } = require('./database/menu/mediamenu')
const { ownermenu } = require('./database/menu/ownermenu')
const { animemenu } = require('./database/menu/animemenu')
const { soundmenu } = require('./database/menu/soundmenu')
const { stickermenu } = require('./database/menu/stickermenu')
const { kerangmenu } = require('./database/menu/kerangmenu')
const { searchmenu } = require('./database/menu/searchmenu')
const { downloadmenu } = require('./database/menu/downloadmenu')
/*       
]=====> FUNCTION <=====[
*/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        const getDolarExp = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].xp
            }
        }

        const getDolaranLevel = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].dolar
            }
        }

        const getDolaranId = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].jid
            }
        }

        const addDolaranXp = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].xp += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranLevel = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].dolar += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _dolar.push(obj)
            fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
        }
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
       
                 const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
         	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
  function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> LOG IN <=====[
*/

	async function starts() {
	const yuki = new WAConnection()
	yuki.logger.level = 'warn'
	console.log(banner.string)
	yuki.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	yuki.on('credentials-updated', () => {
		fs.writeFileSync('./Tempest.json', JSON.stringify(yuki.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./Tempest.json') && yuki.loadAuthInfo('./Tempest.json')
	yuki.on('connecting', () => {
		start('2', 'Connecting...')
	})
	yuki.on('open', () => {
		success('2', 'Connected')
	})
	await yuki.connect({timeoutMs: 30*1000})
	
		yuki.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
				teks = `[ 𝙺𝚎𝚍𝚊𝚝𝚊𝚗𝚐𝚊𝚗 𝙼𝚎𝚖𝚋𝚎𝚛 𝙱𝚊𝚛𝚞 𝚗𝚒𝚑 _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\n𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙱𝚎𝚛𝚐𝚊𝚋𝚞𝚗𝚐 𝚈𝚊 𝚔𝚊𝚔\n *_____________*\n𝙼𝚘𝚐𝚊 𝙰𝚓𝚊 𝙱𝚎𝚝𝚊𝚑 𝚈𝚊 𝙺𝚊𝚔 𝙾𝚢𝚊 𝙸𝚗𝚝𝚛𝚘 𝙳𝚕𝚞 𝚢𝚊 !`
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://e.top4top.io/p_1837nveac0.jpg'
				}
				teks = `𝙷𝚎𝚢𝚢𝚢 @${num.split('@')[0]} 𝙺𝚎𝚗𝚊𝚙𝚊 𝙺𝚎𝚕𝚞𝚊𝚛 𝚜𝚒𝚑 𝙰𝚑 𝙼𝚊𝚕𝚎𝚜𝚒𝚗 𝚈𝚘𝚍𝚊𝚑 𝙰𝚠𝚊𝚜 𝙰𝚓𝚊 𝚋𝚊𝚕𝚒𝚔 𝚕𝚊𝚐𝚒 `
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
		yuki.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
            const iki = '@s.whatsapp.net'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			const pushname2 = yuki.contacts[botFebb] != undefined ? yuki.contacts[botFebb].vname || yuki.contacts[botFebb].notify : undefined
			const insum = from.endsWith('@g.us')
			const duingz = insum ? mek.participant : mek.key.remoteJid
			pushname = yuki.contacts[duingz] != undefined ? yuki.contacts[duingz].vname || yuki.contacts[duingz].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const timo = moment.tz('Asia/Jakarta').add(13, 'days').calendar();
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const taukah = mek.message.conversation
					
					mess = {
				wait: '⌬ Waiting...',
				asik: '⌬ Waiting...',
				levelon: '*☑ Leveling Aktif*',
				leveloff: '☒ Leveling Tidak Aktif',
				levelnoton: '*☒ leveling not aktif*',
				levelnol: '*LEVEL KAMU MASIH 0 BELUM BISA MEMBUKA FITUR HARAP HUBUNGI OWNER*',
				success: '⌨ SUCCES',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: '⌦ Link yang anda kirim tidak valid!'
				},
				only: {
					group: '☒ Perintah ini hanya bisa di gunakan dalam group!',
					public: '☒ Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup Tempest, ketik .botgroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik *.iklan*! ',
					premium: '☒ PERINTAH INI KHUSUS USER *PREMIUM*',
					benned: '☒ TERBANNED',
					ownerG: '☒ Perintah ini hanya bisa di gunakan oleh owner group!',
					ownerB: '☒ Perintah ini hanya bisa di gunakan oleh owner bot!',
					userB: '*☒ Nomor kamu belum terverifikasi dalam database bot*\n*Silahkan Ketik @verify untuk memverifikasi nomor anda...*',
					admin: '☒ Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: '☒ Perintah ini hanya bisa di gunakan ketika bot menjadi admin!',
				}
			}
			const koin = ['http://bit.ly/Koin1','http://bit.ly/Koin5','https://i.ibb.co/q7kdBjm/be27e6f849da.jpg','https://i.ibb.co/BCxNPD5/a42ef753a321.jpg']
			const botNumber = yuki.user.jid
			const q = args.join(' ')
			const tescuk = ["0@s.whatsapp.net"]
			const tescuy = '6282217590187@s.whatsapp.net'
			const isGroup = from.endsWith('@g.us')
			const totalchat = await yuki.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await yuki.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isRegistered = checkRegisteredUser(sender)
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const ispublic = isGroup ? public.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isAntilink = isGroup ? anlink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isUser = user.includes(sender)
			const isPrem = prem.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const levelRole = getLevelingLevel(sender, _level)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole <= 100) {
            role = 'Exterminator'
        }
			const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const errorurl2 = 'https://i.ibb.co/FYPfkp5/20210109-234615.jpg'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				yuki.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				yuki.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? yuki.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : yuki.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    yuki.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			yuki.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const sendPtt = (teks) => {
		    yuki.sendMessage(from, audio, mp3, {quoted:mek})
		    }
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 200
                const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${pushname2}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
/*
]=====> CEK LIMIT <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return yuki.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            yuki.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        yuki.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
/*
]=====> LIMITED <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    yuki.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            yuki.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
        
        if (isGroup) {
            const currentdolar = getDolaranLevel(sender)
            const checkId = getDolaranId(sender)
            try {
                if (currentdolar === undefined && checkId === undefined) addDolaranId(sender)
                const amountXp = Math.floor(Math.random() * 5) + 1
                const requiredXp = 20 * (Math.pow(2, currentdolar) - 1)
                const getLevel = getDolaranLevel(sender)
                addDolaranXp(sender, amountXp)
                if (requiredXp <= getDolarExp(sender)) {
                    addDolaranLevel(sender, 1)
                    await reply(`Selamat ${pushname2} Kamu Mendapatkan Dolar *$${getDolarExp(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
           const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
/*
]=====> ATM <=====[
*/
            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBERHASIL\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBUKAN COMMAND\x1b[1;37m]', time, color(taukah), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBERHASIL\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBUKAN COMMAND\x1b[1;37m]', time, color(taukah), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
case 'help':
case 'menu':
if (isBanned) return reply(mess.only.benned)   
if (!ispublic) return reply(mess.only.public)
if (!isUser) return reply(mess.only.userB)
uptime = process.uptime()
const lvs = 1 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const esp = getLevelingXp(sender)
const ga =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const yas = ga[Math.floor(Math.random() * ga.length)]
const gojar = checkATMuser(sender)
if (!isPremium) return costum(`
╭┤USER INFO│
├ *Name:* *${pushname2}*
├ *Status:* *FREE*
├ *XP:* *${esp}*
├ *Level:* *${lvs}*
├ *Pangkat: ${role}*
├ *Saldo:* *Rp.${gojar}*
╰══───┤TEMPEST├───══╯
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ​
╭══───┤INFO BOT├───══╮ 
├ *TEMPEST BOT*
├ *OWNER : AGAM*
├ *Prefix : 「 ${prefix} 」*
├ *User BOT:* ${user.length}
├ *TANGGAL/JAM*
├ ${date} ~ ${time}
├ *BOT TELAH AKTIF SELAMA*
├ ${kyun(uptime)}
╰══──────────────══╯
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*╭───┤RULES SIMPLE│────╮*
[ *!* ] SPAM = BLOCK
[ *!* ] CALL = BLOCK_
[ *!* ] JEDA 2 DETIK FOR COMMAND
[ *!* ] DON'T SPAM COMMAND BOT
[ *!* ] BUG/EROR KETIK .reportbug [teks]
[ *!* ] KETIK .yuk UNTUK MEMASTIKAN
[ *+* ]BOT ON/OFF
[ *!* ]GUNAKAN BOT DENGAN BIJAK
[ *!* ]AND DON'T SANGEAN
*╰───────────────────╯*

╭┤LIST MENU│
├ *${prefix}update*
├ *${prefix}listmenu*
├ *${prefix}infomenu*
├ *${prefix}mediamenu*
├ *${prefix}funmenu*
├ *${prefix}adminmenu*
├ *${prefix}kerangmenu*
├ *${prefix}nsfwmenu*
├ *${prefix}editormenu*
├ *${prefix}soundmenu*
├ *${prefix}searchmenu*
├ *${prefix}stickermenu*
├ *${prefix}downloadmenu*
├ *${prefix}animemenu*
├ *${prefix}vipmenu*
├ *${prefix}makermenu*
├ *${prefix}ownermenu*
├ *${prefix}othermenu*
╰────────────────────╯

╭┤OTHER│
├ *${prefix}botgroup*
├ *${prefix}mining*
├ *${prefix}farming*
├ *${prefix}rules*
├ *${prefix}snk*
├ *${prefix}tnc*
├ *${prefix}iklan*
├ *${prefix}join [link]*
├ *${prefix}daftarvip*
├ *${prefix}vipcek*
├ *${prefix}readmore*
├ *${prefix}gameshop*
├ *${prefix}limit*
├ *${prefix}level*
├ *${prefix}duit*
├ *${prefix}buylimit*
├ *${prefix}botpay*
├ *${prefix}transfer*
├ *${prefix}bahasalist*
╰────────────────────╯

╭┤BIG THANKS TO│
├ *> TEMPEST TEAM*
├ *> Jesus*
├ *> Bot*
├ *> Apikey*
├ *> Kalian*
├ *> DIRI SENDIRI😙*
├ *> DLL*
╰────────────────────╯`, text, tescuk, cr)
if (!ispublic) return reply(mess.only.public)
					costum( `
╭┤USER INFO│
├ *Name:* *${pushname2}*
├ *Status:* *PREMIUM*
├ *Expired:* *${timu}*
├ *XP:* *${esp}*
├ *Level:* *${lvs}*
├ *Role: ${role}*
├ *Saldo:* *Rp.${gojar}*
╰══───┤TEMPEST├───══╯
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ​
╭══───┤INFO BOT├───══╮ 
├ *TEMPEST BOT*
├ *OWNER : AGAM*
├ *Prefix : 「 ${prefix} 」*
├ *User BOT:* ${user.length}
├ *TANGGAL/JAM*
├ ${date} ~ ${time}
├ *BOT TELAH AKTIF SELAMA*
├ ${kyun(uptime)}
╰══──────────────══╯
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*╭───┤RULES SIMPLE│────╮*
[ *!* ] SPAM = BLOCK
[ *!* ] CALL = BLOCK_
[ *!* ] JEDA 2 DETIK FOR COMMAND
[ *!* ] DON'T SPAM COMMAND BOT
[ *!* ] BUG/EROR KETIK .reportbug [teks]
[ *!* ] KETIK .yuk UNTUK MEMASTIKAN
[ *+* ]BOT ON/OFF
[ *!* ]GUNAKAN BOT DENGAN BIJAK
[ *!* ]AND DON'T SANGEAN
*╰───────────────────╯*

╭┤LIST MENU│
├ *${prefix}update*
├ *${prefix}listmenu*
├ *${prefix}infomenu*
├ *${prefix}mediamenu*
├ *${prefix}funmenu*
├ *${prefix}adminmenu*
├ *${prefix}kerangmenu*
├ *${prefix}nsfwmenu*
├ *${prefix}editormenu*
├ *${prefix}soundmenu*
├ *${prefix}searchmenu*
├ *${prefix}stickermenu*
├ *${prefix}downloadmenu*
├ *${prefix}animemenu*
├ *${prefix}vipmenu*
├ *${prefix}makermenu*
├ *${prefix}ownermenu*
├ *${prefix}othermenu*
╰────────────────────╯

╭┤OTHER│
├ *${prefix}botgroup*
├ *${prefix}mining*
├ *${prefix}farming*
├ *${prefix}rules*
├ *${prefix}snk*
├ *${prefix}tnc*
├ *${prefix}iklan*
├ *${prefix}join [link]*
├ *${prefix}daftarvip*
├ *${prefix}vipcek*
├ *${prefix}readmore*
├ *${prefix}gameshop*
├ *${prefix}limit*
├ *${prefix}level*
├ *${prefix}duit*
├ *${prefix}buylimit*
├ *${prefix}botpay*
├ *${prefix}transfer*
├ *${prefix}bahasalist*
╰────────────────────╯

╭┤BIG THANKS TO│
├ *> TEMPEST TEAM*
├ *> Jesus*
├ *> Bot*
├ *> Apikey*
├ *> Kalian*
├ *> DIRI SENDIRI😙*
├ *> DLL*
╰────────────────────╯`
, text, tescuk, cr)
break
case 'pc':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
costum(`
╭┤PC MENU│
├ *${prefix}sticker*
├ *${prefix}stickergif*
├ *${prefix}stickwm [text|author]*
├ *${prefix}nulis*
├ *${prefix}toimg*
╰────────────────────╯`, text, tescuk, `*PRIBADI MENU*`)
break
case 'listmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(listmenu(prefix), text, tescuk, cr)
break
case 'update':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(upmenu(prefix), text, tescuk, cr)
break
case 'infomenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(infomenu(prefix), text, tescuk, cr)
break
case 'editormenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(editormenu(prefix), text, tescuk, cr)
break
case 'soundmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(soundmenu(prefix), text, tescuk, cr)
break
case 'searchmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(searchmenu(prefix), text, tescuk, cr)
break
case 'stickermenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(stickermenu(prefix), text, tescuk, cr)
break
case 'downloadmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(downloadmenu(prefix), text, tescuk, cr)
break
case 'mediamenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(mediamenu(prefix), text, tescuk, cr)
break
case 'funmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(funmenu(prefix), text, tescuk, cr)
break
case 'kerangmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(kerangmenu(prefix), text, tescuk, cr)
break
case 'nsfwmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(nsfwmenu(prefix), text, tescuk, cr)
break
case 'makermenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(makermenu(prefix), text, tescuk, cr)
break
case 'othermenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(othermenu(prefix), text, tescuk, cr)
break
case 'animemenu':
if (!isAnime) return reply('[X]Harus Mengaktifkan Mode Anime')
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(animemenu(prefix), text, tescuk, cr)
break
case 'vipmenu':
if (!isPremium) return reply(mess.only.premium)
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
costum(vipmenu(prefix), text, tescuk, cr)
break
case 'adminmenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
if (!isGroupAdmins) return reply(mess.only.admin)
yuki.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
yuki.sendMessage(from, 'hai admin😃', text, { quoted: mek })
break
case 'ownermenu':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!ispublic) return reply(mess.only.public)
if (!isOwner) return reply(mess.only.ownerB)    
yuki.sendMessage(from, ownermenu(prefix), text, { quoted: mek })
yuki.sendMessage(from, 'hai sayang><', text, { quoted: mek })
break
case 'snk':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
costum( snk(), text, tescuk, cr)
break
case 'bahasalist':
yuki.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.only.benned)    
costum( bahasa(), text, tescuk, cr)
break
case 'botgroup':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
costum( '*Tempest GROUP*\n\n*BOTWA ABAD 1*\nhttps://chat.whatsapp.com/HN6Hgv8oRegG1GOTUE5HjU\n\n*BOTWA ABAD 2*\nhttps://chat.whatsapp.com/HN6Hgv8oRegG1GOTUE5HjU', text, tescuk, cr)
break
case 'rules':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
costum( rules(prefix), text, tescuk, cr)
break
case 'modapk':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
yuki.sendMessage(from, modapk(), text, tescuk, cr)
break
case 'listsay':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)    
yuki.sendMessage(from, listsay(), text, { quoted: mek })
break
case 'daftarvip':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
yuki.sendMessage(from, daftarvip(prefix) , text, tescuk, cr)
case 'gameshop':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					const lps = getLevelingLevel(sender)
                const eap = getLevelingXp(sender)
                const lolar = checkATMuser(sender)
					costum(`
╭─┤  𝑰𝒏𝒇𝒐 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂
├   XP: ${eap}
├   Level: ${lps}
├   Saldo : Rp.${lolar}
├   Nama: ${pushname2}
└─┤ *${user.length} player*

────「 *𝐋𝐈𝐌𝐈𝐓 𝐒𝐓𝐎𝐑𝐄*」───
─❖ 1 LIMIT : Rp.5000
🛒: ${prefix}buylimit 1
─❖ 5 LIMIT : Rp.25000
🛒: ${prefix}buylimit 5
─❖ 10 LIMIT : Rp.50000
🛒: ${prefix}buylimit 10
─❖ 25 LIMIT : Rp.125000
🛒: ${prefix}buylimit 25
─❖ 50 LIMIT : Rp.250000
🛒: ${prefix}buylimit 50
─❖ 100 LIMIT : Rp.500000
🛒: ${prefix}buylimit 100
  ──────────────────
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
*_G A M E S H O P_*
├ ${prefix}FREE Masuk Grup Durasi 5 hari Level 30
├ ${prefix}FREE Masuk Grup Durasi 10 hari Level 35
├ ${prefix}FREE Masuk Grup Durasi 15 hari Level 40
├ ${prefix}FREE Masuk Grup Durasi 20 hari Level 45
├ ${prefix}FREE Masuk Grup Durasi 15 hari Level 50
├ ${prefix}FREE Masuk Grup Durasi 1 Bulan  Level 55
├ ${prefix}buypremium level 60
╰ ${prefix}premium+grup 1 bulan level 100

Note: 
    ~ premium hanya berlaku 1bulan
    ~ cara naikin level gimana kak? cukup ikut dalam obrolan dan bisa juga ketik ${prefix}farming

ketik ${prefix}rules untuk syarat dan ketentuan penggunaan bot`, text, tescuk, `*GAME SHOP YUKINIKO BOT*`)
break
case 'resetlimit':
if (!isOwner) return reply(ind.ownerb())
var obj = []
fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
await reply(`LIMIT HAS BEEN RESET`)
break
case 'limit':
if (!isUser) return reply(mess.only.userB)
if (isBanned) return reply(mess.only.benned)    
if (!ispublic) return reply(mess.only.public)
checkLimit(sender)
break
case 'buylimit':
payout = body.slice(10)
const koinPerlimit = 5000
const total = koinPerlimit * payout
if ( checkATMuser(sender) >= total ) {
confirmATM(sender, total)
bayarLimit(sender, payout)
const totalpayout = checkATMuser(sender) - total
await reply(`────[ TEMPEST]────\n───[LIMIT STORE]───\n\n⌲ Pengirim : Owner\n⌲ Penerima : ${pushname2}\n\n⎚ Harga Limit : ${koinPerlimit}\n⎚ Limit Dibeli : ${payout}\n⎚ Saldo Botpay : ${checkATMuser(sender)}\n⎚ Kembalian : ${totalpayout}\n\n${createSerial(15)}\n║▌┃█║▌┃ █║▌┃█┃║▌║\n║▌┃█║▌┃ █║▌┃█┃║▌║`)
} else {reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)}
break
case 'botpay':
const kantong = checkATMuser(sender)
reply(ind.uangkau(pushname2, sender, kantong))
break
				case 'transfer':
				if (isBanned) return reply(mess.only.benned)    
                if (!ispublic) return reply(mess.only.public)
                if (!isUser) return reply(mess.only.userB)
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6282217590187@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
                case 'mutual':
                if (isBanned) return reply(mess.only.benned)    
                if (!ispublic) return reply(mess.only.public)
                if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(`Limit anda telah habis...\nSilahkan beli vip atau ketik .gameshop`)
                hasil = user[Math.floor(Math.random() * (user.length))]
                husul = hasil.replace('@s.whatsapp.net','')
                setTimeout( () => {
					yuki.sendMessage(from, `*Patner ditemukan[√]*\nwa.me/${husul}`, text)
					}, 10000) // 1000 = 10s,
					setTimeout( () => {
					yuki.sendMessage(from, 'Menemukan patner...', text) // ur cods
					}, 1000) // 1000 = 10s,
					setTimeout( () => {
					yuki.sendMessage(from, 'Sedang mencari patner...', text) // ur cods
					}, 0) // 1000 = 10s,
					await limitAdd(sender)
            break
            case 'next':
            if (isBanned) return reply(mess.only.benned)    
            if (!ispublic) return reply(mess.only.public)
            if (!isUser) return reply(mess.only.userB)
            if (isLimit(sender)) return reply(`Limit anda telah habis...\nSilahkan beli vip atau ketik .gameshop`)
            hasil = user[Math.floor(Math.random() * (user.length))]
            husol = hasil.replace('@s.whatsapp.net','')
                setTimeout( () => {
					yuki.sendMessage(from, `*Patner ditemukan[√]*\nwa.me/${husol}`, text)
					}, 10000) // 1000 = 10s,
					setTimeout( () => {
					yuki.sendMessage(from, 'Menemukan patner...', text) // ur cods
					}, 1000) // 1000 = 10s,
					setTimeout( () => {
					yuki.sendMessage(from, 'Sedang mencari patner...', text) // ur cods
					}, 0) // 1000 = 10s,
					await limitAdd(sender)
            break
            case 'lbsaldo':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboarduang = '══───┤LB SALDO├───══\n'
                let nump = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nump++
                        leaderboarduang += `*[${nump}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n ├ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'leaderboard':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					const lvl = getLevelingLevel(sender)
                const exp = getLevelingXp(sender)
					random = Math.floor(Math.random() * 150) + 1
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '══──┤LEADERBOARD├──══\n'
					for (let mem of groupMembers) {
						teks += `*├* @${mem.jid.split('@')[0]}\n*├* XP:${exp}\n*├* User Level : ${lvl}\n*├* Random:${random}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                if (!isOwner) costum(`╭┤LEVEL│\n├ *Name: ${pushname2}*\n*├ User XP :  ${userXp}*\n├ *Level : ${userLevel}*\n╰══──┤TEMPEST├──══╯`, text, tescuk,`*Level Mu ${userLevel}*`)
              if (isOwner)  costum (`╭┤LEVEL│\n├ *Name: ${pushname2}*\n*├ User XP :  9999999*\n├ *Level : 9999*\n╰══──┤TEMPEST├──══╯`, text, tescuk,`*Level Mu 9999*`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
                    break
                    case 'duit':
                const dojar = getDolarExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `╭┤DUIT│\n├ *Nama : ${pushname2}*\n├ Rp.${dojar}\n╰══──┤TEMPEST├──══╯`, text, tescuk,`Duit Mu ${dojar}`)
                if (isOwner) return costum(`╭┤DUIT│\n├ *Nama : ${pushname2}*\n├ Rp.99999\n╰══──┤TEMPEST├──══╯`, text, tescuk,`Duit Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Pilih on atau off')
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Pilih on atau off udin!!*')
                }
            break
					case 'kodenuklir':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					if (isLimit(sender)) return
					await limitAdd(sender)
					costum( kodenuklir(), text, tescuk, cr)
					break
					case 'kodenuklir2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					if (isLimit(sender)) return
					await limitAdd(sender)
					costum( kodenuklir2(), text, tescuk, cr)
            default:
                     if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`goblok`)) {
                  reply(`SANSS ANJG`)
                  }
   				if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}listmenu!*`)
                  }
                  if (budy == 'Cekprefix') {
                  reply(`*TEMPEST BOT USING PREFIX [ ${prefix} ]*`)
                  }
                  
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix} `)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} 
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
