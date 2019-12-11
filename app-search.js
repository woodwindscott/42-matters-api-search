var request = require('request');

var options = {
    url: 'https://api.appmonsta.com/v1/stores/itunes/details.json?date=2019-11-19&country=US',
    auth: {
        'user': '7c121a52b46011bb3feb88aa5f169768792b0a8a',
        'pass': 'X'
    }
};

function callback(error, response) {
    if (!error && response.statusCode == 200) {
        // console.log(JSON.stringify(body, null, 't'));
        console.log(JSON.parse(response.body));
    }
}

request(options, callback);
