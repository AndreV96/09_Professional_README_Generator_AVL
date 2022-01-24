//MISSING FROM FINISHED PROJECT:   When code is finished make a video, take screenshots

function renderLicenseBadge(licenseChoice) {
  const badges = {
    "MIT" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "APACHE 2.0" : "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL v3" : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "EPL 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "None": ""
  }
  return badges[licenseChoice]
}
function renderLicenseSection(licenseChoice) {
  if (licenseChoice === "None") return "No license"
  return `This project is licensed under the ${licenseChoice} license`

}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install necessary dependencies, follow the next steps and run these commands:

\`\`\`bash
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${licenseSection}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`bash
${data.tests}
\`\`\`

## Questions

If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
