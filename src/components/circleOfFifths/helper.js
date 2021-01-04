import notes from '../../utils/notes';
import theme from '../../utils/theme';

const { C, Cs, Db, D, Ds, Eb, E, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;
const
c = 'c',
cs = 'c#',
db = 'db',
d = 'd',
ds = 'd#',
eb = 'eb',
e = 'e',
f = 'f',
fs = 'f#',
gb = 'gb',
g = 'g',
gs = 'g#',
ab = 'ab',
a = 'a',
as = 'a#',
bb = 'bb',
b = 'b';

export const keys = [
    {
        major: 'C',
        minor: 'Am',
        dim: 'B°'
    },
    {
        major: 'G',
        minor: 'Em',
        dim: 'F#°'
    },
    {
        major: 'D',
        minor: 'Bm',
        dim: 'C#°'
    },
    {
        major: 'A',
        minor: 'F#m',
        dim: 'G#°'
    },
    {
        major: 'E',
        minor: 'C#m',
        dim: 'D#°'
    },
    {
        major: 'B/Cb',
        minor: 'G#m',
        dim: 'A#°'
    },
    {
        major: 'Gb/F#',
        minor: 'Ebm',
        dim: 'F°'
    },
    {
        major: 'Db/C#',
        minor: 'Bbm',
        dim: 'C°'
    },
    {
        major: 'Ab',
        minor: 'Fm',
        dim: 'G°'
    },
    {
        major: 'Eb',
        minor: 'Cm',
        dim: 'D°'
    },
    {
        major: 'Bb',
        minor: 'Gm',
        dim: 'A°'
    },
    {
        major: 'F',
        minor: 'Dm',
        dim: 'E°'
    }
];

const keysLength = 12;

const getPosition = (selected, i) => (selected+i+keysLength)%keysLength;

const getColor = (index, selected, type) => {
    if (type === 'major') {
        if (index === selected) return theme['color-success-500'];
        else if (index === getPosition(selected, -1)) return theme['color-primary-500'];
        else if (index === getPosition(selected, 1)) return theme['color-primary-500'];
        else return '#a3a2ab';
    } else if (type === 'minor') {
        if (index === selected) return theme['color-primary-300'];
        else if (index === getPosition(selected, -1)) return theme['color-primary-400'];
        else if (index === getPosition(selected, 1)) return theme['color-primary-400'];
        else return '#b3b2bb';
    } else if (type === 'dim') {
        if (index === selected) return theme['color-primary-200'];
        else return '#c3c2cb'
    }
};

const getArc = (index, selected) => {
    if (index === selected) return {
        innerRadius: '67%',
        outerRadius: '103%',
        cornerRadius: 4
    };
};

export const pieData = (selected, onPress, type) => keys.map((key, i) => {
    return {
        name: key[type],
        value: 30,
        svg: {
            fill: getColor(i, selected, type),
            onPress: () => onPress(i, key)
        },
        arc: type === 'major' ? getArc(i, selected) : null,
        key: `pie-${key[type]}`
    };
});