module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText =  req.body.data.text;
  var botPayload = {
    text : 'Hi ' + userName + '!' + 'How may I be of assistance today?' + userText
  };

  // avoid infinite loop caused by slackbot keyword
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }

}



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