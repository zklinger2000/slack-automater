"use strict";
import chalk from 'chalk';
import { nodeEnv } from '../../config';

console.log(chalk.blueBright('arch:'), process.arch, chalk.blueBright('node:'), process.version);

console.log(chalk.green('Starting app in'),
  chalk.blue(nodeEnv),
  chalk.green('mode...'));
