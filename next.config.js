// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "blue-color-react/";
let basePath = "/blue-color-react";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  console.log("repo: ", repo);
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};
