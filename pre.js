const core = require('@actions/core');

try {
  core.saveState("startTime", Date.now());
  console.log('Set start time to ' + new Date().toISOString());
} catch (error) {
  core.setFailed(error.message);
}