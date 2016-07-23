import {Component} from '@angular/core';
import {Note} from './note'

@Component({
    moduleId: module.id,
    selector: 'notes-app',
    templateUrl: 'notes.component.html',
    styles: [],
    directives: []
})
export class NotesComponent {

    public addNoteText:string;
    public notes:Note[] = [];

    addNote() {

        if (this.addNoteText) {
            var note = new Note();
            note.noteText = this.addNoteText;
            this.notes.push(note);

            this.addNoteText = "";
        }
        else {
            alert('Enter Note');
        }
    }

    deleteNote(selectedNote) {
        this.notes = this.notes.filter(n => n.noteText !== selectedNote.noteText);
    }
}