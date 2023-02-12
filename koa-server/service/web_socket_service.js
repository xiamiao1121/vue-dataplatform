const path = require('path')
const fileUtils = require('../utils/file_utils')
const WebSocket = require('ws')
//创建WebSocket服务端的对象，绑定端口号
const wss = new WebSocket.Server({
    port: 9999
})

module.exports.listen = () => {
    wss.on("connection", client => {
        console.log('有客户端连接成功了')
        client.on('message', async msg => {
            console.log('客户端发送数据给服务端了:' + msg);
            let payload = JSON.parse(msg);
            const action = payload.action;
            if (action === 'getData') {
                let filePath = '../data/' + payload.chartName + '.json'
                filePath = path.join(__dirname, filePath)
                const ret = await fileUtils.getFileJsonData(filePath)
                payload.data = ret
                client.send(JSON.stringify(payload))
            }
            else {
                wss.clients.forEach(client => {
                    client.send(msg)
                })
            }
        })
    })

}

