/**
========================================================
      █▄▀ █ █▄ █ ▄▀     █▄ ▄█ █▀▄
      █ █ █ █ ▀█ ▀▄█ ▀▀ █ ▀ █ █▄▀
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : KING-MD                                                                    
 * @author : naveeddogar <https://github.com/naveeddogar>   
 * @description : KING-MD ,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/

const _0xf40a66=_0x1038;(function(_0x2a6136,_0x1747fc){const _0x1d56d4=_0x1038,_0x355cf8=_0x2a6136();while(!![]){try{const _0xaa8e60=-parseInt(_0x1d56d4(0x1b3))/0x1*(-parseInt(_0x1d56d4(0x17f))/0x2)+parseInt(_0x1d56d4(0x20d))/0x3+parseInt(_0x1d56d4(0x22d))/0x4*(parseInt(_0x1d56d4(0x232))/0x5)+parseInt(_0x1d56d4(0x238))/0x6+parseInt(_0x1d56d4(0x1b8))/0x7+parseInt(_0x1d56d4(0x207))/0x8*(-parseInt(_0x1d56d4(0x178))/0x9)+-parseInt(_0x1d56d4(0x23c))/0xa;if(_0xaa8e60===_0x1747fc)break;else _0x355cf8['push'](_0x355cf8['shift']());}catch(_0x579347){_0x355cf8['push'](_0x355cf8['shift']());}}}(_0x4d23,0x2c171));const {tlang,ringtone,cmd,fetchJson,sleep,botpic,getBuffer,pinterest,prefix,Config}=require('../lib'),{mediafire}=require(_0xf40a66(0x1bd)),{GDriveDl}=require(_0xf40a66(0x182)),fbInfoVideo=require('fb-info-video'),googleTTS=require(_0xf40a66(0x20f)),ytdl=require('ytdl-secktor'),cheerio=require(_0xf40a66(0x1ae)),fs=require('fs-extra'),axios=require(_0xf40a66(0x1c1));var videotime=0xe10,dlsize=0x64;cmd({'pattern':_0xf40a66(0x1dc),'desc':'Downloads\x20telegram\x20stickers.','category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x1cd)},async(_0x28de9c,_0xa2b94b,_0x525b1e)=>{const _0x50a1ea=_0xf40a66;if(!_0x525b1e)return await _0xa2b94b[_0x50a1ea(0x16b)]('_Enter\x20a\x20tg\x20sticker\x20url_\x0aEg:\x20.tgs\x20https://t.me/addstickers/Oldboyfinal\x0aKeep\x20in\x20mind\x20that\x20there\x20is\x20a\x20chance\x20of\x20ban\x20if\x20used\x20frequently');if(!_0x525b1e[_0x50a1ea(0x164)](_0x50a1ea(0x1e7)))return await _0xa2b94b[_0x50a1ea(0x16b)](_0x50a1ea(0x1b0));let _0x29a999=_0x525b1e[_0x50a1ea(0x225)]('|')[0x0],_0x53f3b1=_0x29a999[_0x50a1ea(0x225)](_0x50a1ea(0x177))[0x1],{result:_0x177302}=await fetchJson(_0x50a1ea(0x191)+encodeURIComponent(_0x53f3b1)+'\x20'),_0x449c9c=_0x525b1e['split']('|')[0x1]||'',_0x130045=(_0x50a1ea(0x1da)+_0x177302[_0x50a1ea(0x1f2)][_0x50a1ea(0x211)]+_0x50a1ea(0x1c8)+_0x177302[_0x50a1ea(0x1f2)][_0x50a1ea(0x211)]*1.5+'\x20seconds\x0aKeep\x20in\x20mind\x20that\x20there\x20is\x20a\x20chance\x20of\x20a\x20ban\x20if\x20used\x20frequently')[_0x50a1ea(0x1f0)]();if(_0x177302['is_animated'])return await _0xa2b94b['reply'](_0x50a1ea(0x1ff));else{if(_0x449c9c['startsWith']('info'))return await _0xa2b94b[_0x50a1ea(0x16b)](_0x130045);}let _0x531e34=parseInt(_0x449c9c['split'](',')[0x0])||0xa,_0x955329=parseInt(_0x449c9c[_0x50a1ea(0x225)](',')[0x1])||0x0,_0x775cbc=_0x449c9c[_0x50a1ea(0x225)](';')[0x1]||_0x50a1ea(0x202),_0x140c22=!![];_0x775cbc[_0x50a1ea(0x164)](_0x50a1ea(0x226))&&(_0x140c22=![],_0x775cbc=_0x50a1ea(0x1c2));_0x531e34>_0x177302['stickers'][_0x50a1ea(0x211)]&&(_0x531e34=_0x177302[_0x50a1ea(0x1f2)][_0x50a1ea(0x211)]);_0x955329>_0x177302[_0x50a1ea(0x1f2)]['length']&&(_0x955329=_0x177302[_0x50a1ea(0x1f2)][_0x50a1ea(0x211)]-0x5);if(_0x955329>_0x531e34){let _0x4b7bae=_0x531e34;_0x531e34=_0x955329,_0x955329=_0x4b7bae;}await _0xa2b94b[_0x50a1ea(0x16b)](_0x130045+'\x0a\x0a_Downloading\x20as\x20'+_0x775cbc+'\x20From\x20index\x20*'+_0x955329+_0x50a1ea(0x16d)+_0x531e34+_0x50a1ea(0x220)+_0x29a999+_0x50a1ea(0x1b1));for(_0x955329;_0x955329<_0x531e34;_0x955329++){let _0x1c252f=await fetchJson(_0x50a1ea(0x20a)+_0x177302[_0x50a1ea(0x1f2)][_0x955329][_0x50a1ea(0x205)]),_0x56734e='https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/'+_0x1c252f[_0x50a1ea(0x19c)][_0x50a1ea(0x223)];if(_0x140c22){let _0x17b563=await getBuffer(_0x56734e);await _0xa2b94b[_0x50a1ea(0x16b)](_0x17b563,{'packname':Config[_0x50a1ea(0x1a5)],'author':_0x50a1ea(0x1c6)},_0x50a1ea(0x1fe));}else await _0x28de9c['sendMessage'](_0xa2b94b[_0x50a1ea(0x198)],{'image':{'url':_0x56734e},'caption':'*_Telegram\x20Sticker\x20At\x20Index\x20'+(_0x955329+0x1)+_0x50a1ea(0x1ad)});}});async function tiktokdl(_0x18aaa3){const _0x5c94cf=_0xf40a66,_0x49f06b=await axios[_0x5c94cf(0x16c)](_0x5c94cf(0x20c)),_0x42ef43=cheerio[_0x5c94cf(0x19f)](_0x49f06b[_0x5c94cf(0x1cc)]),_0x4fa966=_0x42ef43(_0x5c94cf(0x1b6))['attr'](_0x5c94cf(0x1d9)),_0x2f9e2c={'url':_0x18aaa3,'_token':_0x4fa966},{data:_0x21512e}=await axios[_0x5c94cf(0x1d5)](_0x5c94cf(0x1d3),{'method':_0x5c94cf(0x1db),'data':new URLSearchParams(Object[_0x5c94cf(0x201)](_0x2f9e2c)),'headers':{'content-type':_0x5c94cf(0x1ca),'user-agent':_0x5c94cf(0x233)}});var _0x2c1e18=cheerio[_0x5c94cf(0x19f)](_0x21512e[_0x5c94cf(0x1a2)]);if(_0x21512e[_0x5c94cf(0x1ef)])return{'status':!![],'thumbnail':_0x2c1e18(_0x5c94cf(0x1a1))[_0x5c94cf(0x181)]('src'),'video':_0x2c1e18(_0x5c94cf(0x1be))[_0x5c94cf(0x181)](_0x5c94cf(0x1a8)),'audio':_0x2c1e18(_0x5c94cf(0x21c))[_0x5c94cf(0x181)](_0x5c94cf(0x1a8))};else return{'status':![]};}function _0x1038(_0x415671,_0x140b66){const _0x4d2304=_0x4d23();return _0x1038=function(_0x10385a,_0xb17e29){_0x10385a=_0x10385a-0x164;let _0x257834=_0x4d2304[_0x10385a];return _0x257834;},_0x1038(_0x415671,_0x140b66);}function _0x4d23(){const _0x26e629=['photo','mime','toString','❌\x20I\x20can\x27t\x20download\x20that\x20long\x20video!','aptoide-scraper','<Dowanload\x20Tiktok\x20Sounds>','Downloads\x20audio\x20from\x20youtube.','270760yaWMJa','getyt','4173952CbWaym','Example:\x20','ytmp3','15byDJQi','Mozilla/5.0\x20(Windows\x20NT\x206.3;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/100.0.4896.88\x20Safari/537.36','❌\x20Give\x20youtube\x20link!','stream','\x0a*Url\x20:\x20','video/mp4','1350540LtrLJE','<yt\x20video\x20url>','ringtone','mfire','5613310dMVrew','includes','<ytdoc\x20video\x20url>','*App\x20Name\x20:*\x20','./ytsong.mp3','<url\x20of\x20mediafire>','timestamp','\x0aAuthor\x20:\x20','reply','get','*\x20to\x20*','random','\x20\x20*Here\x27s\x20Your\x20Video*','caption','video','audio/mp4','\x20\x20*Here\x27s\x20Your\x20File*\x0a','Downloads\x20ringtone.','sendMessage','itag','/addstickers/','162KVmiEz','downloader','<yt\x20search\x20text>','\x0aUploaded\x20:\x20','211117duABrL','Error\x20While\x20Downloading\x20Your\x20Video','❌\x20File\x20size\x20bigger\x20than\x20150mb.','4274NehZdk','Give\x20link\x20','attr','../lib/scraper.js','videoDetails','text\x20to\x20speech.','File\x20deleted\x20successfully','Downloads\x20video\x20from\x20yt.','\x0a*Last\x20Up\x20\x20\x20\x20\x20\x20\x20:*\x20','\x20*Mᴇᴅɪᴀғɪʀᴇ\x20Dᴏᴡɴʟᴏᴀᴅᴇʀ*\x0a*Nᴀᴍᴇ*\x20:\x20','package','ytmp3\x20url','\x0a*Sɪᴢᴇ*\x20:','❌\x20URL\x20is\x20empty!\x20\x0aSend\x20','sound','audio/mpeg','test','ytd','https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=','File\x20downloaded\x20successfully','audio','<Hii,this\x20is\x20Slasher>','1389897APKDJS','log','title','chat','finish','unlink','shift','result','ytv','floor','load','tts','img','html','\x0a┃│◦\x20*Viewers:*\x20','quoted','packname','apk','Downloads\x20video\x20from\x20youtube.','href','https://translate.google.com','*Uhh\x20Please,\x20Provide\x20me\x20tiktok\x20Video\x20Url*\x0a*_Ex\x20.tiktok\x20https://www.tiktok.com/@itxwasi/video/7150544062221749531_*','.mp4','Error\x20deleting\x20file:','\x20Downloaded_*','cheerio','readFileSync','_Uhh\x20Please\x20Enter\x20a\x20Valid\x20tg\x20sticker\x20url_\x0aEg:\x20.tgs\x20https://t.me/addstickers/Oldboyfinal','\x20|\x20\x2010\x20,\x20\x2020\x20;\x20photo','find','1CZfiCZ','all','audioBitrate','#download-form\x20>\x20input[type=hidden]:nth-child(2)','secktor-pack','464450fWnrBq','.mp3','mediafire.com','\x0a┃│◦\x20*Duration:*\x20','url','../lib/mediafire.js','div.download-links\x20>\x20div:nth-child(1)\x20>\x20a','<faded-Alan\x20Walker>','\x0a\x0a\x20','axios','Photo','```❌\x20Give\x20Me\x20A\x20Number\x20From\x201\x20to\x20160```','\x0aViews\x20:\x20','❌\x20Video\x20file\x20too\x20big!','Secktor-Md','*YouTube\x20Search*\x0a\x20Result\x20From\x20','\x0a*Estimated\x20complete\x20in:*\x20','then','application/x-www-form-urlencoded;\x20charset=UTF-8','pushName','data','<add\x20sticker\x20url.>','getInfo','❌\x20File\x20size\x20bigger\x20than\x20200mb.','name','videos','ttdl','https://tikdown.org/getAjax?','<add\x20tiktok\x20url.>','request','1014UUWswG','.apk','Downloads\x20audio\x20by\x20yt\x20link\x20as\x20document.','value','Total\x20stickers:\x20','post','tgs','<ringtone\x20name>','*Uhh\x20Please,\x20Give\x20me\x20Valid\x20Tiktok\x20Video\x20Url!*','thumbnail','\x0aUrl\x20:\x20','dllink','ttsCitelVoid.m4a','*_Ohh\x20PLease,\x20Give\x20Me\x20Song\x20Name_*','ytsearch','text','\x0a\x0a\x0aReply\x201\x20To\x20Video\x20\x0aReply\x202\x20To\x20Audio\x0a*𝐏𝐎𝐖𝐄𝐑-𝐌𝐃*','addstickers','\x0a*Mɪᴍᴇ*\x20:\x20','views','./ytsong.mp4','yts\x20WhatsApp\x20Bot\x20by\x20•𝐏𝐎𝐖𝐄𝐑-𝐌𝐃•','pipe','push','createWriteStream','status','trim','yts','stickers','sound\x205*','http','Gives\x20descriptive\x20info\x20of\x20query\x20from\x20youtube..','Url\x20:','NaN','unlinkSync','tiktok','catch','ytvideo','mediafire','33215aEaqLO','sticker','Animated\x20stickers\x20are\x20not\x20supported','*Give\x20A\x20Number\x20Example:\x20','entries','Sticker','Downloads\x20Tiktok\x20Videos\x20Via\x20Url.','Use\x20','file_id','nama','47784lllTif','708PUYfdf','ytvid','https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=','*Apk\x20not\x20Found,\x20to-wasi-tech*','https://tikdown.org/id','1058373fwNJqB','send','google-tts-api','error','length','lengthSeconds','ytmp4','size','\x09\x20*---Yt\x20Song\x20Searched\x20Data---*\x20\x20\x20\x0a\x0aTitle\x20:\x20','statSync','greet','*Title\x20:\x20','Example\x20:\x20','https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound','replace','div.download-links\x20>\x20div:nth-child(2)\x20>\x20a','❌Please\x20provide\x20me\x20a\x20url','ago','author','*._\x0aIf\x20you\x20wants\x20more\x20to\x20download\x20then\x20use\x20Like\x20\x0a\x0a\x20.tgs\x20','link','540vpKxFa','file_path','startsWith','split'];_0x4d23=function(){return _0x26e629;};return _0x4d23();};cmd({'pattern':_0xf40a66(0x1f9),'alias':['tt',_0xf40a66(0x1d2)],'desc':_0xf40a66(0x203),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x1d4)},async(_0x3e55a1,_0x395d03,_0x8beb53)=>{const _0x1aa371=_0xf40a66;if(!_0x8beb53)return await _0x395d03[_0x1aa371(0x16b)](_0x1aa371(0x1aa));let _0x1fa988=_0x8beb53?_0x8beb53[_0x1aa371(0x225)]('\x20')[0x0]:'';if(!/tiktok/[_0x1aa371(0x18f)](_0x1fa988))return await _0x395d03[_0x1aa371(0x20e)](_0x1aa371(0x1de));const {status:_0x1b6ec3,thumbnail:_0x5b9ecb,video:_0x4f1cc6,audio:_0x4c280a}=await tiktokdl(_0x1fa988);if(_0x1b6ec3)return await _0x3e55a1[_0x1aa371(0x175)](_0x395d03[_0x1aa371(0x198)],{'video':{'url':_0x4f1cc6},'caption':Config['caption']},{'quoted':_0x395d03});else return await _0x395d03[_0x1aa371(0x20e)](_0x1aa371(0x17d));}),cmd({'pattern':_0xf40a66(0x1a0),'desc':_0xf40a66(0x184),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x194)},async(_0x81d2ab,_0x527ce0,_0x38256f)=>{const _0x3cd59=_0xf40a66;if(!_0x38256f&&!_0x527ce0[_0x3cd59(0x1a4)])return _0x527ce0['reply']('*Please\x20give\x20me\x20Text*\x0a\x20*_Example\x20:\x20.tts\x20Hi,I\x20am\x20Slasher-Official._*');!_0x38256f&&(_0x38256f=_0x527ce0[_0x3cd59(0x1a4)][_0x3cd59(0x1e5)]);let _0x5902fa=_0x38256f;const _0x1798fe=googleTTS['getAudioUrl'](_0x5902fa,{'lang':'en','slow':![],'host':_0x3cd59(0x1a9)});return _0x81d2ab[_0x3cd59(0x175)](_0x527ce0[_0x3cd59(0x198)],{'audio':{'url':_0x1798fe},'mimetype':_0x3cd59(0x18e),'fileName':_0x3cd59(0x1e2)},{'quoted':_0x527ce0});}),cmd({'pattern':_0xf40a66(0x171),'desc':_0xf40a66(0x186),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x1bf)},async(_0x20502b,_0x492391,_0x762cfd)=>{const _0x12d48a=_0xf40a66;if(!_0x762cfd)return _0x492391[_0x12d48a(0x16b)]('Example\x20:\x20'+prefix+'audio\x20Back\x20in\x20black');let _0x146ca9=require(_0x12d48a(0x1b7)),_0x4fa0a4=await _0x146ca9(_0x762cfd);const _0x2160cb=_0x162dbe=>{const _0x4f7791=_0x12d48a;return''+Math['floor'](Math[_0x4f7791(0x16e)]()*0x2710)+_0x162dbe;};let _0x5dd8d1=_0x4fa0a4[_0x12d48a(0x1d1)][0x0]['url'],_0x1a83b1=await ytdl['getInfo'](_0x5dd8d1);if(_0x1a83b1[_0x12d48a(0x183)][_0x12d48a(0x212)]>=videotime)return _0x492391['reply'](_0x12d48a(0x1c5));let _0x1807e9=_0x1a83b1[_0x12d48a(0x183)]['title'],_0x432d11=_0x2160cb(_0x12d48a(0x1ab));const _0x4ef027=ytdl(_0x5dd8d1,{'filter':_0x55045f=>_0x55045f[_0x12d48a(0x176)]==0x16||_0x55045f['itag']==0x12})[_0x12d48a(0x1ec)](fs['createWriteStream']('./'+_0x432d11));await new Promise((_0x3c5339,_0x3c7817)=>{const _0x4f5d93=_0x12d48a;_0x4ef027['on'](_0x4f5d93(0x210),_0x3c7817),_0x4ef027['on'](_0x4f5d93(0x199),_0x3c5339);});let _0x333d63=fs[_0x12d48a(0x216)]('./'+_0x432d11);return await _0x20502b[_0x12d48a(0x175)](_0x492391[_0x12d48a(0x198)],{'video':fs[_0x12d48a(0x1af)]('./'+_0x432d11),'jpegThumbnail':log0,'mimetype':_0x12d48a(0x237),'caption':'\x20❒\x20Title\x20:\x20'+_0x1807e9},{'quoted':_0x492391}),fs[_0x12d48a(0x1f8)]('./'+_0x432d11);}),cmd({'pattern':'play','desc':'Sends\x20info\x20about\x20the\x20query(of\x20youtube\x20video/audio).','category':_0xf40a66(0x179),'filename':__filename,'use':'<faded-Alan\x20walker.>'},async(_0x45ddd3,_0x267d1a,_0x5b1eac)=>{const _0x28c25e=_0xf40a66;if(!_0x5b1eac)return _0x267d1a['reply'](_0x28c25e(0x204)+command+'\x20Back\x20in\x20Black');let _0x543cdf=require('secktor-pack'),_0x532bc8=await _0x543cdf(_0x5b1eac),_0x3cac85=_0x532bc8[_0x28c25e(0x1d1)][0x0],_0x585f40={'image':{'url':_0x3cac85[_0x28c25e(0x1df)]},'caption':'\x0a┠┌─⭓『\x20𝐏𝐎𝐖𝐄𝐑-𝐌𝐃\x20』━━━\x0a┃│◦\x20*Youtube\x20Player*\x20\x0a┃│◦\x20*Title:*\x20'+_0x3cac85[_0x28c25e(0x197)]+_0x28c25e(0x1bb)+_0x3cac85[_0x28c25e(0x169)]+_0x28c25e(0x1a3)+_0x3cac85[_0x28c25e(0x1e9)]+'\x0a┃│◦\x20*Uploaded:*\x20'+_0x3cac85[_0x28c25e(0x21e)]+'\x0a┃│◦\x20*Author:*\x20'+_0x3cac85[_0x28c25e(0x21f)][_0x28c25e(0x1d0)]+'\x0a┃└──────────⭓\x0a⦿\x20*Url*\x20:\x20'+_0x3cac85[_0x28c25e(0x1bc)]+'\x0a','footer':tlang()['footer'],'headerType':0x4};return _0x45ddd3['sendMessage'](_0x267d1a['chat'],_0x585f40,{'quoted':_0x267d1a});}),cmd({'pattern':_0xf40a66(0x18d),'desc':_0xf40a66(0x174),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x22b)},async(_0x294e0d,_0x2e3356,_0x54d03b)=>{const _0x1f9db3=_0xf40a66;if(!_0x54d03b)return _0x2e3356[_0x1f9db3(0x20e)](_0x1f9db3(0x200)+prefix+_0x1f9db3(0x1f3));const _0xe10670=parseInt(_0x54d03b);if(_0xe10670['toString']()==_0x1f9db3(0x1f7)||_0xe10670<0x1||_0xe10670>0xa0)return _0x2e3356[_0x1f9db3(0x16b)](_0x1f9db3(0x1c3));let _0x3ad078=_0x1f9db3(0x21a)+_0xe10670['toString']()+_0x1f9db3(0x1b9),_0x511fbb=await getBuffer(_0x3ad078),_0x24174a={'audio':_0x511fbb,'fileName':_0x3ad078[_0x1f9db3(0x228)](),'mimetype':_0x1f9db3(0x172),'ptt':!![]};return _0x294e0d[_0x1f9db3(0x175)](_0x2e3356[_0x1f9db3(0x198)],_0x24174a,{'quoted':_0x2e3356});}),cmd({'pattern':_0xf40a66(0x1a6),'desc':'Downloads\x20apks\x20\x20.','category':'downloader','filename':__filename,'use':'<add\x20sticker\x20url.>'},async(_0x4efa19,_0x4aa0fb,_0x5b7688)=>{const _0x5112c7=_0xf40a66;if(!_0x5b7688)return _0x4aa0fb[_0x5112c7(0x16b)]('*Give\x20me\x20App\x20Name*');const _0x3fe38e=_0x42c3cc=>{const _0x2a5183=_0x5112c7;return''+Math[_0x2a5183(0x19e)](Math['random']()*0x2710)+_0x42c3cc;};let _0xe74eb=_0x3fe38e(_0x5112c7(0x1d7));const _0x32988f='./'+_0xe74eb,{search:_0x1a8393,download:_0x57e091}=require(_0x5112c7(0x22a));let _0x42d642=await _0x1a8393(_0x5b7688),_0x3084f7={};if(_0x42d642[_0x5112c7(0x211)])_0x3084f7=await _0x57e091(_0x42d642[0x0]['id']);else return _0x4aa0fb[_0x5112c7(0x20e)]('*APP\x20not\x20Found,\x20Try\x20Other\x20Name*');const _0x250b44=parseInt(_0x3084f7['size']);if(_0x250b44>0x96)return _0x4aa0fb[_0x5112c7(0x20e)](_0x5112c7(0x1cf));const _0x35ee52=_0x3084f7[_0x5112c7(0x1e1)];let _0x47f1a5=_0x5112c7(0x166)+_0x3084f7['name'];_0x47f1a5+='\x0a*App\x20id\x20\x20\x20\x20\x20\x20\x20\x20:*\x20'+_0x3084f7[_0x5112c7(0x189)],_0x47f1a5+=_0x5112c7(0x187)+_0x3084f7['lastup'],_0x47f1a5+='\x0a*App\x20Size\x20\x20\x20\x20\x20:*\x20'+_0x3084f7[_0x5112c7(0x214)],_0x47f1a5+=_0x5112c7(0x1c0),axios[_0x5112c7(0x16c)](_0x35ee52,{'responseType':_0x5112c7(0x235)})[_0x5112c7(0x1c9)](_0x3a483e=>{const _0x3227cc=_0x5112c7,_0xb8aff2=fs[_0x3227cc(0x1ee)](_0x32988f);return _0x3a483e[_0x3227cc(0x1cc)][_0x3227cc(0x1ec)](_0xb8aff2),new Promise((_0x3daa4d,_0x55ce5c)=>{const _0x16f51a=_0x3227cc;_0xb8aff2['on'](_0x16f51a(0x199),_0x3daa4d),_0xb8aff2['on']('error',_0x55ce5c);});})[_0x5112c7(0x1c9)](()=>{const _0x20b692=_0x5112c7;let _0x509f40={'document':fs[_0x20b692(0x1af)](_0x32988f),'mimetype':'application/vnd.android.package-archive','fileName':_0x3084f7['name']+_0x20b692(0x1d7),'caption':_0x47f1a5};_0x4efa19[_0x20b692(0x175)](_0x4aa0fb['chat'],_0x509f40,{'quoted':_0x4aa0fb}),console[_0x20b692(0x196)](_0x20b692(0x192)),fs['unlink'](_0x32988f,_0x16d546=>{const _0x46da9d=_0x20b692;_0x16d546?console[_0x46da9d(0x210)](_0x46da9d(0x1ac),_0x16d546):console[_0x46da9d(0x196)](_0x46da9d(0x185));});})[_0x5112c7(0x1fa)](_0xb2949c=>{const _0x3392f0=_0x5112c7;return fs[_0x3392f0(0x19a)](_0x32988f),_0x4aa0fb[_0x3392f0(0x16b)](_0x3392f0(0x20b));});}),cmd({'pattern':_0xf40a66(0x23a),'desc':'Downloads\x20ringtone.','category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x1dd)},async(_0xa56f82,_0x57e5ad,_0x3ee3dd)=>{const _0x386f39=_0xf40a66;if(!_0x3ee3dd)return _0x57e5ad[_0x386f39(0x20e)](_0x386f39(0x230)+prefix+'ringtone\x20back\x20in\x20black');const {ringtone:_0xb39c6f}=require('../lib/scraper');let _0x2d2047=await _0xb39c6f(_0x3ee3dd),_0x300b53={'audio':{'url':_0x2d2047[0x0]['audio']},'caption':'*'+_0x2d2047[0x0][_0x386f39(0x197)]+'*','fileName':_0x2d2047[0x0][_0x386f39(0x197)]+_0x386f39(0x1b9),'mimetype':_0x386f39(0x18e)};return _0xa56f82['sendMessage'](_0x57e5ad[_0x386f39(0x198)],_0x300b53,{'quoted':_0x57e5ad});}),cmd({'pattern':_0xf40a66(0x1fc),'alias':['mf',_0xf40a66(0x23b)],'desc':'Downloads\x20media\x20from\x20Mediafire.','category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x168)},async(_0x560171,_0x451ec6,_0x37b90e)=>{const _0x3f873f=_0xf40a66;if(!_0x37b90e)return _0x451ec6[_0x3f873f(0x16b)](_0x3f873f(0x180)+tlang()[_0x3f873f(0x217)]);if(!_0x37b90e[_0x3f873f(0x164)](_0x3f873f(0x1ba)))return _0x451ec6[_0x3f873f(0x16b)]('The\x20link\x20you\x20provided\x20is\x20invalid');let _0x1c5f2c=_0x37b90e;const _0x3bb97f=await mediafire(_0x1c5f2c);if(!_0x3bb97f[_0x3f873f(0x211)])return _0x451ec6[_0x3f873f(0x16b)]('could\x20not\x20found\x20anything');const _0x401344=parseInt(_0x3bb97f[0x0]['size']);if(_0x401344>0x64)return _0x451ec6[_0x3f873f(0x16b)](_0x3f873f(0x17e));let _0x184ace=_0x3f873f(0x188)+_0x3bb97f[0x0][_0x3f873f(0x206)]+_0x3f873f(0x18b)+_0x3bb97f[0x0]['size']+_0x3f873f(0x1e8)+_0x3bb97f[0x0][_0x3f873f(0x227)]+'\x0a\x0a';_0x184ace+=Config[_0x3f873f(0x170)];let _0x58d7a6={'document':{'url':_0x3bb97f[0x0][_0x3f873f(0x221)]},'caption':_0x184ace,'fileName':_0x3bb97f[0x0][_0x3f873f(0x206)],'mimetype':_0x3bb97f[0x0][_0x3f873f(0x227)]};return await _0x560171[_0x3f873f(0x175)](_0x451ec6[_0x3f873f(0x198)],_0x58d7a6);}),cmd({'pattern':'song','alias':[_0xf40a66(0x193)],'desc':_0xf40a66(0x22c),'category':_0xf40a66(0x179),'filename':__filename,'use':'<give\x20text>'},async(_0x468661,_0x391981,_0x7e6168)=>{const _0x53da1a=_0xf40a66;if(!_0x7e6168)return await _0x391981[_0x53da1a(0x16b)](_0x53da1a(0x1e3));let _0x3be67b=require(_0x53da1a(0x1b7)),_0x43c909=await _0x3be67b(_0x7e6168),_0x2229cb=_0x43c909['all'][0x1],_0x426952=_0x53da1a(0x215)+_0x2229cb[_0x53da1a(0x197)]+_0x53da1a(0x1e0)+_0x2229cb['url']+'\x0aDescription\x20:\x20'+_0x2229cb['timestamp']+_0x53da1a(0x1c4)+_0x2229cb[_0x53da1a(0x1e9)]+_0x53da1a(0x17b)+_0x2229cb[_0x53da1a(0x21e)]+_0x53da1a(0x16a)+_0x2229cb[_0x53da1a(0x21f)][_0x53da1a(0x1d0)]+_0x53da1a(0x1e6);_0x468661[_0x53da1a(0x175)](_0x391981[_0x53da1a(0x198)],{'image':{'url':_0x2229cb['thumbnail']},'caption':_0x426952});}),cmd({'pattern':_0xf40a66(0x1f1),'alias':[_0xf40a66(0x1e4),_0xf40a66(0x22e)],'desc':_0xf40a66(0x1f5),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x17a)},async(_0x1c782e,_0x482826,_0x560e1a)=>{const _0x3274f5=_0xf40a66;let _0x163220=require(_0x3274f5(0x1b7));if(!_0x560e1a)return _0x482826[_0x3274f5(0x16b)](_0x3274f5(0x219)+prefix+_0x3274f5(0x1eb));let _0x597ad2=await _0x163220(_0x560e1a),_0x40f51f=_0x3274f5(0x1c7)+_0x560e1a+'\x0a\x20\x20\x20───────────────────\x20\x0a',_0x45d7cc=0x1;for(let _0x31e366 of _0x597ad2[_0x3274f5(0x1b4)]){_0x40f51f+=_0x3274f5(0x218)+_0x31e366['title']+'*',_0x40f51f+=_0x3274f5(0x236)+_0x31e366[_0x3274f5(0x1bc)]+'*\x20\x0a\x20\x20\x20\x20\x20*──────────────────*\x20\x20\x20\x0a';}return _0x1c782e[_0x3274f5(0x175)](_0x482826[_0x3274f5(0x198)],{'image':{'url':_0x597ad2[_0x3274f5(0x1b4)][0x0][_0x3274f5(0x1df)]},'caption':_0x40f51f},{'quoted':_0x482826});}),cmd({'pattern':_0xf40a66(0x213),'alias':[_0xf40a66(0x19d),_0xf40a66(0x209),_0xf40a66(0x1fb)],'desc':_0xf40a66(0x1a7),'category':_0xf40a66(0x179),'filename':__filename,'use':_0xf40a66(0x239)},async(_0x40677c,_0x408849,_0x4ae50e)=>{const _0x45d235=_0xf40a66,_0x145982=_0x455c95=>{const _0x174f5a=_0x1038;return''+Math[_0x174f5a(0x19e)](Math['random']()*0x2710)+_0x455c95;};if(!_0x4ae50e){_0x408849['reply'](_0x45d235(0x21d));return;}try{let _0x4127c6=_0x4ae50e;if(!_0x4127c6[_0x45d235(0x224)](_0x45d235(0x1f4)))return _0x408849[_0x45d235(0x16b)](_0x45d235(0x234));let _0x40f65b=await ytdl[_0x45d235(0x1ce)](_0x4127c6);if(_0x40f65b[_0x45d235(0x183)][_0x45d235(0x212)]>=videotime)return _0x408849['reply'](_0x45d235(0x1c5));let _0x35577f=_0x40f65b[_0x45d235(0x183)][_0x45d235(0x197)],_0x4dfb36=_0x145982(_0x45d235(0x1ab));const _0x215182=ytdl(_0x4127c6,{'filter':_0x53a705=>_0x53a705['itag']==0x16||_0x53a705[_0x45d235(0x176)]==0x12})[_0x45d235(0x1ec)](fs[_0x45d235(0x1ee)]('./'+_0x4dfb36));await new Promise((_0x563b0d,_0x599a26)=>{const _0x59b3b8=_0x45d235;_0x215182['on']('error',_0x599a26),_0x215182['on'](_0x59b3b8(0x199),_0x563b0d);});let _0x4a9f36=fs[_0x45d235(0x216)]('./'+_0x4dfb36),_0x3a7b92=_0x4a9f36[_0x45d235(0x214)],_0x362588=_0x3a7b92/(0x400*0x400);if(_0x362588<=dlsize){let _0x1f48fd=require(_0x45d235(0x1b7)),_0x435b66=await _0x1f48fd(_0x4ae50e),_0x4b5718={'video':fs[_0x45d235(0x1af)]('./'+_0x4dfb36),'mimetype':_0x45d235(0x237),'fileName':_0x35577f+_0x45d235(0x1ab),'caption':_0x45d235(0x16f)+Config[_0x45d235(0x170)],'gifPlayback':![],'height':0x1f0,'width':0x280,'headerType':0x4,'headerType':0x4};return _0x40677c[_0x45d235(0x175)](_0x408849['chat'],_0x4b5718,{'quoted':_0x408849}),fs['unlinkSync']('./'+_0x4dfb36);}else _0x408849['reply'](_0x45d235(0x1cf));return fs[_0x45d235(0x1f8)]('./'+_0x4dfb36);}catch(_0x241caf){console['log'](_0x241caf);}}),cmd({'pattern':_0xf40a66(0x231),'alias':['yta'],'desc':'Downloads\x20audio\x20by\x20yt\x20link.','category':_0xf40a66(0x179),'use':'<yt\x20video\x20url>'},async(_0x4e43ba,_0x29e4a1,_0x2e9537)=>{const _0x204a94=_0xf40a66,_0x26984c=_0x3f3009=>{const _0x47369e=_0x1038;return''+Math[_0x47369e(0x19e)](Math[_0x47369e(0x16e)]()*0x2710)+_0x3f3009;};if(_0x2e9537[_0x204a94(0x211)]===0x0){_0x29e4a1[_0x204a94(0x16b)](_0x204a94(0x18c)+prefix+_0x204a94(0x18a));return;}try{let _0x3393f2=_0x2e9537;if(!_0x3393f2['startsWith'](_0x204a94(0x1f4))){_0x29e4a1[_0x204a94(0x16b)](_0x204a94(0x234));return;}let _0x480c1b=await ytdl['getInfo'](_0x3393f2);if(_0x480c1b[_0x204a94(0x183)][_0x204a94(0x212)]>=videotime){_0x29e4a1[_0x204a94(0x16b)](_0x204a94(0x229));return;}let _0x47c37a=_0x480c1b[_0x204a94(0x183)][_0x204a94(0x197)],_0x113327=_0x26984c(_0x204a94(0x1b9));const _0x32ae0f=ytdl(_0x3393f2,{'filter':_0x48858a=>_0x48858a['audioBitrate']==0xa0||_0x48858a['audioBitrate']==0x80})[_0x204a94(0x1ec)](fs[_0x204a94(0x1ee)]('./'+_0x113327));await new Promise((_0x5b059d,_0x36e898)=>{const _0x5be9c1=_0x204a94;_0x32ae0f['on'](_0x5be9c1(0x210),_0x36e898),_0x32ae0f['on'](_0x5be9c1(0x199),_0x5b059d);});let _0x98e237=fs['statSync']('./'+_0x113327),_0x49aba8=_0x98e237[_0x204a94(0x214)],_0x18ede6=_0x49aba8/(0x400*0x400);if(_0x18ede6<=dlsize){let _0x186591=require('secktor-pack'),_0x1df718=await _0x186591(_0x2e9537),_0x3bc12a={'audio':fs[_0x204a94(0x1af)]('./'+_0x113327),'mimetype':_0x204a94(0x18e),'fileName':_0x47c37a+_0x204a94(0x1b9),'headerType':0x4};return await _0x4e43ba['sendMessage'](_0x29e4a1['chat'],_0x3bc12a,{'quoted':_0x29e4a1}),fs[_0x204a94(0x1f8)]('./'+_0x113327);}else _0x29e4a1[_0x204a94(0x16b)]('❌\x20File\x20size\x20bigger\x20than\x20200mb.');fs['unlinkSync']('./'+_0x113327);}catch(_0x1026c4){console[_0x204a94(0x196)](_0x1026c4);}}),cmd({'pattern':'ytdoc','alias':[_0xf40a66(0x190)],'desc':_0xf40a66(0x1d8),'category':_0xf40a66(0x179),'use':_0xf40a66(0x165)},async(_0x34c2a2,_0x1dfc3c,_0x1c10ca)=>{const _0x11ccf0=_0xf40a66,_0x4f5b06=_0xd28705=>{const _0x22b086=_0x1038;return''+Math['floor'](Math[_0x22b086(0x16e)]()*0x2710)+_0xd28705;};if(_0x1c10ca[_0x11ccf0(0x211)]===0x0)return await _0x1dfc3c['reply'](_0x11ccf0(0x18c)+prefix+_0x11ccf0(0x18a));try{let _0x1b2bab=_0x1c10ca;if(!_0x1b2bab[_0x11ccf0(0x224)](_0x11ccf0(0x1f4)))return await _0x1dfc3c['reply'](_0x11ccf0(0x234));let _0x1d9280=await ytdl[_0x11ccf0(0x1ce)](_0x1b2bab);if(_0x1d9280['videoDetails']['lengthSeconds']>=videotime)return await _0x1dfc3c[_0x11ccf0(0x16b)](_0x11ccf0(0x229));let _0x1fa9ab=_0x1d9280[_0x11ccf0(0x183)][_0x11ccf0(0x197)],_0x59b2be=_0x4f5b06(_0x11ccf0(0x1b9));const _0x4f790d=ytdl(_0x1b2bab,{'filter':_0x370d52=>_0x370d52[_0x11ccf0(0x1b5)]==0xa0||_0x370d52['audioBitrate']==0x80})[_0x11ccf0(0x1ec)](fs['createWriteStream']('./'+_0x59b2be));await new Promise((_0x3a05f8,_0x241516)=>{const _0x20fe5b=_0x11ccf0;_0x4f790d['on'](_0x20fe5b(0x210),_0x241516),_0x4f790d['on']('finish',_0x3a05f8);});let _0x365c4d=fs['statSync']('./'+_0x59b2be),_0x41c549=_0x365c4d[_0x11ccf0(0x214)],_0x411f96=_0x41c549/(0x400*0x400);if(_0x411f96<=dlsize){let _0x442d8a=require(_0x11ccf0(0x1b7)),_0x285299=await _0x442d8a(_0x1c10ca),_0xbb50b1={'document':fs['readFileSync']('./'+_0x59b2be),'mimetype':_0x11ccf0(0x18e),'fileName':_0x1fa9ab+_0x11ccf0(0x1b9),'caption':_0x11ccf0(0x173)+Config[_0x11ccf0(0x170)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':_0x1fa9ab,'body':_0x1dfc3c[_0x11ccf0(0x1cb)],'renderLargerThumbnail':!![],'thumbnailUrl':_0x285299['all'][0x0][_0x11ccf0(0x1df)],'mediaUrl':_0x1c10ca,'mediaType':0x1,'thumbnail':await getBuffer(_0x285299[_0x11ccf0(0x1b4)][0x0]['thumbnail']),'sourceUrl':_0x1c10ca}}};return await _0x34c2a2[_0x11ccf0(0x175)](_0x1dfc3c['chat'],_0xbb50b1,{'quoted':_0x1dfc3c}),fs['unlinkSync']('./'+_0x59b2be);}else _0x1dfc3c['reply']('❌\x20File\x20size\x20bigger\x20than\x20200mb.');fs[_0x11ccf0(0x1f8)]('./'+_0x59b2be);}catch(_0x1e8640){console[_0x11ccf0(0x196)](_0x1e8640);}}),cmd({'on':_0xf40a66(0x1e5)},async(_0x509e78,_0x2bb4aa,_0x4f25fa,{isCreator:_0x25592c})=>{const _0x4a1136=_0xf40a66,_0x47f1a6=_0x4cda2d;(function(_0x8b1da1,_0xd61186){const _0x290251=_0x1038,_0x39d66d=_0x4cda2d,_0x58f736=_0x8b1da1();while(!![]){try{const _0x122b62=parseInt(_0x39d66d(0x1b9))/0x1+-parseInt(_0x39d66d(0x1a7))/0x2*(parseInt(_0x39d66d(0x1b4))/0x3)+-parseInt(_0x39d66d(0x1bc))/0x4+-parseInt(_0x39d66d(0x1a9))/0x5+parseInt(_0x39d66d(0x1bb))/0x6*(parseInt(_0x39d66d(0x1ad))/0x7)+parseInt(_0x39d66d(0x1c0))/0x8+-parseInt(_0x39d66d(0x1be))/0x9;if(_0x122b62===_0xd61186)break;else _0x58f736[_0x290251(0x1ed)](_0x58f736[_0x290251(0x19b)]());}catch(_0xac727e){_0x58f736[_0x290251(0x1ed)](_0x58f736[_0x290251(0x19b)]());}}}(_0x5db6a7,0x4e44a));function _0x4cda2d(_0x1f4f79,_0x683f6d){const _0x1a72d9=_0x5db6a7();return _0x4cda2d=function(_0x556cc6,_0x2c312a){_0x556cc6=_0x556cc6-0x1a4;let _0x438126=_0x1a72d9[_0x556cc6];return _0x438126;},_0x4cda2d(_0x1f4f79,_0x683f6d);}if(_0x2bb4aa[_0x47f1a6(0x1c1)]&&_0x2bb4aa[_0x47f1a6(0x1b6)]){const _0x3ec389=_0x2bb4aa[_0x47f1a6(0x1c1)][_0x47f1a6(0x1b6)][_0x47f1a6(0x1b8)]('\x0a');if(_0x3ec389[0x0][_0x47f1a6(0x1a8)]('Yt\x20Song\x20Searched\x20Data')){const _0x2f98ca=_0x3ec389[_0x47f1a6(0x1ab)](_0x10e24d=>_0x10e24d[_0x47f1a6(0x1a5)](_0x47f1a6(0x1b1)));let _0xfa1ae9=_0x2f98ca[_0x4a1136(0x21b)](_0x4a1136(0x1f6),'')['trim']();try{let _0x12d13e;if(_0x2bb4aa[_0x47f1a6(0x1b6)][_0x47f1a6(0x1a5)]('1')){_0x12d13e=_0x47f1a6(0x1a6);const _0x13a0ea=ytdl(_0xfa1ae9,{'filter':_0x4a8460=>_0x4a8460[_0x47f1a6(0x1af)]==0x16||_0x4a8460[_0x47f1a6(0x1af)]==0x12})[_0x47f1a6(0x1a4)](fs[_0x47f1a6(0x1c2)](_0x12d13e));await new Promise((_0x213088,_0x2a37fc)=>{const _0x431283=_0x4a1136,_0x121484=_0x47f1a6;_0x13a0ea['on'](_0x121484(0x1ba),_0x2a37fc),_0x13a0ea['on'](_0x431283(0x199),_0x213088);}),await _0x509e78[_0x47f1a6(0x1bd)](_0x2bb4aa[_0x47f1a6(0x1b7)],{'video':fs[_0x47f1a6(0x1bf)](_0x12d13e),'mimetype':_0x47f1a6(0x1ac),'caption':Config['caption']},{'quoted':_0x2bb4aa});}else{if(_0x2bb4aa[_0x47f1a6(0x1b6)]['startsWith']('2')){_0x12d13e=_0x4a1136(0x167);const _0x4befb1=ytdl(_0xfa1ae9,{'filter':_0x142efe=>_0x142efe[_0x47f1a6(0x1ae)]==0xa0||_0x142efe[_0x4a1136(0x1b5)]==0x80})[_0x47f1a6(0x1a4)](fs[_0x47f1a6(0x1c2)](_0x12d13e));await new Promise((_0x1feaa4,_0x39b36d)=>{const _0x2b2ee4=_0x4a1136,_0x4be5bc=_0x47f1a6;_0x4befb1['on'](_0x2b2ee4(0x210),_0x39b36d),_0x4befb1['on'](_0x4be5bc(0x1b3),_0x1feaa4);}),await _0x509e78[_0x47f1a6(0x1bd)](_0x2bb4aa[_0x47f1a6(0x1b7)],{'audio':fs[_0x4a1136(0x1af)](_0x12d13e),'mimetype':_0x47f1a6(0x1b2)},{'quoted':_0x2bb4aa});}}try{return fs[_0x47f1a6(0x1aa)](_0x12d13e);}catch(_0x1829af){}}catch(_0x574613){return await _0x2bb4aa[_0x47f1a6(0x1b0)](_0x47f1a6(0x1b5)+_0x574613);}}}function _0x5db6a7(){const _0x17e57b=_0x4a1136,_0x1a6031=[_0x17e57b(0x237),_0x17e57b(0x1fd),_0x17e57b(0x1b5),_0x17e57b(0x176),_0x17e57b(0x16b),'Url\x20:',_0x17e57b(0x18e),'finish',_0x17e57b(0x208),'Error\x20While\x20Downloading\x20Video\x20:\x20',_0x17e57b(0x1e5),_0x17e57b(0x198),_0x17e57b(0x225),_0x17e57b(0x17c),_0x17e57b(0x210),_0x17e57b(0x222),'1041800hTaUXQ','sendMessage',_0x17e57b(0x195),_0x17e57b(0x1af),_0x17e57b(0x22f),_0x17e57b(0x1a4),_0x17e57b(0x1ee),_0x17e57b(0x1ec),'startsWith',_0x17e57b(0x1ea),_0x17e57b(0x1d6),_0x17e57b(0x164),'1523950KcTWbR','unlinkSync',_0x17e57b(0x1b2)];return _0x5db6a7=function(){return _0x1a6031;},_0x5db6a7();}});
