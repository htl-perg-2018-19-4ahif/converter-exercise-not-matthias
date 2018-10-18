const fetch = require('node-fetch');
const libxmljs = require('libxmljs');

fetch(`http://api.wolframalpha.com/v2/query?input=${process.argv[2]}%20${process.argv[3]}%20${process.argv[4]}%20${process.argv[5]}&appid=T986V5-VU5TLV89QV`)
    .then(res => res.text())
    .then(body => console.log(`${process.argv[2]} ${process.argv[3]} are ${libxmljs.parseXml(body).get('*[@primary]').text().trim().split(' ') [0]} ${process.argv[5]}`))
    .catch(() => console.log('Invalid parameters'));