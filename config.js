"use strict";
// Environment setup
require('dotenv').config({ silent: true });
// Hold application secrets and config
module.exports = {
  nodeEnv: process.env.NODE_ENV,
  appToken: process.env.SLACK_APP_TOKEN,
  botToken: process.env.BOT_TOKEN
};
