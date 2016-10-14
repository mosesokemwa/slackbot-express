//////////////////////////////////////////////////////////////////////////////////////////
//      ███████╗██╗      █████╗  ██████╗██╗  ██╗    ██████╗     ██████╗  ████████╗      //
//      ██╔════╝██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║  ██╗   ██║   ██║    ██╔══╝      //
//      ███████╗██║     ███████║██║     █████╔╝     ██████═╝   ██║   ██║    ██║         //
//      ╚════██║██║     ██╔══██║██║     ██╔═██╗     ██║  ██╗   ██║   ██║    ██║         //
//      ███████║███████╗██║  ██║╚██████╗██║  ██╗    ██████═╝    ██████╔╝    ██║         //
//      ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝     ╚═════╝     ╚═╝         //
//                   11-10-16 | mussaimo | okemwamoses@gmail.com                        //
//////////////////////////////////////////////////////////////////////////////////////////



var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({
    extended: true 
}));

// test route
app.get('/', function (req, res) {
    res.status(200).send('Hello world!')
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

// Requiring our module
var slackAPI = require('slackbotapi');

// Starting
var slack = new slackAPI({
    'token': 'xoxb-89845683031-7xwrpgaTzy7PdyNBF5YHKwT8',
    'logging': true,
    'autoReconnect': true
});

// Slack on EVENT message, send data
slack.on('message', function (data) {

    // local scopes
    var userName = slack.getUser(data.user).name;
    var queryIssue = 'What is your query my friend';

    // If no text, return.
    if (typeof data.text === 'undefined') return;
    // If someone says `help` respond to their message with 'user OOH, CAKE!! :cake:'
    if (data.text === 'help!' && data.user !== 'slackbot') {
        
        slack.sendMsg(data.channel, '@' + userName + ' how may I help you! & \n have you tried this? \n wdnvsndjnfj \n jdfnjidnfjin \n owhufhuiwhdgufh');

    } else if (data.text === 'yes' || 'Yes' && data.text !== 'help' && data.user !== 'houdinni') {

        slack.sendMsg(data.channel, queryIssue);

        console.log('before help coming ' + data.channel + ' ' + userHelp);

        if (data.text.length >= 10 && data.text !== queryIssue){

            slack.sendMsg(data.channel, 'help is coming soon');
            console.log('after help coming ' + data.channel + ' ' + userHelp);


            var helpDesk = 'help-desk';
            var userHelp = data.text;

            console.log(userName);

            var IncomingWebhook = require('@slack/client').IncomingWebhook;
            var url = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/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';
            var wh = new IncomingWebhook(url);
            
            wh.send('@' + userName + ' asked \n \n' + userHelp);
        } else if (data.text === queryIssue) {
            return;
        }
    } else{

    }
});


// Prevents heroku this app from sleeping by pinging it every five minutes
var http = require("http");
setInterval(function() {
    http.get("https://infinite-wave-45451.herokuapp.com/");
}, 300000); // every 5 minutes (300000)