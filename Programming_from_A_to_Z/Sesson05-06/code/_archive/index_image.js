console.log('hello bot!');
const dotenv = require('dotenv');
const twitterAutohook = require('twitter-autohook');
const Twitter = require("./twitter.js");
var fs = require('fs');

dotenv.config();



// const config = {
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     token: process.env.TWITTER_ACCESS_TOKEN,
//     token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
//     // env: process.env.TWITTER_WEBHOOK_ENV,
//     // ngrok: process.env.NGROK_AUTH_TOKEN,
//     env: 'test',
//     ngrok: 'test',
// };

const config = {
    consumer_key: 'nbITXctpLtokI1081BqEHtuTT',
    consumer_secret: 'KyQR2ze8hB5OKZ9fXKfEJB2BF05H5mNqKmlZhqgdpNcG3IFgPx',
    token: '1315033597066252288-EMt0OrAp3FtHZEJYSoBFvAiLHT2DLC',
    token_secret: 'JUIyUEFU4tj4ldIJXoEbundUu0rLhkPTBEW9JOXEPewm6',
    // env: process.env.TWITTER_WEBHOOK_ENV,
    // ngrok: process.env.NGROK_AUTH_TOKEN,
    env: 'test',
    ngrok: 'test',
};

const crabBot = new Twitter(config);



tweet();

async function tweet() {
    let image = await base64_encode("img/img1.jpg");
    // // console.log(crabBot.config);
    const response1 = await crabBot.upload(image);
    console.log(response1);
    const response2 = await crabBot.tweet('here is doodle!', [response1.media_id_string]);
    console.log(response2.id);
    console.log(response2.text);
}



// from https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
// function to encode file data to base64 encoded string
async function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}