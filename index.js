var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

// test route
app.get('/', function(req, res) {
    res.status(200).send('Hello world!');
});

// error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
});

app.listen(port, function() {
    console.log('Slack bot listening on port ' + port);
});

// Requiring our module
var slackAPI = require('slackbotapi');

// Starting
var slack = new slackAPI({
    'token': '<bot-user-token-goes-here>',
    'logging': true,
    'autoReconnect': true
});

// Slack on EVENT message, send data
slack.on('message', function(data) {

    // local scopes
    var userName = slack.getUser(data.user).name;
    var queryIssue = 'What is your query my friend';

    // If no text, return.
    if (typeof data.text === 'undefined') return;

    // If someone says `help` respond to their message with 'user OOH, CAKE!! :cake:'
    if (data.text === 'help!' && data.user !== 'slackbot') {

        slack.sendMsg(data.channel, '@' + userName + " how may I help you!\n \n" +
            "Have you attempted the question for more than fifteen minutes? \n" +
            "Did you cross check your question against the official programming language documentation? \n" +
            "Did you seek help from your classmates? \n" +
            "Have you compared your question against similar questions on stack overflow?");
    } else if (data.text === 'yes' || 'Yes' && data.text !== 'help' && data.user !== 'houdinni') {

        slack.sendMsg(data.channel, queryIssue);
        console.log('before help coming ' + data.channel + ' ' + userHelp);
        if (data.text.length >= 10 && data.text !== queryIssue) {
            slack.sendMsg(data.channel, 'help is coming soon');

            var helpDesk = 'help-desk';
            var userHelp = data.text;

            console.log(userName);

            var IncomingWebhook = require('@slack/client').IncomingWebhook;
            var url = process.env.SLACK_WEBHOOK_URL || "<incoming-webhook-url-goes-here>";
            var wh = new IncomingWebhook(url);

            wh.send('@' + userName + ' asked \n \n' + userHelp);
        } else if (data.text === queryIssue) {
            return;
        }
    } else {

    }
});
