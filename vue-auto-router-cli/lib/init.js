const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')
const open = require('open')
//const { spawn } = require('child_process')

const spawn = async(...args) => {
    // 同步 Promise api
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        // 输出流 子进程 合并到主进程
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}

module.exports = async name => {
    clear()
    const data = await figlet('Welcome ZXX')
    log(data)

    // 项目模板
    log('创建项目' + name)
    // await clone('github:su37josephxia/vue-template', name)

    // 下载依赖
    // 子进程
    log('安装依赖....')
    //await spawn('npm', ['install'], {cwd: './${name}'})
    log(chalk.green('安装完成!'))

    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], {cwd: './${name}'})
}