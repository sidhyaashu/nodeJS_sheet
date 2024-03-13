#!/usr/bin/env node

const dotenv = require('dotenv');
dotenv.config();

const { program } = require('commander');
const prompt = require('prompt');
const inquirer = require('inquirer');

program
  .option('-e, --env', 'Show environment variables')
  .option('-a, --args', 'Show command line arguments')
  .option('-i, --input', 'Take input')
  .option('-x, --exit <code>', 'Exit with code')
  .parse(process.argv);

if (program.env) {
  console.log('Environment variables:');
  console.log(process.env);
}

if (program.args) {
  console.log('Command line arguments:');
  console.log(process.argv);
}

if (program.input) {
  console.log('Please enter something:');
  // Using process.stdin
  process.stdin.once('data', (data) => {
    console.log('You entered:', data.toString().trim());
    process.exit(0);
  });
}

if (program.exit) {
  const exitCode = parseInt(program.exit);
  console.log(`Exiting with code: ${exitCode}`);
  process.exit(exitCode);
}

if (!process.argv.slice(2).length) {
  prompt.start();
  prompt.get(['input'], (err, result) => {
    console.log('Prompt result:', result.input);
  });
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'input',
      message: 'Using inquirer, please enter something:',
    },
  ])
  .then((answers) => {
    console.log('Inquirer result:', answers.input);
  });
