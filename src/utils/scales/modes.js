import notes from '../notes';
const { C, Cs, Db, D, Ds, Eb, E, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

const MODES = 'modes';
const IONIAN = 'ionian';
const DORIAN = 'dorian';
const PHRYGIAN = 'phrygian';
const LYDIAN = 'lydian';
const MIXOLYDIAN = 'mixolydian';
const AEOLIAN = 'aeolian';
const LOCRIAN = 'locrian';

export default [
    // Ionian
    {
        name: 'C ionian',
        root: C,
        type: MODES,
        category: IONIAN,
        latinName: 'Do jónico',
        scale: [C, D, E, F, G, A, B],
        findBy: []
    },
    {
        name: 'C# ionian',
        root: Cs,
        type: MODES,
        category: IONIAN,
        latinName: 'Do# jónico',
        scale: [Cs, Ds, F, Fs, Gs, As, C],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db ionian',
            root: Db,
            latinName: 'Reb jónico',
            scale: [Db, Eb, F, Gb, Ab, Bb, C]
        }
    },
    {
        name: 'D ionian',
        root: D,
        type: MODES,
        category: IONIAN,
        latinName: 'Re jónico',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'D# ionian',
        root: Ds,
        type: MODES,
        category: IONIAN,
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
        type: MODES,
        category: IONIAN,
        latinName: 'Mi jónico',
        scale: [E, Fs, Gs, A, B, Cs, Ds],
        findBy: [Gb, Ab, Eb]
    },
    {
        name: 'F ionian',
        root: F,
        type: MODES,
        category: IONIAN,
        latinName: 'Fa jónico',
        scale: [F, G, A, Bb, C, D, E],
        findBy: [As]
    },
    {
        name: 'F# ionian',
        root: Fs,
        type: MODES,
        category: IONIAN,
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
        type: MODES,
        category: IONIAN,
        latinName: 'Sol jónico',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'G# ionian',
        root: Gs,
        type: MODES,
        category: IONIAN,
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
        type: MODES,
        category: IONIAN,
        latinName: 'La jónico',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'A# ionian',
        root: As,
        type: MODES,
        category: IONIAN,
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
        type: MODES,
        category: IONIAN,
        latinName: 'Si jónico',
        scale: [B, Cs, Ds, E, Fs, Gs, As],
        findBy: [Eb, Db, Gb, Ab, Bb]
    },
    // Dorian
    {
        name: 'C dorian',
        root: C,
        type: MODES,
        category: DORIAN,
        latinName: 'Do dórico',
        scale: [C, D, Eb, F, G, A, Bb],
        findBy: [Ds, As]
    },
    {
        name: 'C# dorian',
        root: Cs,
        types: MODES,
        category: DORIAN,
        latinName: 'Do# dórico',
        scale: [Cs, Ds, E, Fs, Gs, As, B],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db dorian',
            root: Db,
            latinName: 'Reb dórico',
            scale: [Db, Eb, E, Gb, Ab, Bb, B]
        }
    },
    {
        name: 'D dorian',
        root: D,
        type: MODES,
        category: DORIAN,
        latinName: 'Re dórico',
        scale: [D, E, F, G, A, B, C],
        findBy: []
    },
    {
        name: 'D# dorian',
        root: Ds,
        type: MODES,
        category: DORIAN,
        latinName: 'Re# dórico',
        scale: [Ds, F, Fs, Gs, As, C, Cs],
        findBy: [Eb, Gb, Ab, Bb, Db],
        alt: {
            name: 'Eb dorian',
            root: Eb,
            latinName: 'Mib dórico',
            scale: [Eb, F, Gb, Ab, Bb, C, Db]
        }
    },
    {
        name: 'E dorian',
        root: E,
        type: MODES,
        category: DORIAN,
        latinName: 'Mi dórico',
        scale: [E, Fs, G, A, B, Cs, D],
        findBy: [Gb, Db]
    },
    {
        name: 'F dorian',
        root: F,
        type: MODES,
        category: DORIAN,
        latinName: 'Fa dórico',
        scale: [F, G, Ab, Bb, C, D, Eb],
        findBy: [Gs, As, Ds]
    },
    {
        name: 'F# dorian',
        root: Fs,
        type: MODES,
        category: DORIAN,
        latinName: 'Fa# dórico',
        scale: [Fs, Gs, A, B, Cs, Ds, E],
        findBy: [Gb, Ab, Db, Eb],
        alt: {
            name: 'Gb dorian',
            root: Gb,
            latinName: 'Solb dórico',
            scale: [Gb, Ab, A, B, Db, Eb, E]
        }
    },
    {
        name: 'G dorian',
        root: G,
        type: MODES,
        category: DORIAN,
        latinName: 'Sol dórico',
        scale: [G, A, Bb, C, D, E, F],
        findBy: [As]
    },
    {
        name: 'G# dorian',
        root: Gs,
        type: MODES,
        category: DORIAN,
        latinName: 'Sol# dórico',
        scale: [Gs, As, B, Cs, Ds, F, Fs],
        findBy: [Ab, Bb, Db, Eb, Gb],
        alt: {
            name: 'Eb dorian',
            root: Eb,
            latinName: 'Mib dórico',
            scale: [Ab, Bb, B, Db, Eb, F, Gb]
        }
    },
    {
        name: 'A dorian',
        root: A,
        type: MODES,
        category: DORIAN,
        latinName: 'La dórico',
        scale: [A, B, C, D, E, Fs, G],
        findBy: [Gb]
    },
    {
        name: 'A# dorian',
        root: A,
        type: MODES,
        category: DORIAN,
        latinName: 'La# dórico',
        scale: [As, C, Cs, Ds, F, G, Gs],
        findBy: [Bb, Db, Eb, Ab],
        alt: {
            name: 'Bb dorian',
            root: Bb,
            latinName: 'Sib dórico',
            scale: [Bb, C, Db, Eb, F, G, Ab]
        }
    },
    {
        name: 'B dorian',
        root: B,
        type: MODES,
        category: DORIAN,
        latinName: 'Si dórico',
        scale: [Bb, C, Db, Eb, F, G, Ab],
        findBy: [As, Cs, Ds, Gs]
    },
    // Phrygian
    {
        name: 'C phrygian',
        root: C,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Do frigio',
        scale: [C, Db, Eb, F, G, Ab, Bb],
        findBy: [Cs, Ds, Gs, As]
    },
    {
        name: 'C# phrygian',
        root: Cs,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Do# frigio',
        scale: [Cs, D, E, Fs, Gs, A, B],
        findBy: [Db, Gb, Ab],
        alt: {
            name: 'Db phrygian',
            root: Db,
            latinName: 'Reb frigio',
            scale: [Db, D, E, Gb, Ab, A, B]
        }
    },
    {
        name: 'D phrygian',
        root: D,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Re frigio',
        scale: [D, Eb, F, G, A, Bb, C],
        findBy: [Ds, As]
    },
    {
        name: 'D# phrygian',
        root: Ds,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Re# frigio',
        scale: [Ds, E, Fs, Gs, As, B, Cs],
        findBy: [Eb, Gb, Ab, Bb, Db],
        alt: {
            name: 'Eb phrygian',
            root: Eb,
            latinName: 'Mib frigio',
            scale: [Eb, E, Gb, Ab, Bb, B, Db]
        },
    },
    {
        name: 'E phrygian',
        root: E,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Mi frigio',
        scale: [E, F, G, A, B, C, D],
        findBy: []
    },
    {
        name: 'F phrygian',
        root: F,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Fa frigio',
        scale: [F, Gb, Ab, Bb, C, Db, Eb],
        findBy: [Fs, Gs, As, Cs, Ds]
    },
    {
        name: 'F# phrygian',
        root: Fs,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Fa# frigio',
        scale: [Fs, G, A, B, Cs, D, E],
        findBy: [Gb, Db],
        alt: {
            name: 'Gb phrygian',
            root: Gb,
            latinName: 'Solb frigio',
            scale: [Gb, G, A, B, Db, D, E]
        }
    },
    {
        name: 'G phrygian',
        root: G,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Sol frigio',
        scale: [G, Ab, Bb, C, D, Eb, F],
        findBy: []
    },
    {
        name: 'G# phrygian',
        root: Gs,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Sol# frigio',
        scale: [Gs, A, B, Cs, Ds, E, Fs],
        findBy: [Ab, Db, Eb, Gb],
        alt: {
            name: 'Ab phrygian',
            root: Ab,
            latinName: 'Lab frigio',
            scale: [Ab, A, B, Db, Eb, E, Gb]
        }
    },
    {
        name: 'A phrygian',
        root: A,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'La frigio',
        scale: [A, Bb, C, D, E, F, G],
        findBy: [As]
    },
    {
        name: 'A# phrygian',
        root: As,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'La# frigio',
        scale: [As, B, Cs, Ds, F, Fs, Gs],
        findBy: [Bb, Db, Eb, Gb, Ab],
        alt: {
            name: 'Bb phrygian',
            root: Bb,
            latinName: 'Sib frigio',
            scale: [Bb, B, Db, Eb, F, Gb, Ab]
        }
    },
    {
        name: 'B phrygian',
        root: B,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Si frigio',
        scale: [B, C, D, E, Fs, G, A],
        findBy: [Gb]
    },
    // Lydian
    {
        name: 'C lydian',
        root: C,
        type: MODES,
        category: LYDIAN,
        latinName: 'Do lidio',
        scale: [C, D, E, Fs, G, A, B],
        findBy: [Gb]
    },
    {
        name: 'C# lydian',
        root: Cs,
        type: MODES,
        category: LYDIAN,
        latinName: 'Do# lidio',
        scale: [Cs, Ds, F, G, Gs, As, C],
        findBy: [Db, Eb, Ab, Bb],
        alt: {
            name: 'Eb lydian',
            root: Db,
            latinName: 'Reb lidio',
            scale: [Db, Eb, F, G, Ab, Bb, C]
        }
    },
    {
        name: 'D lydian',
        root: D,
        type: MODES,
        category: LYDIAN,
        latinName: 'Re lidio',
        scale: [D, E, Fs, Gs, A, B, Cs],
        findBy: [Gb, Ab, Db]
    },
    {
        name: 'D# lydian',
        root: Ds,
        type: MODES,
        category: LYDIAN,
        latinName: 'Re# lidio',
        scale: [Ds, F, G, A, As, C, D],
        findBy: [Eb, Bb],
        alt: {
            name: 'Eb lydian',
            root: Eb,
            latinName: 'Mib lidio',
            scale: [Eb, F, G, A, Bb, C, D]
        }
    },
    {
        name: 'E lydian',
        root: E,
        type: MODES,
        category: LYDIAN,
        latinName: 'Mi lidio',
        scale: [E, Fs, Gs, As, B, Cs, Ds],
        findBy: [Gb, Ab, Bb, Db, Eb]
    },
    {
        name: 'F lydian',
        root: F,
        type: MODES,
        category: LYDIAN,
        latinName: 'Fa lidio',
        scale: [F, G, A, B, C, D, E],
        findBy: []
    },
    {
        name: 'F# lydian',
        root: Fs,
        type: MODES,
        category: LYDIAN,
        latinName: 'Fa# lidio',
        scale: [Fs, Gs, As, C, Cs, Ds, F],
        findBy: [Gb, Ab, Bb, Db, Eb],
        alt: {
            name: 'Gb lydian',
            root: Gb,
            latinName: 'Solb lidio',
            scale: [Gb, Ab, Bb, C, Db, Eb, F]
        }
    },
    {
        name: 'G lydian',
        root: G,
        type: MODES,
        category: LYDIAN,
        latinName: 'Sol lidio',
        scale: [G, A, B, Cs, D, E, Fs],
        findBy: [Db, Gb]
    },
    {
        name: 'G# lydian',
        root: Gs,
        type: MODES,
        category: LYDIAN,
        latinName: 'Sol# lidio',
        scale: [Gs, As, C, D, Ds, F, G],
        findBy: [Ab, Bb, Eb],
        alt: {
            name: 'Ab lydian',
            root: Ab,
            latinName: 'Lab lidio',
            scale: [Ab, Bb, C, D, Eb, F, G]
        }
    },
    {
        name: 'A lydian',
        root: A,
        type: MODES,
        category: LYDIAN,
        latinName: 'La lidio',
        scale: [A, B, Cs, Ds, E, Fs, Gs],
        findBy: [Db, Gb, Ab]
    },
    {
        name: 'A# lydian',
        root: As,
        type: MODES,
        category: LYDIAN,
        latinName: 'La# lidio',
        scale: [As, C, D, E, F, G, A],
        findBy: [Bb],
        alt: {
            name: 'Bb lydian',
            root: Bb,
            latinName: 'Sib lidio',
            scale: [Bb, C, D, E, F, G, A]
        }
    },
    {
        name: 'B lydian',
        root: B,
        type: MODES,
        category: LYDIAN,
        latinName: 'Si lidio',
        scale: [B, Cs, Ds, F, Fs, Gs, As],
        findBy: [Db, Eb, Gb, Ab, Bb]
    },
    {
        name: 'G mixolydian',
        root: G,
        type: MODES,
        category: MIXOLYDIAN,
        latinName: 'Sol mixolidio',
        scale: [G, A, B, C, D, E, F],
        findBy: []
    },
    {
        name: 'A aeolian',
        root: A,
        type: MODES,
        category: AEOLIAN,
        latinName: 'La eolio',
        scale: [A, B, C, D, E, F, G],
        findBy: []
    },
    {
        name: 'B locrian',
        root: B,
        type: MODES,
        category: LOCRIAN,
        latinName: 'Si locrio',
        scale: [B, C, D, E, F, G, A],
        findBy: []
    },
    {
        name: 'D# dorian',
        root: Ds,
        type: MODES,
        category: DORIAN,
        latinName: 'Re# dórico',
        scale: [Ds, F, Fs, Gs, As, C, Cs],
        findBy: [Eb, Gb, Ab, Bb, Db],
        alt: {
            name: 'Eb dorian',
            root: Eb,
            latinName: 'Mib dórico',
            scale: [Eb, F, Gb, Ab, Bb, C, Db]
        }
    },
    {
        name: 'F phrygian',
        root: F,
        type: MODES,
        category: PHRYGIAN,
        latinName: 'Fa frigio',
        scale: [F, Fs, Gs, As, C, Cs, Ds],
        findBy: [Gb, Ab, Bb, Db, Eb]
    },
    {
        name: 'F# lydian',
        root: Fs,
        type: MODES,
        category: LYDIAN,
        latinName: 'Fa# lidio',
        scale: [Fs, Gs, As, C, Cs, Ds, F],
        findBy: [Gb, Ab, Bb, Db, Eb],
        alt: {
            name: 'Gb lydian',
            root: Gb,
            latinName: 'Solb lidio',
            scale: [Gb, Ab, Bb, C, Db, Eb, F]
        }
    },
    {
        name: 'G# mixolydian',
        root: Gs,
        type: MODES,
        category: MIXOLYDIAN,
        latinName: 'Sol# mixolidio',
        scale: [Gs, As, C, Cs, Ds, F, Fs],
        findBy: [Ab, Bb, Db, Eb, Gb],
        alt: {
            name: 'Ab mixolydian',
            root: Ab,
            latinName: 'Lab mixolidio',
            scale: [Ab, Bb, C, Db, Eb, F, Gb]
        }
    },
    {
        name: 'A# aeolian',
        root: As,
        type: MODES,
        category: AEOLIAN,
        latinName: 'La# eolio',
        scale: [As, C, Cs, Ds, F, Fs, Gs],
        findBy: [Bb, Db, Eb, Gb, Ab],
        alt: {
            name: 'Bb aeolian',
            root: Bb,
            latinName: 'Sib eolio',
            scale: [Bb, C, Db, Eb, F, Gb, Ab]
        }
    },
    {
        name: 'C locrian',
        root: C,
        type: MODES,
        category: LOCRIAN,
        latinName: 'Do locrio',
        scale: [C, Cs, Ds, F, Fs, Gs, As],
        findBy: [Db, Eb, Gb, Ab, Bb]
    }
];