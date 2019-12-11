const https = require('https');
const token = '19d9b3dda6f2f3573a300cf65777bcbcb17aa628'

let options = {
    host: 'https://cors-anywhere.herokuapp.com/https://api.appannie.com',
    path: 'v1.3/intelligence/apps/ios/market_size?data_break_down=country&categories=Overall&device=iphone&granularity=monthly&start_date=2018-01-01',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
    }
};

let req = https.request(options, function(res) {
    console.log('\n');
    console.log('STATUS: ' + res.statusCode);
    console.log('\n');
    console.log('HEADERS: ' + res.headers);
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('\n');
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e);
});

// var options = {
//     url: 'https://api.appannie.com/v1.3/intelligence/apps/ios/market_size?data_break_down=country&categories=Overall&device=iphone&granularity=monthly&start_date=2018-01-01',
//     headers: headers
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(JSON.parse(response.body));
//     } else {
//         console.log(error);
//     }
// }

// request(options, callback);

