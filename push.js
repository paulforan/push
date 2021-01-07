var push = require('web-push')

let vapidKeys={
    publicKey: 'BCjhxQcUKpOI7EcDtFNn3cQJ3sbE0c6JJcP0VbgcF2NG0BGyhZfLQU60e80nl49Z_hjKC-8Vps5EmKRNHke5en8',
    privateKey: 'amZdMBMIgFnA8vxZD2MmqpIVv3KrVlUSB8xAzZW_bSw'
  }

push.setVapidDetails('mailto:foran.paul@gmail.com',vapidKeys.privateKey,vapidKeys.privateKey)
let sub = {};

push.sendNotification(sub, 'test message')