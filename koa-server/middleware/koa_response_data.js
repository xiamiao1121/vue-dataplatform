const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
    const url = ctx.request.url
    let filepath = url.replace('/api', '')
    filepath = '../data' + filepath + '.json'
    filepath = path.join(__dirname, filepath)
    try {
        const ret = await fileUtils.getFileJsonData(filepath)
        ctx.response.body = ret
    } catch (error) {
        const errorMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }

    console.log(filepath)
    await next()
}