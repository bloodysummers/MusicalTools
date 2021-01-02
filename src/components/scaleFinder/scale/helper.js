import { Scale, Chord } from '@tonaljs/tonal';
import { getNotesAndEnharmonics } from '../../../utils/scales';

export const findChords = scale => {
    const modes = Scale.modeNames(scale);
    const chords = modes.reduce((chords, mode) => {
        const chordsData = buildChordsByMode(mode);
        return chords.concat(chordsData);
    }, []);
    return chords;
};

const buildChordsByMode = mode => {
    const chordsInTonic = Scale.scaleChords(mode.join(' '));
    const chordsData = chordsInTonic.map(chord =>
        parseChord(Chord.getChord(chord, mode[0]))
    );
    return chordsData;
};

const parseChord = chordData => {
    const { symbol, name, tonic, notes } = chordData;
    chordData.nameToDisplay = symbol;
    chordData.subtitle = name !== `${tonic} ` && `(${name})`;
    chordData.findBy = getNotesAndEnharmonics(notes);
    return chordData;
};
