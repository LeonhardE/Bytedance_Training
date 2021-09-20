const {promisify} = require('util')
module.exports.clone = async function(repo, desc) {
    const download = promisify(require('download-git-repo'))
    // const ora = require('ora')
    await download(repo, desc)
}