import notes from './notes';
const { C, Cs, Db, D, Ds, Eb, E, Fb, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

export default [
    {
        name: 'C major',
        root: C,
        latinName: 'Do mayor',
        scale: [C, D, E, F, G, A, B],
        latinScale: [Do, Re, Mi, Fa, Sol, La, Si],
        findBy: []
    },
    {
        name: 'C# major',
        root: Cs,
        latinName: 'C# mayor',
        scale: [Cs, Ds, F, Fs, Gs, As, C],
        latinScale: [Dos, Res, Fa, Fas, Sols, Las, Do],
        findBy: [Db, Eb, Gb, Ab, Bb]
    },
    {
        name: 'Db major',
        root: Db,
        latinName: 'Reb mayor',
        scale: [Db, Eb, F, Gb, Ab, Bb, C],
        latinScale: [],
        findBy: [Cs, Ds, Fs, Gs, As]
    },
    {
        name: 'D major',
        root: D,
        latinName: 'Re mayor',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'E major',
        root: E,
        latinName: 'Mi mayor',
        scale: [E, Fs, Gs, A, B, Cs, Ds],
        findBy: [Gb, Ab, Eb]
    },
    {
        name: 'F major',
        root: F,
        latinName: 'Fa mayor',
        scale: [F, G, A, Bb, C, D, E],
        findBy: [As]
    },
    {
        name: 'G major',
        root: G,
        latinName: 'Sol mayor',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'A major',
        root: A,
        latinName: 'La mayor',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'B major',
        root: B,
        latinName: 'Si mayor',
        scale:[B, Cs, Ds, E, Fs, Gs, As],
        findBy: [Eb, Db, Gb, Ab, Bb]
    },
    {
        name: 'A minor',
        latinName: 'La menor',
        scale: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        findBy: []
    },
];