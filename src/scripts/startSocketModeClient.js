"use strict";
import { socketModeClient } from '../app';

(async () => {
  await socketModeClient.start();
})();
