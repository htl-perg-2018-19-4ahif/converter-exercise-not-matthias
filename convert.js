const conversions = {
    'm': 1,
    'cm': .01,
    'kg': 1,
    'g': .001,
};

if (!isNaN(process.argv[2]) && conversions[process.argv[3]] && process.argv[4] === 'to' && conversions[process.argv[5]])
    console.log(`${process.argv[2]} ${process.argv[3]} are ${process.argv[2] * conversions[process.argv[3]] / conversions[process.argv[5]]} ${process.argv[5]}`);
else
    console.log('Invalid parameters');