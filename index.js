const core = require('@actions/core');

try {
  console.log('nothing to do here');
  core.saveState("startTime", Date.now());


} catch (error) {
  core.setFailed(error.message);
}