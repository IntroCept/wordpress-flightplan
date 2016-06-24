var plan = require('flightplan');
var webRoot = {
  staging: 'path/to/staging/wordpress/theme',
  production: 'path/to/staging/wordpress/theme'
};

plan.target('staging', [
  {
    host: 'host',
    username: 'username',
    password: 'password',
    privateKey: 'path/to/file/key.pem',
    agent: process.env.SSH_AUTH_SOCK
  }
], {
  webRoot: webRoot.staging
});

plan.target('production', [
  {
    host: 'host',
    username: 'username',
    password: 'password',
    privateKey: 'path/to/file/key.pem',
    agent: process.env.SSH_AUTH_SOCK
  }
], {
  webRoot: webRoot.production
});

plan.local(function (local) {
  local.log('Searching for file to upload');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.log('Search Complete.........');
  var webRoot = plan.runtime.options.webRoot;
  local.log('Uploading files to :: ' + webRoot);
  local.transfer(filesToCopy, webRoot);
  local.log('Uploading Complete.......');
});
