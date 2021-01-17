import { Chord, Note } from '@tonaljs/tonal';

import theme from '../../..//utils/theme';
import { sounds } from '../../../utils/sounds';

export const keys = [
	{
		major: 'C',
		default: 'C',
		minor: 'A',
		dim: 'B'
	},
	{
		major: 'G',
		default: 'G',
		minor: 'E',
		dim: 'F#'
	},
	{
		major: 'D',
		default: 'D',
		minor: 'B',
		dim: 'C#'
	},
	{
		major: 'A',
		default: 'A',
		minor: 'F#',
		dim: 'G#'
	},
	{
		major: 'E',
		default: 'E',
		minor: 'C#',
		dim: 'D#'
	},
	{
		major: 'B/Cb',
		default: 'B',
		minor: 'G#',
		dim: 'A#'
	},
	{
		major: 'Gb/F#',
		default: 'Gb',
		minor: 'Eb',
		dim: 'F'
	},
	{
		major: 'Db/C#',
		default: 'Db',
		minor: 'Bb',
		dim: 'C'
	},
	{
		major: 'Ab',
		default: 'Ab',
		minor: 'F',
		dim: 'G'
	},
	{
		major: 'Eb',
		default: 'Eb',
		minor: 'C',
		dim: 'D'
	},
	{
		major: 'Bb',
		default: 'Bb',
		minor: 'G',
		dim: 'A'
	},
	{
		major: 'F',
		default: 'F',
		minor: 'D',
		dim: 'E'
	}
];

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

const getChordSounds = (type, key) => {
	const chord = Chord.getChord(type, key);
	const notesWithOctave = getNotesWithOctave(chord.notes);
	return notesWithOctave.map(note => {
		if (note.indexOf('#') > -1 || note.indexOf('Cb') > -1) {
			const enharmonic = Note.enharmonic(note);
			return sounds[enharmonic.toLowerCase()];
		} else return sounds[note.toLowerCase()];
	});
};

export const chords = keys.reduce((chords, key) => {
	chords[`${key.default}M`] = getChordSounds('major', key.default);
	chords[`${key.minor}m`] = getChordSounds('minor', key.minor);
	chords[`${key.dim}d`] = getChordSounds('diminished', key.dim);
	return chords;
}, {});

const keysLength = 12;

const getPosition = (selected, i) => (selected + i + keysLength) % keysLength;

export const getColor = (index, selected, type) => {
	if (type === 'major') {
		if (index === selected) return theme['color-success-500'];
		else if (index === getPosition(selected, -1))
			return theme['color-primary-500'];
		else if (index === getPosition(selected, 1))
			return theme['color-primary-500'];
		else return '#a3a2ab';
	} else if (type === 'minor') {
		if (index === selected) return theme['color-primary-300'];
		else if (index === getPosition(selected, -1))
			return theme['color-primary-400'];
		else if (index === getPosition(selected, 1))
			return theme['color-primary-400'];
		else return '#b3b2bb';
	} else if (type === 'dim') {
		if (index === selected) return theme['color-primary-200'];
		else return '#c3c2cb';
	}
};

export const getArc = (index, selected) => {
	if (index === selected)
		return {
			innerRadius: '67%',
			outerRadius: '103%',
			cornerRadius: 4
		};
};

const postFix = {
	default: 'M',
	minor: 'm',
	dim: 'd'
};

export const playChord = (pressedIndex, type) => {
	const note = keys[pressedIndex][type];
	// let chordKeyNote;
	// if (note.indexOf('#') > -1) {
	//   chordKeyNote = Note.enharmonic(note);
	// } else chordKeyNote = note;
	const chordName = `${note}${postFix[type]}`;
	const chord = chords[chordName];
	chord.forEach(sound => {
		if (sound.isPlaying()) sound.stop();
		sound.play(() => sound.stop());
	});
};
