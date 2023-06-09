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
			message: 'Enter the names and links of the technologies you used, separated by commas (e.g., Name1 URL1, Name2 URL2)',
		}, {
			type: 'input',
			name: 'gifUrl',
			message: 'Enter the URL of your demo GIF',
		}, {
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
			message: 'Credit resources that helped you, add their names and links separated by commas (e.g., Name1 URL1, Name2 URL2)',
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
	// technology section
	const technologyList = answers.technology
		.split(",")
		.map((pair) => {
			const [technology, url] = pair.trim().split(" ");
			return `<a href="${url}" target="_blank">${technology}</a>`;
		})
		.join(", ");

	// credits section
	const creditsList = answers.credits
		.split(",")
		.map((pair) => {
			const [credits, url] = pair.trim().split(" ");
			return `<a href="${url}" target="_blank">${credits}</a>`;
		})
		.join(", ");
		const section = (title, content) => {
			return content ? `## ${title}\n\n${content}\n\n` : "";
		  };

	return `# ${answers.title}
  
   
${section("License", `![License](https://img.shields.io/badge/license-${answers.license.replace(/ /g, "%20")}-yellow)\nThis project is covered by the ${answers.license} License.`)}

${section("About", answers.brief)}

${section("Description", answers.description)}

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

${section("Website", answers.website)}

${section("Installation", answers.installation)}

${section("Usage", answers.usage)}

${section("Technology", technologyList)}

${section("Demo", `![Demo GIF](${answers.gifUrl})`)}

${section("Learning", answers.learning)}

${section("Contact", `- [GitHub Profile](https://github.com/${answers.github})\n- [Portfolio](${answers.portfolio})\n- [LinkedIn](${answers.linkedin})`)}

${section("Credits", creditsList)}

${section("Contributing", answers.contributing)}

${section("Tests", answers.testInstructions)}

## Questions

If you have any questions about this README generator, please contact me at [${answers.email}](mailto:${answers.email}) or check out my [GitHub Profile](https://github.com/${answers.github}).
`;
}