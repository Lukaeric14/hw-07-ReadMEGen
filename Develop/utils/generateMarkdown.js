
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
  if (projectLicense === 'MIT') {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (projectLicense === 'Boost') {
    licenseLink = `[Boost](https://www.boost.org/users/license.html)`;
  }
  if (projectLicense === 'Apache') {
    licenseLink = `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (projectLicense === 'ISC') {
    licenseLink = `[Bash](https://www.gnu.org/software/bash/#:~:text=Licensing,your%20option)%20any%20later%20version.)`;
  } 
  if (projectLicense === 'Mozilla') {
    licenseLink = `[Mozilla](https://www.mozilla.org/en-US/MPL/)`;
  }
  return licenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftMarkdown = `
  # ${data.projectName}
  ${renderLicenseSection(data.projectLicense)}
  ## Description
  ${data.projectDescription}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  ## Installation
  ${data.projectInstallation}
  ## Usage
  ${data.projectUsage}
  ## Questions
  For any questions, contact me at my [GitHub](https://github.com/${data.github}).
  `;
  
    return draftMarkdown
  }

module.exports = generateMarkdown;
