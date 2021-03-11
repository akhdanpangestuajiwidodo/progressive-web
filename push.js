var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFNI9n4bKIUlBkTTxVwhk0q4AMJ4c43ffCe5yfkaDkgz2AoogqxuN98HRgxaEGBVdCUFPvR-TXiEx7kOR4X_mAw",
   "privateKey": "Bl0G9c5w5teK6BSwtJ5n7IGRcW17Ofwk0fiPjPxUMUE"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fUmArExT6Ho:APA91bE8vsQLoFRUEvMuARPwTfphWa1Wu4AMamLyP_KZm1NVgSL_YO4pFnh4OW6DlyA4YDRUdM7veH7HENDB6gV8MMKvbybhVlePh6bPcMSmNXdaN_8X1CutVLDERPgsNGrKQEyflNQ2",
   "keys": {
       "p256dh": "BAo38rbNwnAnajGVtyO2T64rFz1or4qPsdiJ5W2aOSwJ5bNeJcrFni3bLojfw4R7b0ZPmUF9C91a9u0ibGH8m1Y=",
       "auth": "+np42MQA6BJ2HtR83Av4Ug=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '227385706388',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);