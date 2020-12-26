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

export const getNoteByFret = (string, fret) => {
    const index = tones.findIndex(tone => tone.note === string);
    const fretIndex = (index+fret+1)%12;
    const note = tones[fretIndex];
    return note;
};