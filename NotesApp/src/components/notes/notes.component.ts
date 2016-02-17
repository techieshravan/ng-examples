import {Component} from 'angular2/core';
import {Note} from './note'

@Component({
    selector: 'notes-app',
    templateUrl: 'src/components/notes/notes.html',
    styles:[],
    directives: []
})
export class NotesComponent {

    public addNoteText: string;
    public notes: Note[] = [];

    addNote(){

        if(this.addNoteText) {
            var note = new Note();
            note.noteText = this.addNoteText;
            this.notes.push(note);

            this.addNoteText = "";
        }
        else {
            alert('Enter Note');
        }
    }

    deleteNote(note) {
        console.log('deleteNote');
        console.log(note);
    }
}