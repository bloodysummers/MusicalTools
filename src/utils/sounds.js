import Sound from 'react-native-sound';

const notes = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];

export const sounds = notes.reduce((all, note) => {
    for (let i = 4; i < 8; i++) {
        all[`${note}${i}`] = new Sound(`piano_${note}${i}.mp3`, Sound.MAIN_BUNDLE);
    }
    return all;
}, {});
