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
    handler: function(argv){
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
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note ')
    }
})
// console.log(yargs.argv)
yargs.parse()