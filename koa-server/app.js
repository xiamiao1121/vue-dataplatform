//服务器的入口文件


//创建KOA的实例对象
const Koa = require('koa')
const app = new Koa()
//绑定中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)

const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)

const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
//绑定端口号
app.listen(8888);


const WebSocketService = require('./service/web_socket_service')

WebSocketService.listen()