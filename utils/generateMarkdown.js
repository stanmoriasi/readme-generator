// TODO: Create a function that returns a license badge based on which license is passed in

import inquirer from "inquirer";

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return '';
  }
  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contribution](#contribution)
  - [Tests](#tests) 
  - [username](#username)  
  - [Email](#email) 
`;
}

export default generateMarkdown;
