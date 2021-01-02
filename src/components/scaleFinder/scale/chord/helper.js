import { Note } from '@tonaljs/tonal';

export const getNotesWithOctave = notes => {
    let octave = 4;
    let lastItemIndex = -1;
    const notesWithOctave = notes.reduce((notes, note) => {
        const { step } = Note.get(note);
        if (step < lastItemIndex) octave++;
        lastItemIndex = step;
        notes.push(`${note}${octave}`);
        return notes;
    }, []);
    return notesWithOctave;
};