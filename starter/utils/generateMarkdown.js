// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ``
}

const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `*[License](#license)\n`
  }
  return``;

}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents
  
  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Test](#test)

  *[Questions](#questions)

  ## Installation

  To instrall necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage 
  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  If you have question about the respo, contact me directly at ${data.email}.

  You can find more of my work at [${data.github}] (https://github.com/${data.github}).



  




`;
}

module.exports = generateMarkdown;
