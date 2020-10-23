const core = require('@actions/core');
const gh = require('@actions/github');
const exec = require('@actions/exec');

const postMetrics = async () => {
  const startTime = core.getState("startTime");
  core.info(`Read startTime from state: ${startTime}`);
  const endTime = Date.now();

  core.info('Start time is ' + new Date(+startTime).toISOString());

  const diff = endTime - startTime;
  core.info(`Job execution took ${diff}ms`);

  const payload = {
    job: core.getInput('job') || gh.context.job,
    repo: gh.context.repo.repo,
    duration: diff,
    target: core.getInput('target') || null,
  };
  console.log('Metrics payload', payload);

  core.setOutput('start', startTime);
  core.info(`Set output variable "start" to ${startTime}`);

  core.info(`Posting metrics data to: ${core.getInput('url')}`);
  await exec.exec('curl', [
    core.getInput('url'),
    `--data`, JSON.stringify(payload),
    '--header', 'Content-Type: application/json',
    '--request', 'POST',
    '--fail'
  ]);
};


postMetrics().catch((error) => {
  core.setFailed(error.message);
});
