import Sound from 'react-native-sound';
import notes from '../../../utils/notes';
const { C, Cs, Db, D, Ds, Eb, E, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

export const keys = [
    { note: C, whole: true, sound: 'c4' },
    { note: Cs, flat: Db, sound: 'db4' },
    { note: D, whole: true, sound: 'd4' },
    { note: Ds, flat: Eb, sound: 'eb4' },
    { note: E, whole: true, sound: 'e4' },
    { note: F, whole: true, sound: 'f4' },
    { note: Fs, flat: Gb, sound: 'gb4' },
    { note: G, whole: true, sound: 'g4' },
    { note: Gs, flat: Ab, sound: 'ab4' },
    { note: A, whole: true, sound: 'a4' },
    { note: As, flat: Bb, sound: 'bb4' },
    { note: B, whole: true, sound: 'b4' }
];

export const sounds = keys.reduce((all, key) => {
    all[key.sound] = new Sound(`piano_${key.sound}.mp3`, Sound.MAIN_BUNDLE);
    return all;
}, {});