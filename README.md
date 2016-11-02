## A Slack Help Desk Bot
This bot acts as an interface between a student with a query and a Technical Mentor, who can offer assistance.

It's meant to help manage time effectively by providing a means for accessing help and also enforce disciple to the students by ensuring that the have perform the required steps before asking for help.

### How it works
A Student in need of Technical assistance will search for a slack user called Houdinni - our current bots name, then type in bots activation key words

    help!

Afterwards the bot will post a series of check questions to confirm whether the Student has followed all of them. Here the idea is to have the technical challenge as close to being solved as possible.

    Have you attempted the question for more than fifteen minutes?
    Did you cross check your question against the official programming language documentation?
    Did you seek help from your classmates?
    Have you compared your question against similar questions on stack overflow?

The Student will answer with a `yes` or a `no`.

If the answer is `yes`, the bot will prompt the student to post their query which will in turn be posted in the help-desk channel. From here a Technical Mentor will follow up with the students requests.

If the answer is `no` the conversation will stop awaiting for the student compliace with the check list questions.


It is hosted on [Heroku](https://www.heroku.com/) and utilizes the Slack [Bot User](https://api.slack.com/bot-users) and [Incoming Webhook](https://api.slack.com/incoming-webhooks) API.



node v4.5.0
npm v2.15.9


### Running the slack-bot

    # clone this repo to your local machine
    $ git clone https://github.com/moringaschool/help-slack-bot.git

    # enter the folder and install dependancies
    $ cd slackbot-express
    $ npm install

    # start the project
    $ npm start


also info about the environment you're building it in (node version, etc)
