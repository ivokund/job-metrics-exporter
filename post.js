const core = require('@actions/core');
const gh = require('@actions/github');
const exec = require('@actions/exec');

const postMetrics = async () => {
  const startTime = core.getState("startTime");
  const endTime = Date.now();

  console.log('Set start time to ' + new Date().toISOString());

  const diff = endTime - startTime;
  console.log(`Job execution took ${diff}ms`);
  console.log({context: gh.context});

  const payload = {
    job: core.getInput('job') || gh.context.job,
    repo: gh.context.repo.repo,
    duration: diff,
    target: core.getInput('target') || null,
  };
  console.log('Metrics payload', payload);

  core.setOutput('start', startTime);

  console.log('Posting metrics data to:', core.getInput('url'));
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
