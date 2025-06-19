//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJ6a05CQU9CZEhKOUpXZmVoRFRBb3huVlNpZHZhN3FXbUJNWGpnbFkyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3BLejVMOWFlQW9rYmpPdDJObDNMZUgxckpGWm5mdGhQdjU4MkV5SW5IYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ3hoeGJOVjJ0b1Evelh3Sk5tajU1SlEvcDVmbStTSHhIVWFiYVdGMzNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdkVPd3ZnMitHRzRHK3lWeGJBU1d6aTYrNTFRQnRBL211OFFVWjh4WDFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMWktXRk5vZHNsTXZuRGZFc3p4c29LY2ZDenJxcGd4MTFOUlY3K0psM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdabTBFT1hzYXI5amQvQ1BzK3dPMkFxbjMwU2FGYkNBUGVCZFFXMzkrV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT001R1Fmd3hPWkJHUitUaGtLemU4L1FTdThFTWJLMWd5MDRhZ1kwVHVXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2tRTVIreis4aWE5RUtVOGQyc09sWVFzeFlmOFBUc1hMZHhtOTBLZ254az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGelAxQ1RTS3kwVWc4a2xEci9VNCsyQlBjRWt1UVJ1ZURYZHhuK3FpNVV0ajVBeTNVeUU1a3hYbTdZUjlvQk04QSt2QklvMmRxclcvajdCeHZZZERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6InhjamZpT0hBRFVBN241WlhxVWFoRFFxU2NBUkpPcUJtUXoweWpUdE5vdk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNPR1pfcVE3U0lHUzBURU0tdUktZlEiLCJwaG9uZUlkIjoiOWVkYzk2MGMtNjlhMS00Mzc0LWIwMzAtNzE3Yjk1NzRjYTAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc0WndvL0l4SzF4V1hEc20weGxQZzNGMFBDTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WkpvQ3IyOHd5WWVIMEc0eHVrYkFIVkEwdEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODIzTk5XV1IiLCJtZSI6eyJpZCI6Ijk0NzUwNzk5NzMxOjM2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDQ2MzM5MDQxNDQ2MDI6MzZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNONzV3eTBRdmV6UHdnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBVXA1Nk1yOWx0b25CUytXQ3BkRmhwWk1ZMjFQSlFXaEJ4c1FONklVendFPSIsImFjY291bnRTaWduYXR1cmUiOiJMSVRQd09LZzl0eWZQWm9JZkp6WTlERjhQUUxWTW9pWUR2VHFrOEdEWUZUNjlLL1lHQ2RueGlSUnVHYzl4NllNeEk3SjAvUlpOZHMvR1RhTGg1ZXVDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTExTYzNzbWtjUEpyb1NsbWdudGY4empsMGd5SU5zY25NSEtUdG95c0I3allJVlo0dkZCdmplMGpUSTl0cGJwSW13aFVBYWFzMERHWEpRT2tRUGQyQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MDc5OTczMTozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRktlZWpLL1piYUp3VXZsZ3FYUllhV1RHTnRUeVVGb1FjYkVEZWlGTThCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAzMzMwMDIsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
