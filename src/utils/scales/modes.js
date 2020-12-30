import notes from '../notes';
const { C, Cs, Db, D, Ds, Eb, E, Fb, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

export default [
    {
        name: 'C ionian',
        root: C,
        category: 'ionian',
        latinName: 'Do jónico',
        scale: [C, D, E, F, G, A, B],
        latinScale: [Do, Re, Mi, Fa, Sol, La, Si],
        findBy: []
    },
    {
        name: 'D dorian',
        root: D,
        category: 'dorian',
        latinName: 'Re dórico',
        scale: [D, E, F, G, A, B, C],
        latinScale: [Re, Mi, Fa, Sol, La, Si, Do],
        findBy: []
    },
    {
        name: 'E phrygian',
        root: E,
        category: 'phrygian',
        latinName: 'Mi frigio',
        scale: [E, F, G, A, B, C, D],
        latinScale: [Mi, Fa, Sol, La, Si, Do, Re],
        findBy: []
    },
    {
        name: 'F lydian',
        root: F,
        category: 'lydian',
        latinName: 'Fa lidio',
        scale: [F, G, A, B, C, D, E],
        latinScale: [Fa, Sol, La, Si, Do, Re, Mi],
        findBy: []
    },
    {
        name: 'G mixolydian',
        root: G,
        category: 'myxolydian',
        latinName: 'Sol mixolidio',
        scale: [G, A, B, C, D, E, F],
        latinScale: [Sol, La, Si, Do, Re, Mi, Fa],
        findBy: []
    },
    {
        name: 'A aeolian',
        root: A,
        category: 'aeolian',
        latinName: 'La eolio',
        scale: [A, B, C, D, E, F, G],
        latinScale: [La, Si, Do, Re, Mi, Fa, Sol],
        findBy: []
    },
    {
        name: 'B locrian',
        root: B,
        category: 'locrian',
        latinName: 'Si locrio',
        scale: [B, C, D, E, F, G, A],
        latinScale: [Si, Do, Re, Mi, Fa, Sol, La],
        findBy: []
    },
    {
        name: 'C# ionian',
        root: Cs,
        category: 'ionian',
        latinName: 'C# jónico',
        scale: [Cs, Ds, F, Fs, Gs, As, C],
        latinScale: [Dos, Res, Fa, Fas, Sols, Las, Do],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db ionian',
            root: Db,
            latinName: 'Reb jónico',
            scale: [Db, Eb, F, Gb, Ab, Bb, C],
            latinScale: [Reb, Mib, Fa, Solb, Lab, Sib, Do]
        }
    },
    {
        name: 'D ionian',
        root: D,
        category: 'ionian',
        latinName: 'Re jónico',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'D# ionian',
        root: Ds,
        category: 'ionian',
        latinName: 'Re# jónico',
        scale: [Ds, F, G, Gs, As, C, D],
        findBy: [Eb, Ab, Bb],
        alt: {
            name: 'Eb ionian',
            root: Eb,
            latinName: 'Mib jónico',
            scale: [Eb, F, G, Ab, Bb, C, D]
        }
    },
    {
        name: 'E ionian',
        root: E,
        category: 'ionian',
        latinName: 'Mi jónico',
        scale: [E, Fs, Gs, A, B, Cs, Ds],
        findBy: [Gb, Ab, Eb]
    },
    {
        name: 'F ionian',
        root: F,
        category: 'ionian',
        latinName: 'Fa jónico',
        scale: [F, G, A, Bb, C, D, E],
        findBy: [As]
    },
    {
        name: 'F# ionian',
        root: Fs,
        category: 'ionian',
        latinName: 'Fa# jónico',
        scale: [Fs, Gs, As, B, Cs, Ds, F],
        findBy: [Gb, Ab, Bb, Db, Eb],
        alt: {
            name: 'Gb ionian',
            root: Gb,
            latinName: 'Solb jónico',
            scale: [Gb, Ab, Bb, B, Db, Eb, F]
        }
    },
    {
        name: 'G ionian',
        root: G,
        category: 'ionian',
        latinName: 'Sol jónico',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'G# ionian',
        root: Gs,
        category: 'ionian',
        latinName: 'Sol# jónico',
        scale: [Gs, As, C, Cs, Ds, F, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab ionian',
            root: Ab,
            latinName: 'Lab jónico',
            scale: [Ab, Bb, C, Db, Eb, F, G]
        }
    },
    {
        name: 'A ionian',
        root: A,
        category: 'ionian',
        latinName: 'La jónico',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'A# ionian',
        root: As,
        category: 'ionian',
        latinName: 'La# jónico',
        scale: [As, C, D, Ds, F, G, A],
        findBy: [Bb, Eb],
        alt: {
            name: 'Bb ionian',
            root: Bb,
            latinName: 'Sib jónico',
            scale: [Bb, C, D, Eb, F, G, A]
        }
    },
    {
        name: 'B ionian',
        root: B,
        category: 'ionian',
        latinName: 'Si jónico',
        scale: [B, Cs, Ds, E, Fs, Gs, As],
        findBy: [Eb, Db, Gb, Ab, Bb]
    }
];