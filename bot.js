module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var userText =  req.body.data.text;
  var botPayload = {
    channel: help-desk,
    text : userName + ' ' + userText
  };

  // avoid infinite loop caused by slackbot keyword
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }

}