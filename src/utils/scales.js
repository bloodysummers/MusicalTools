import { Scale, Note, ScaleType } from '@tonaljs/tonal';

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

const revertNameWithAlias = scales => {
    return scales.map(scale => {
        const alias = scale.aliases[0];
        const { type, tonic } = scale;
        return {
            ...scale,
            name: `${tonic} ${alias}`,
            aliases: [type],
            type: alias
        };
    });
};

export const majorScales = scaleBuilder('major');
const minors = scaleBuilder('minor');
export const minorScales = revertNameWithAlias(minors);
export const harmonicMinorScales = scaleBuilder('harmonic minor');
export const melodicMinorScales = scaleBuilder('melodic minor');
export const regularScales = [
    ...majorScales,
    ...minorScales,
    ...harmonicMinorScales,
    ...melodicMinorScales
];

const ionians = scaleBuilder('ionian');
export const ionianScales = revertNameWithAlias(ionians);
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

export const majorPentatonicScales = scaleBuilder('pentatonic');
export const minorPentatonicScales = scaleBuilder('minor pentatonic');
export const pentatonicScales = [
    ...majorPentatonicScales,
    ...minorPentatonicScales
];

export const majorBluesScales = scaleBuilder('major blues');
export const minorBluesScales = scaleBuilder('minor blues');
export const bluesScales = [
    ...majorBluesScales,
    ...minorBluesScales
];

export const augmentedScales = scaleBuilder('augmented');
export const diminishedScales = scaleBuilder('diminished');
export const augmentedAndDiminishedScales = [
    ...augmentedScales,
    ...diminishedScales
];