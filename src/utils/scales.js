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
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db major',
            root: Db,
            latinName: 'Reb mayor',
            scale: [Db, Eb, F, Gb, Ab, Bb, C],
            latinScale: [Reb, Mib, Fa, Solb, Lab, Sib, Do]
        }
    },
    {
        name: 'D major',
        root: D,
        latinName: 'Re mayor',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'D# major',
        root: Ds,
        latinName: 'Re# mayor',
        scale: [Ds, F, G, Gs, As, C, D],
        findBy: [Eb, Ab, Bb],
        alt: {
            name: 'Eb major',
            root: Eb,
            latinName: 'Mib mayor',
            scale: [Eb, F, G, Ab, Bb, C, D]
        }
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
        name: 'F# major',
        root: Fs,
        latinName: 'Fa# mayor',
        scale: [Fs, Gs, As, B, Cs, Ds, F],
        findBy: [Gb, Ab, Bb, Db, Eb],
        alt: {
            name: 'Gb major',
            root: Gb,
            latinName: 'Solb mayor',
            scale: [Gb, Ab, Bb, B, Db, Eb, F]
        }
    },
    {
        name: 'G major',
        root: G,
        latinName: 'Sol mayor',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'G# major',
        root: Gs,
        latinName: 'Sol# mayor',
        scale: [Gs, As, C, Cs, Ds, F, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab major',
            root: Ab,
            latinName: 'Lab mayor',
            scale: [Ab, Bb, C, Db, Eb, F, G]
        }
    },
    {
        name: 'A major',
        root: A,
        latinName: 'La mayor',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'A# major',
        root: As,
        latinName: 'La# mayor',
        scale: [As, C, D, Ds, F, G, A],
        findBy: [Bb, Eb],
        alt: {
            name: 'Bb major',
            root: Bb,
            latinName: 'Sib mayor',
            scale: [Bb, C, D, Eb, F, G, A]
        }
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
        root: A,
        latinName: 'La menor',
        scale: [A, B, C, D, E, F, G],
        findBy: []
    }
];