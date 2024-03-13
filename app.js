// const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js')


// customize yargs version 

yargs.version('1.1.0')

//add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'String'
        },
    },
    handler(argv)  {
        notes.addNote(argv.title, argv.body )
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title: {
            describe: 'Note tile',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            demandOption : true,
            type : "String",
            describe : "The note's title"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
// console.log(yargs.argv)
yargs.parse()