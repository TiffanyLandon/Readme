// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license) {
    return '![License:${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license) {
    return '![License:${license}]Click here for the license link](https://opensource.org/licenses/${license.replace('; ')})'
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license) {
    return '![license:${license}]'
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.confirmDescription}

  ## Table of content
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test) 
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installationUsage}

  ## Usage

  ${data.usageInfo}

  ## Contribution
  
  ${data.contribution}

  ## Test
  ${data.Test}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ##Questions
  
  GitHub Repo](https://github.com/${data.gitHubUsername})
  
  email : reach me for addditional questions ${data.email}

  # Link to the video 
`;
}

module.exports = generateMarkdown;
