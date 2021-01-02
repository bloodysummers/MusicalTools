import * as tonal from '@tonaljs/tonal';
const { Scale, Note } = tonal;

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const getNotesAndEnharmonics = scaleNotes => {
    return scaleNotes.reduce((notes, note) => {
        const regularNote = Note.simplify(note);
        notes.push(regularNote);
        const enharmonic = Note.simplify(Note.enharmonic(note));
        if (regularNote !== enharmonic) notes.push(enharmonic);
        return notes;
    }, []);
};

const scaleBuilder = type => {
    return notes.map(note => {
        const scale = Scale.get(`${note} ${type}`);
        const enharmonic = Note.enharmonic(note);
        scale.findBy = getNotesAndEnharmonics(scale.notes);
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

// Regular
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
// Modes
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
// Pentatonic
export const majorPentatonicScales = scaleBuilder('pentatonic');
export const minorPentatonicScales = scaleBuilder('minor pentatonic');
export const pentatonicScales = [
    ...majorPentatonicScales,
    ...minorPentatonicScales
];
// Blues
export const majorBluesScales = scaleBuilder('major blues');
export const minorBluesScales = scaleBuilder('minor blues');
export const compositeBluesScales = scaleBuilder('composite blues');
export const bluesScales = [
    ...majorBluesScales,
    ...minorBluesScales,
    ...compositeBluesScales
];
// Harmonic minor modes
export const locrian6Scales = scaleBuilder('locrian 6');
export const majorAugmentedScales = scaleBuilder('major augmented');
export const dorian4Scales = scaleBuilder('dorian #4');
export const phrygianDominantScales = scaleBuilder('phrygian dominant');
export const lydian9Scales = scaleBuilder('lydian #9');
export const ultraLocrianScales = scaleBuilder('ultralocrian');
export const harmonicMinorModeScales = [
    ...harmonicMinorScales,
    ...locrian6Scales,
    ...majorAugmentedScales,
    ...dorian4Scales,
    ...phrygianDominantScales,
    ...lydian9Scales,
    ...ultraLocrianScales
];
// Melodic minor modes
export const dorianb2Scales = scaleBuilder('dorian b2');
export const lydianAugmentedScales = scaleBuilder('lydian augmented');
export const lydianDominantScales = scaleBuilder('lydian dominant');
export const mixolydianb6Scales = scaleBuilder('mixolydian b6');
export const locrian2Scales = scaleBuilder('locrian #2');
export const alteredScales = scaleBuilder('altered');
export const melodicMinorModeScales = [
    ...melodicMinorScales,
    ...dorianb2Scales,
    ...lydianAugmentedScales,
    ...lydianDominantScales,
    ...mixolydianb6Scales,
    ...locrian2Scales,
    ...alteredScales
];
// Augmented and diminished
export const augmentedScales = scaleBuilder('augmented');
export const diminishedScales = scaleBuilder('diminished');
export const augmentedAndDiminishedScales = [
    ...augmentedScales,
    ...diminishedScales
];