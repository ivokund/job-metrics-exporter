const core = require('@actions/core');

try {
  core.info('No actions done in this step');
} catch (error) {
  core.setFailed(error.message);
}