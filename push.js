var push = require('web-push')

let vapidKeys={
    publicKey: 'BCjhxQcUKpOI7EcDtFNn3cQJ3sbE0c6JJcP0VbgcF2NG0BGyhZfLQU60e80nl49Z_hjKC-8Vps5EmKRNHke5en8',
    privateKey: 'amZdMBMIgFnA8vxZD2MmqpIVv3KrVlUSB8xAzZW_bSw'
  }

push.setVapidDetails('mailto:foran.paul@gmail.com',vapidKeys.privateKey,vapidKeys.privateKey)
let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/fadD29MSdFQ:APA91bGnqQy4sZbpIyPd59-9zI5GTXXqJ2lpZaNvGjylTZa0IO1bQo3kos_MtHCbhm-4xvRnSzlBYFk4cMaucx0gUFIhZ8zuPutsCQLosEfSZTNcErqGN2TmU2L4HhmRg4yJBGmJkWcg',
    expirationTime: null,
    keys:{
        p256dh:'BMejvbeIv4solpw8Ah2EO1UMsOwimsjp5R6i8_OjRTus_lagg5o4Na0fl7usgypEqdmP1w5dTPB00ewbpqedQ50',
        auth:'2K6POW363RkhbhLZ7RntTQ'
    }};

push.sendNotification(sub, 'test message')