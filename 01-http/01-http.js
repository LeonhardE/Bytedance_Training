const http = require('http')
const fs = require('fs')
const { isForXStatement } = require('babel-types')

http.createServer((req, res) => {
    const {url, method, headers} = req
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            // 出错
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8'
                })
                res.end('500 服务器出现错误')
                return
            }
            // 正常
            res.statusCode = 200
            res.setHeader('Content-type', 'text/html')
            res.end(data)
        })
    }
    else if (url === '/users' && method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({name: 'Charles'}))
    }
    else if (method === 'GET' && header.accept.indexOf('image/*') !== -1) {
        // 图片
        fs.readFile('1.png')
    }

    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('404 找不到资源')
    }

}).listen(3000, () => {
    console.log('Server listening at 3000')
})
