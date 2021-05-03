// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Boost Software License 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "Open Software License 3.0") {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]`;
  } else if (license === "None") {
    license = "";
    return license;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "GNU GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Boost Software License 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else if (license === "Mozilla") {
    return `!https://opensource.org/licens4es/MPL-2.0`;
  } else if (license === "Open Software License 3.0") {
    return `https://opensource.org/licenses/OSL-3.0`;
  } else {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    license = "";
    return license;
  } else {
    return `## License:
  Licensed under ${license}.<br/>
  For more information, visit this link.<br/>
  ${renderLicenseLink(license)}
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  <h1 align="center">${data.title} 👋</h1>

  <p align="center">
    <img src="https://img.shields.io/github/repo-size/MichaelPappas2662/ReadMeGenerator" />
    <img src="https://img.shields.io/github/languages/top/MichaelPappas2662/ReadMeGenerator"  />
    <img src="https://img.shields.io/github/issues/MichaelPappas2662/ReadMeGenerator" />
    <img src="https://img.shields.io/github/last-commit/MichaelPappas2662/ReadMeGenerator" >    
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
</p>


  # Description
  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  # Contributing 
  ${data.contribute}
  # Tests
  ${data.tests}
  # Contact Information 
  ![Developer Profile Picture](${data.avatar_url}) 
  * GitHub Username: ${data.username}
  * Contact Email: ${data.userEmail}
  
`;
}

module.exports =  {
  generateMarkdown 
 };