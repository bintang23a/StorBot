const fs = require('fs')

global.namabot = "Bot Store Star"
global.namaowner = "Star"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6281917481412','']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `𝑷𝒂𝒚𝒎𝒆𝒏𝒕 𝑭𝒆𝒓𝒅𝒊 𝑺𝒕𝒐𝒓𝒆

𝑬-𝑾𝑨𝑳𝑳𝑬𝑻

𝑫𝑨𝑵𝑨 : 08558791299
𝑮𝑶𝑷𝑨𝒀: 08558791299
Shope : 08558791299

𝑩𝑨𝑵𝑲
𝑺𝒆𝒂𝑩𝒂𝒏𝒌 : 
𝑩𝑪𝑨 :  


" 𝙎𝙚𝙢𝙪𝙖 𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝘼𝙩𝙖𝙨 𝙉𝙖𝙢𝙖 𝙁𝙀𝙍𝘿𝙄 "
𝑺𝒆𝒕𝒆𝒍𝒂𝒉 𝒎𝒆𝒍𝒂𝒌𝒖𝒌𝒂𝒏 𝑻𝒓𝒂𝒏𝒔𝒇𝒆𝒓, 𝒉𝒂𝒓𝒂𝒑 𝒎𝒆𝒎𝒃𝒆𝒓𝒊𝒌𝒂𝒏 𝑺𝑺 𝑩𝒖𝒌𝒕𝒊 𝑻𝒓𝒂𝒏𝒔𝒇𝒆𝒓.
𝑲𝒉𝒖𝒔𝒖𝒔 𝑸𝒓𝒊𝒔 𝒃𝒆𝒓𝒊𝒌𝒂𝒏 𝒃𝒖𝒌𝒕𝒊 𝑻𝒓𝒂𝒏𝒔𝒇𝒆𝒓 + 𝒏𝒂𝒎𝒂 𝑷𝒆𝒏𝒈𝒊𝒓𝒊𝒎
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}