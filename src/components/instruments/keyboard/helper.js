import Sound from 'react-native-sound';

export const keys = [
    { note: 'C', latin: 'Do', whole: true, sound: 'c4' },
    { note: 'C#', flatNote: 'D♭', latin: 'Do#', flatLatin: 'Re♭', sound: 'db4' },
    { note: 'D', latin: 'Re', whole: true, sound: 'd4' },
    { note: 'D#', flatNote: 'E♭', latin: 'Re#', flatLatin: 'Mi♭', sound: 'eb4' },
    { note: 'E', latin: 'Mi', whole: true, sound: 'e4' },
    { note: 'F', latin: 'Fa', whole: true, sound: 'f4' },
    { note: 'F#', flatNote: 'G♭', latin: 'Fa#', flatLatin: 'Sol♭', sound: 'gb4' },
    { note: 'G', latin: 'Sol', whole: true, sound: 'g4' },
    { note: 'G#', flatNote: 'A♭', latin: 'Sol#', flatLatin: 'La♭', sound: 'ab4' },
    { note: 'A', latin: 'La', whole: true, sound: 'a4' },
    { note: 'A#', flatNote: 'B♭', latin: 'La#', flatLatin: 'Si♭', sound: 'bb4' },
    { note: 'B', latin: 'Si', whole: true, sound: 'b4' }
];

export const sounds = keys.reduce((all, key) => {
    all[key.sound] = new Sound(`piano_${key.sound}.mp3`, Sound.MAIN_BUNDLE);
    return all;
}, {});