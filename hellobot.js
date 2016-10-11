module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var text = data.text;
  var botPayload = {
    text : 'Hello ' + userName + '!' + 'this is your message: ' + text
  };

  // avoid infinite loop caused by slackbot keyword
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}