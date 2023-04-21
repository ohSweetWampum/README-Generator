// Packages needed for this application, using import statements instead of require
import fs from "fs";
import inquirer from "inquirer";



// Using inquirer to prompt user
    inquirer
    .prompt([{
		type: 'input',
		name: 'title',
		message: 'What is the title of your application?',
	}, {
		type: 'input',
		name: 'brief',
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
	},  {
		type: 'input',
		name: 'learning',
		message: 'Provide any things you learned making this application',
	}, {
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub username',
	}, 

	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address',
	},
	

	{
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
	}, 
	
	{
		type: 'input',
		name: 'contributing',
		message: 'Enter the contributing guidelines for your application:',
	},
	{
		type: 'input',
		name: 'testInstructions',
		message: 'Enter test instructions for your application:',
	},
	
	
	{
		type: 'list',
		name: 'license',
		message: 'Choose a license for your application:',
		choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
	}
])
.then((answers) => {
    fs.writeFile("README.md", generateReadme(answers), (err) =>
      console.log(err ? err : "Congratulations, you have successfully created your README.md file, check your current directory to find the file!")
    );
  });

  function generateReadme(answers) {
	// creating code to make the list items a link
	// technology section
	const technologyList = answers.technology.split(",").map((pair) => {
	  const [technology, url] = pair.trim().split(" ");
	  return `<li><a href="${url}" target="_blank">${technology}</a></li>`;
	}).join("\n");
	// credits section
	const creditsList = answers.credits.split(",").map((pair) => {
	  const [credits, url] = pair.trim().split(" ");
	  return `<li><a href="${url}" target="_blank">${credits}</a></li>`;
	}).join("\n");
  
	return `# ${answers.title}
  
	## License
  
	![License](https://img.shields.io/badge/license-${answers.license.replace(/ /g, '%20')}-yellow)
	This project is covered by the ${answers.license} License.
  
	## About
  
	${answers.brief}
  
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
  
  
	## Learning
  
	${answers.learning}
  
	## Contact
  
	- [GitHub Profile](https://github.com/${answers.github})
	- [Portfolio](${answers.portfolio})
	- [LinkedIn](${answers.linkedin})
  
	## Credits
  
	<ul>
	${creditsList}
	</ul>
  
	## Contributing
  
	${answers.contributing}
  
	## Tests
  
	${answers.testInstructions}
  
	## Questions
  
	If you have any questions about this README generator, please contact me at [${answers.email}](mailto:${answers.email}) or check out my [GitHub Profile](https://github.com/${answers.github}).
  }`;
  } 
  