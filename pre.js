const core = require('@actions/core');

try {
  let start = new Date();
  if (core.getInput('start')) {
    core.info(`Using predefined start value: ${core.getInput('start')}`);
    start = new Date(core.getInput('start'));
  }

  core.saveState("startTime", +start);

  core.info(`Set start time to ${start.toISOString()}`);
} catch (error) {
  core.setFailed(error.message);
}