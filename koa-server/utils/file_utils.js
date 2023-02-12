const fs = require('fs')

module.exports.getFileJsonData = (filepath) => {

    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}