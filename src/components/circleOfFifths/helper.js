import notes from '../../utils/notes';
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
        name: C.name,
        relative: a
    },
    {
        name: G.name,
        relative: e
    },
    {
        name: D.name,
        relative: b
    },
    {
        name: A.name,
        relative: fs
    },
    {
        name: E.name,
        relative: cs
    },
    {
        name: B.name,
        relative: gs
    },
    {
        name: Fs.name,
        altName: Gb.name,
        relative: ds
    },
    {
        name: Db.name,
        altName: Cs.name,
        relative: bb
    },
    {
        name: Ab.name,
        relative: f
    },
    {
        name: Eb.name,
        relative: c
    },
    {
        name: Bb.name,
        relative: g
    },
    {
        name: F.name,
        relative: d
    }
];