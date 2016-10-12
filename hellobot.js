module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText =  req.body.data.text;
  var botPayload = {
    text : 'Hi ' + userName + '!' + 'How may I be of assistance today?' + userText
  };

   // channel pay load
  var channelPayload = {
    channel: help-desk,
    text: '@' + userName + ' ' + '*posted*:' + userText
  };


  /* 
    avoid infinite loop caused by slackbot keyword
    post message to channel(help desk) if length is greater than 10
  */

  
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else if (userName !== 'slackbot' && req.body.text.length >= 10) {
    return res.status(200).json(channelPayload);
  } else {
    return res.status(200).end();
  }
}


// var IncomingWebhook = require('@slack/client').IncomingWebhook;

// var url = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/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';
// var wh = new IncomingWebhook(url);
// var whWithDefaults = new IncomingWebhook(url, {
//   username: 'houdinni',
//   iconEmoji: ':slack:',
//   channel: ''
// });

// wh.send('CTO Okemwa Moses');

// whWithDefaults.send({
//   text: 'Some text',
//   iconEmoji: ':robot_face:',
//   channel: 'custom-channel',
//   attachments: [
//     // attachment data
//     // see https://api.slack.com/docs/attachments
//   ]
// });

// wh.send('Some text', function onSendEnd() {
//   console.log('Finished sending');
// });


//Import request module
// var request = require('request');

//Replace your token, channelID and text here
// var path_to_call = 'http://slack.com/api/chat.postMessage?token=xoxb-89845683031-7xwrpgaTzy7PdyNBF5YHKwT8&channel=help-desk&text=http_response';

// request(path_to_call, function(error, response, body) {
    //  if (!error && response.statusCode == 200) { 
        //  console.log('Success');
    //  } else { 
        //  console.log(error);
    //  }
// });