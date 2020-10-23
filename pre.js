const core = require('@actions/core');

try {
  let start = new Date();
  if (core.getInput('start')) {
    core.info(`Using predefined start value: ${core.getInput('start')}`);
    start = new Date(parseInt(core.getInput('start')));
  }

  const startTimestamp = +start;
  core.saveState("startTime", `${startTimestamp}`);

  core.info(`Set start time to ${startTimestamp} (${start.toISOString()})`);
} catch (error) {
  core.setFailed(error.message);
}