console.log('hello bot!');
const dotenv = require('dotenv');
const twitterAutohook = require('twitter-autohook');
const Twitter = require("./twitter.js");
var fs = require('fs');

dotenv.config();


const config = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_ACCESS_TOKEN,
    token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    env: process.env.TWITTER_WEBHOOK_ENV,
    ngrok: process.env.NGROK_AUTH_TOKEN,
};

const crabBot = new Twitter(config);


start();
async function start() {
    await crabBot.initActivity(tweetHandler);
}

async function tweetHandler(for_user_id, tweet) {
    const { user, id_str } = tweet;
    if (user.id_str !== for_user_id) {
        // await crabBot.reply(id_str, "hi back!");
        let image = await base64_encode();
        // // console.log(crabBot.config);
        const response1 = await crabBot.upload(image);
        console.log(response1);
        const response2 = await crabBot.reply(id_str, "Wish you a wonderful day!", [response1.media_id_string]);
        console.log(response2.id);
        console.log(response2.text);
    }
}

// from https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
// function to encode file data to base64 encoded string
async function base64_encode() {
    // read binary data
    let randomDigit = Math.floor((Math.random() * 9) + 1);
    var bitmap = fs.readFileSync("img/" + randomDigit + ".gif");
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}