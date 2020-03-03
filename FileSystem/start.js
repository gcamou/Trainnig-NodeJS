var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/readable.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
var writetable = fs.createWriteStream(__dirname + '/writetable.txt')
readable.on('data', (chunk) => {
    console.log(chunk);
    writetable.write(chunk);
})