// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return `![Github License]((https://img.shields.io/badge/license-${license}-success.svg))`
      }
      return ``
    }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return (
        `\n [License](#license)\n`
      )}
      return ``
    }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return (
          `## License/s required :white_check_mark:
          \`\`\`
          This work has been licensed under the ${answers.license}
          \`\`\``
        )}
      return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  ${data.title}
  ${renderLicenseSection(data.getLicense)}
  # Description
  ${data.description}
  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
      
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License 
  ${data.license} 
  # Contributing 
  ${data.contributing}
  # Tests
  ${data.tests}
  # Contact Information 
  * GitHub Username: ${data.userName}
  * Contact Email: ${data.userEmail}
  
`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;