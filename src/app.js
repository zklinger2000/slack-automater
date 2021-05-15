"use strict";
/* eslint-disable no-console */
import chalk from 'chalk';
import { SocketModeClient, LogLevel } from '@slack/socket-mode';
import { appToken } from '../config';

// Socket client
export const socketModeClient = new SocketModeClient({
  logLevel: LogLevel.DEBUG,
  appToken: appToken
});

socketModeClient.on('connected', async () => {
  console.log(chalk.green('Socket Mode Client connected...'));
});
