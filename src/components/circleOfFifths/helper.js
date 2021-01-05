import { Chord, Mode } from '@tonaljs/tonal';

const getTriadData = triadName => {
    return Chord.get(triadName);
};

export const getTriads = (key, type) => {
    return Mode.triads(type, key).map(triad => getTriadData(triad));
};