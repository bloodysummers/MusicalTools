import { Scale, Note } from '@tonaljs/tonal';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const scaleBuilder = type => {
    return notes.map(note => {
        const scale = Scale.get(`${note} ${type}`);
        const enharmonic = Note.enharmonic(note);
        scale.findBy = scale.notes.reduce((notes, note) => {
            const regularNote = Note.simplify(note);
            notes.push(regularNote);
            const enharmonic = Note.simplify(Note.enharmonic(note));
            if (regularNote !== enharmonic) notes.push(enharmonic);
            return notes;
        }, []);
        if (enharmonic !== note) {
            const alt = Scale.get(`${enharmonic} ${type}`);
            scale.alt = alt;
        }
        return scale;
    });
};

export const majorScales = scaleBuilder('major');
export const minorScales = scaleBuilder('minor');
export const harmonicMinorScales = scaleBuilder('harmonic minor');
export const melodicMinorScales = scaleBuilder('melodic minor');
export const regularScales = [
    ...majorScales,
    ...minorScales,
    ...harmonicMinorScales,
    ...melodicMinorScales
];
export const ionianScales = scaleBuilder('ionian');
export const dorianScales = scaleBuilder('dorian');
export const phrygianScales = scaleBuilder('phrygian');
export const lydianScales = scaleBuilder('lydian');
export const mixolydianScales = scaleBuilder('mixolydian');
export const aeolianScales = scaleBuilder('aeolian');
export const locrianScales = scaleBuilder('locrian');
export const modeScales = [
    ...ionianScales,
    ...dorianScales,
    ...phrygianScales,
    ...lydianScales,
    ...mixolydianScales,
    ...aeolianScales,
    ...locrianScales
];
