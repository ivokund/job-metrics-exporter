const core = require('@actions/core');

try {
  console.log('nothing to do here');
} catch (error) {
  core.setFailed(error.message);
}