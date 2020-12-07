const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return "Your notes ...";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // console.log(notes);

    const duplicateNotes = notes.filter( (note) => {
        return note.title === title
    })

    const duplicateNote = notes.find((note) => note.title === title);


    // if(duplicateNotes.length === 0)
    // {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     console.log(chalk.green.inverse('New note added!'));
    // }
    // else{
    //     console.log(chalk.red.inverse('Note title already taken!'));
    // }

    debugger

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('New note added!'));
    }
    else{
        console.log(chalk.red.inverse('Note title already taken!'));
    }


    saveNotes(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    // console.log(title);

    const notesToKeep = notes.filter( (note) => {
        return note.title !== title 
    });

    if(notesToKeep.length !== notes.length)
    {
        console.log(chalk.green.inverse("Note Removed"));
    }
    else{
        console.log(chalk.red.inverse("No note found!"));
    }

    saveNotes(notesToKeep);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your Notes'))
    notes.forEach( (note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    let flag = 0;
    notes.forEach((note) => {
        if(note.title === title)
        {
            console.log(chalk.bgMagenta(note.title));
            console.log(note.body);
            flag = 1;
        }
    })

    if(flag == 0)
    {
        console.log(chalk.red.inverse('No Such Note Found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}




const loadNotes = () => {

try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); 
} catch(e){
    return [];
}
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};

// module.exports = getNotes;
