const core = require('@actions/core');

try {
  core.saveState("startTime", Date.now());
} catch (error) {
  core.setFailed(error.message);
}