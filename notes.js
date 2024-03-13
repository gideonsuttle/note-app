// const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log('New note added!')
    }
    else{
        console.log('Note title already taken!')
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log('Notes removed')
    }else{
        console.log('No note found')
    }

    saveNotes(notesToKeep)

}

const listNotes = () => {
    const notes = loadNotes()
    console.log("Your notes :")

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const found_note = notes.find((note) => title === note.title)
    if(found_note){
        console.log("Title : ", found_note.title)
        console.log("Bode : \n", found_note.body)
    }
    else{

    }
    
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}