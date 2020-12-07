// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'This file was created using Node JS.');
// fs.appendFileSync('notes.txt', ' Hello, I am Ritik.');

// const name = require('./utils.js');
// const add = require('./utils.js');
// const sum = add(6, -3);
// console.log(sum);

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
// const getNotes = require('./notes.js');
const notes = require('./notes.js');
const { readNote } = require('./notes.js');
// const get = getNotes();
// console.log(get);
// // console.log(validator.isEmail('ritik@example.com'));
// // console.log(validator.isURL('wkd.w'));
// console.log(chalk.green.inverse.bold("Success"));
// // console.log(chalk.red.bold("Error"));
// // console.log(process.argv);
// console.log(process.argv[2]);

// const command = process.argv[2];
// if(command === 'add'){
//     console.log('Adding note!');
// } else if(command === 'remove'){
//     console.log('Removing note!');
// }

// Customising yargs version
yargs.version('1.1.0');
//console.log(process.argv);
//console.log(yargs.argv);

// Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Add the new note!', argv);
        // console.log('Title: '+argv.title);
        // console.log('Body: '+argv.body);
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('Removing the note!');
        notes.removeNote(argv.title);

    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler(argv){
        //console.log('Listing out all the notes!');
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Reading out all the notes!');
        notes.readNote(argv.title);
    }
});

// console.log(yargs.argv);
yargs.parse();