




var hellobot = require('./hellobot');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

app.post('/hello', hellobot);



//////////////////////////////////////////////////////////////////////////////////////
//      ███████╗██╗      █████╗  ██████╗██╗  ██╗    ██████╗     ██████╗  ████████╗  //
//      ██╔════╝██║     ██╔══██╗██╔════╝██║ ██╔╝    ██║  ██╗   ██║   ██║    ██╔══╝  //
//      ███████╗██║     ███████║██║     █████╔╝     ██████═╝   ██║   ██║    ██║     //
//      ╚════██║██║     ██╔══██║██║     ██╔═██╗     ██║  ██╗   ██║   ██║    ██║     //
//      ███████║███████╗██║  ██║╚██████╗██║  ██╗    ██████═╝    ██████╔╝    ██║     //
//      ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝     ╚═════╝     ╚═╝     //
//          14-12-14 | xBytez | me@xbytez.eu                                        //
//////////////////////////////////////////////////////////////////////////////////////

// Requiring our module
var slackAPI = require('slackbotapi');

// Starting
var slack = new slackAPI({
    'token': 'xoxb-89845683031-7xwrpgaTzy7PdyNBF5YHKwT8',
    'logging': true,
    'autoReconnect': true
});

// Slack on EVENT message, send data.
slack.on('message', function (data) {
    // If no text, return.
    if (typeof data.text === 'undefined') return;
    // If someone says `cake!!` respond to their message with 'user OOH, CAKE!! :cake:'
    if (data.text === 'help') slack.sendMsg(data.channel, '@' + slack.getUser(data.user).name + ' OOH, CAKE!! :cake:\n'
      + slack.getUser(data.text).text );

    // If the first character starts with %, you can change this to your own prefix of course.
    if (data.text.charAt(0) === '%') {
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
                var say = data.text.split('%say ');
                slack.sendMsg(data.channel, say[1]);
                break;
        }
    }
});

//slack.on('team_join', function (data) {
    // Greet a new member that joins
    // slack.sendPM(data.user.id, 'Hellow and welcome to the team! :simple_smile: :beers:');
//});