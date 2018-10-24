const fetch = require('node-fetch');
const libxmljs = require('libxmljs');

fetch(`http://api.wolframalpha.com/v2/query?input=${process.argv[2]}%20${process.argv[3]}%20${process.argv[4]}%20${process.argv[5]}&appid=T986V5-VU5TLV89QV`)
    .then(response => response.text())
    .then(body => {
        if(libxmljs.parseXml(body).get('*[@primary]').text().trim().includes('not compatible.')) throw Error();
        console.log((process.argv[4] !== "to" || process.argv.length != 6) ? 'Invalid parameters' : `${process.argv[2]} ${process.argv[3]} are ${libxmljs.parseXml(body).get('*[@primary]').text().trim().split(' ') [0]} ${process.argv[5]}`);
    })
    .catch(() => console.log('Invalid parameters'));