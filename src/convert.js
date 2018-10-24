const unit = require('smartcar-unit');

try {
    console.log((process.argv[4] !== "to" || process.argv.length != 6) ? 'Invalid parameters' : `${process.argv[2]} ${process.argv[3]} are ${unit(process.argv[2], process.argv[3]).as(process.argv[5])} ${process.argv[5]}`);
} catch (e) {
    console.log('Invalid parameters');
}