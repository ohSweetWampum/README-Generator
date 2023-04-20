import inquirer from 'inquirer';
import fs from 'fs/promises';
// making the prompts
const questions = [{
		type: 'input',
		name: 'title',
		message: 'What is the title of your application?',
	}, {
		type: 'input',
		name: 'breif',
		message: 'Enter a 1 sentence description of your application',
	}, {
		type: 'input',
		name: 'website',
		message: 'Enter link to deployed site',
	}, {
		type: 'input',
		name: 'description',
		message: 'Enter a description of your application',
	},
	//table of contents
	{
		type: 'input',
		name: 'installation',
		message: 'Provide any installation instructions',
	}, {
		type: 'input',
		name: 'usage',
		message: 'Provide description of how to use your application:',
	}, {
		type: 'input',
		name: 'technology',
		message: 'Enter links to the offical sites of the technologies you used',
	}, {
		type: 'input',
		name: 'gifUrl',
		message: 'Enter the URL of your demo GIF',
	}, {
		type: 'input',
		name: 'codeSnippet',
		message: 'Enter your code snippet',
	}, {
		type: 'input',
		name: 'codeDescription',
		message: 'Provide description of the code snippet',
	}, {
		type: 'input',
		name: 'learning',
		message: 'Provide any things you learned making this application',
	}, {
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub profile link:',
	}, {
		type: 'input',
		name: 'portfolio',
		message: 'Enter your portfolio link',
	}, {
		type: 'input',
		name: 'linkedin',
		message: 'Enter your linkedin profile link',
	}, {
		type: 'input',
		name: 'credits',
		message: 'Credit resources that helped you, add their links',
	}, {
		type: 'list',
		name: 'license',
		message: 'Choose a license for your application:',
		choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
	},
];

function generateReadme(answers) {
	// creating code to make the list items a link
	//technology section
	const technologyList = answers.technology.split(',').map(pair => {
		const [technology, url] = pair.trim().split(' ');
		return `<li><a href="${url}" target="_blank">${technology}</a></li>`;
	}).join('\n');
	//credits section
	const creditsList = answers.Credits.split(',').map(pair => {
		const [Credits, url] = pair.trim().split(' ');
		return `<li><a href="${url}" target="_blank">${Credits}</a></li>`;
	}).join('\n');
	return `# ${answers.title}
	
  
  ## Title

  ${answers.title}
  
  ## About
  
  ${answers.breif}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Website](#website)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technology](#technology)
  - [Demo](#demo)
  - [Code Snippet](#code-snippet)
  - [Learning](#learning)
  - [Contact](#contact)
  - [Credits](#credits)
  - [License](#license)
  
  ## Website
  
  ${answers.website}
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Technology
  
   <ul>
  ${technologyList}
  </ul>
  
  ## Demo
  
  ![Demo GIF](${answers.gifUrl})
  
  ## Code Snippet
  
  \`\`\`
  ${answers.codeSnippet}
  \`\`\`

  ### Description
  
  ${answers.codeDescription}
  
  ## Learning
  
  ${answers.learning}
  
  ## Contact
  
  - [GitHub Profile](${answers.github})
  - [Portfolio](${answers.portfolio})
  - [LinkedIn](${answers.linkedin})
  
  ## Credits
  
  <ul>
  ${creditsList}
  </ul>
  
  ## License
![License](https://img.shields.io/badge/license-${answers.license.replace(/ /g, '%20')}-yellow)
This project is protected by the ${answers.license} License.
`;
 
}

 

