import { Scale, Chord } from '@tonaljs/tonal';
import { getNotesAndEnharmonics } from '../../../utils/scales';
import { latinNotes } from '../../../utils/notes';

export const findChords = (scale, notationType) => {
	const modes = Scale.modeNames(scale);
	const chords = modes.reduce((chords, mode) => {
		const chordsData = buildChordsByMode(mode, notationType);
		return chords.concat(chordsData);
	}, []);
	return chords;
};

const buildChordsByMode = (mode, notationType) => {
	const chordsInTonic = Scale.scaleChords(mode.join(' '));
	const chordsData = chordsInTonic.map(chord =>
		parseChord(Chord.getChord(chord, mode[0]), notationType)
	);
	return chordsData;
};

const parseChord = (chordData, notationType) => {
	const { tonic, notes, aliases } = chordData;
	chordData.nameToDisplay = `${notationType !== 'Do' ? tonic : latinNotes[tonic]}${aliases[0]}`;
	chordData.findBy = getNotesAndEnharmonics(notes);
	return chordData;
};
