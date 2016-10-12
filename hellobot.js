module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText =  req.body.data.text;
  var botPayload = {
    text : 'Hi ' + userName + '!' + 'How may I be of assistance today?'
  };

  // meant to be posted in channel help-desk
  var botPayload = {
    text : userName + ' requires help with \n' + userText
  };

  // avoid infinite loop caused by slackbot keyword
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}