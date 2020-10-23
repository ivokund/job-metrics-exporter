const core = require('@actions/core');

try {
  const startTime = core.getState("startTime");
  core.setOutput('start', startTime);
  core.info(`Set output variable "start" to ${startTime}`);
} catch (error) {
  core.setFailed(error.message);
}