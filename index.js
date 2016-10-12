var hellobot = require('./hellobot');
var bot = require('./bot');
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

app.post('/hello', hellobot);



app.get('/hello', function(req,res) {

        var userText = 'ms';

        if(userText === 'ms' || 'MS') {

            res.end('yup');

        } else {

            res.end('nope');

        }

});

app.post('/bot', bot);




//////////////////////////////////////////////////////////////////////////////////////////
//      ███████╗██╗      █████╗  ██████╗██╗  ██╗    ██████╗     ██████╗  ████████╗      //
//      ██╔════╝██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║  ██╗   ██║   ██║    ██╔══╝      //
//      ███████╗██║     ███████║██║     █████╔╝     ██████═╝   ██║   ██║    ██║         //
//      ╚════██║██║     ██╔══██║██║     ██╔═██╗     ██║  ██╗   ██║   ██║    ██║         //
//      ███████║███████╗██║  ██║╚██████╗██║  ██╗    ██████═╝    ██████╔╝    ██║         //
//      ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝     ╚═════╝     ╚═╝         //
//                   11-10-16 | mussaimo | okemwamoses@gmail.com                        //
//////////////////////////////////////////////////////////////////////////////////////////


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
    // If no text, return.
    if (typeof data.text === 'undefined') return;
    // If someone says `help` respond to their message with 'user OOH, CAKE!! :cake:'
    if (data.text === 'help') slack.sendMsg(data.channel, '@' + slack.getUser(data.user).name + ' how may I help you!');



    // If someone says `help` respond to their message with 'user OOH, CAKE!! :cake:'
    if (data.text.split('') === 'i') slack.sendMsg(data.channel, 'Have you tried this?\n wdnvsndjnfj \n jdfnjidnfjin \n owhufhuiwhdgufh');



    







    // If the first character starts with %, you can change this to your own prefix of course.
    if (data.text === 'say') {
        // Split the command and it's arguments into an array
        var command = data.text.substring(1).split(' ');

        // If command[2] is not undefined, use command[1] to have all arguments in command[1]
        if (typeof command[2] !== 'undefined') {
            for (var i = 2; i < command.length; i++) {
                command[1] = command[1] + ' ' + command[i];
            }
        }

        // Switch to check which command has been requested.
        switch (command[0].toLowerCase()) {
            // If hello
            case 'hello':
                // Send message
                slack.sendMsg(data.channel, 'Oh, hello @' + slack.getUser(data.user).name + ' !');
                break;

            case 'say':
                var say = data.text.split('say ');
                slack.sendMsg(data.channel, say[1]);
                break;
        }
    }
});

slack.on('message', function (data) {
    
});