import Sound from 'react-native-sound';

export const tones = [
    { note: 'C', latin: 'Do', sound: 'c' },
    { note: 'C#', flatNote: 'D♭', latin: 'Do#', flatLatin: 'Re♭', sound: 'db' },
    { note: 'D', latin: 'Re', sound: 'd' },
    { note: 'D#', flatNote: 'E♭', latin: 'Re#', flatLatin: 'Mi♭', sound: 'eb' },
    { note: 'E', latin: 'Mi', sound: 'e' },
    { note: 'F', latin: 'Fa', sound: 'f' },
    { note: 'F#', flatNote: 'G♭', latin: 'Fa#', flatLatin: 'Sol♭', sound: 'gb' },
    { note: 'G', latin: 'Sol', sound: 'g' },
    { note: 'G#', flatNote: 'A♭', latin: 'Sol#', flatLatin: 'La♭', sound: 'ab' },
    { note: 'A', latin: 'La', sound: 'a' },
    { note: 'A#', flatNote: 'B♭', latin: 'La#', flatLatin: 'Si♭', sound: 'bb' },
    { note: 'B', latin: 'Si', sound: 'b' }
];

export const sounds = tones.reduce((all, key) => {
    const allOctaves = {};
    for (let i = 1; i <= 5; i++) {
        allOctaves[`${key.sound}${i}`] = new Sound(`guitar_${key.sound}${i}.mp3`, Sound.MAIN_BUNDLE);
    }
    all[key.sound] = allOctaves;
    return all;
}, {});

export const getNoteByFret = (string, fret, octave) => {
    const index = tones.findIndex(tone => tone.note === string);
    const fretIndex = (index+fret)%12;
    const note = tones[fretIndex];
    note.octave = fretIndex < index ? octave+1 : octave;
    return note;
};

export const getOctaveByFret = () => {
    // ...
};