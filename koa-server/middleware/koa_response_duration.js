//计算服务器消耗时长的中间件
module.exports = async (ctx, next) => {
    //记录开始时间
    const start = Date.now()
    //内层中间件得到执行
    await next()
    //记录结束的时间
    const end = Date.now()
    //设置相应头 X_response-Time
    const duration = end - start
    ctx.set('X-Response-Time', duration + 'ms')
}