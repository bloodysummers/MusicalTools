import notes from '../notes';
const { C, Cs, Db, D, Ds, Eb, E, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

export default [
    {
        name: 'C major',
        root: C,
        category: 'major',
        latinName: 'Do mayor',
        scale: [C, D, E, F, G, A, B],
        latinScale: [Do, Re, Mi, Fa, Sol, La, Si],
        findBy: []
    },
    {
        name: 'C# major',
        root: Cs,
        category: 'major',
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
        category: 'major',
        latinName: 'Re mayor',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'D# major',
        root: Ds,
        category: 'major',
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
        category: 'major',
        latinName: 'Mi mayor',
        scale: [E, Fs, Gs, A, B, Cs, Ds],
        findBy: [Gb, Ab, Eb]
    },
    {
        name: 'F major',
        root: F,
        category: 'major',
        latinName: 'Fa mayor',
        scale: [F, G, A, Bb, C, D, E],
        findBy: [As]
    },
    {
        name: 'F# major',
        root: Fs,
        category: 'major',
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
        category: 'major',
        latinName: 'Sol mayor',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'G# major',
        root: Gs,
        category: 'major',
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
        category: 'major',
        latinName: 'La mayor',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'A# major',
        root: As,
        category: 'major',
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
        category: 'major',
        latinName: 'Si mayor',
        scale: [B, Cs, Ds, E, Fs, Gs, As],
        findBy: [Eb, Db, Gb, Ab, Bb]
    },
    {
        name: 'C minor',
        root: C,
        category: 'minor',
        latinName: 'Do menor',
        scale: [C, D, Eb, F, G, Ab, Bb],
        findBy: [Ds, Gs, As]
    },
    {
        name: 'C# minor',
        root: Cs,
        category: 'minor',
        latinName: 'Do# menor',
        scale: [Cs, Ds, E, Fs, Gs, A, B],
        findBy: [Db, Eb, Gb, Ab],
        alt: {
            name: 'Db minor',
            root: Db,
            latinName: 'Reb menor',
            scale: [Db, Eb, E, Gb, Ab, A, B]
        }
    },
    {
        name: 'D minor',
        root: D,
        category: 'minor',
        latinName: 'Re menor',
        scale: [D, E, F, G, A, Bb, C],
        findBy: [As]
    },
    {
        name: 'D# minor',
        root: Ds,
        category: 'minor',
        latinName: 'Re# menor',
        scale: [Ds, F, Fs, Gs, As, B, Cs],
        findBy: [Eb, Gb, Ab, Bb, Db],
        alt: {
            name: 'Eb minor',
            root: Eb,
            latinName: 'Mib menor',
            scale: [Eb, F, Gb, Ab, Bb, B, Db]
        }
    },
    {
        name: 'E minor',
        root: E,
        category: 'minor',
        latinName: 'Mi menor',
        scale: [E, Fs, G, A, B, C, D],
        findBy: []
    },
    {
        name: 'F minor',
        root: F,
        category: 'minor',
        latinName: 'Fa menor',
        scale: [F, G, Ab, Bb, C, Db, Eb],
        findBy: [Gs, As, Cs, Ds]
    },
    {
        name: 'F# minor',
        root: Fs,
        category: 'minor',
        latinName: 'Fa# menor',
        scale: [Fs, Gs, A, B, Cs, D, E],
        findBy: [Gb, Ab, Db],
        alt: {
            name: 'Gb minor',
            root: Gb,
            latinName: 'Solb menor',
            scale: [Gb, Ab, A, B, Db, D, E]
        }
    },
    {
        name: 'G minor',
        root: G,
        category: 'minor',
        latinName: 'Sol menor',
        scale: [G, A, Bb, C, D, Eb, F],
        findBy: [As, Ds]
    },
    {
        name: 'G# minor',
        root: Gs,
        category: 'minor',
        latinName: 'Sol# menor',
        scale: [Gs, As, B, Cs, Ds, E, Fs],
        findBy: [Ab, Bb, Db, Eb, Gb],
        alt: {
            name: 'Ab minor',
            root: Ab,
            latinName: 'Lab menor',
            scale: [Ab, Bb, B, Db, Eb, E, Gb]
        }
    },
    {
        name: 'A minor',
        root: A,
        category: 'minor',
        latinName: 'La menor',
        scale: [A, B, C, D, E, F, G],
        findBy: []
    },
    {
        name: 'A# minor',
        root: As,
        category: 'minor',
        latinName: 'La# menor',
        scale: [As, C, Cs, Ds, F, Fs, Gs],
        findBy: [Bb, Db, Eb, Gb, Ab],
        alt: {
            name: 'Bb minor',
            root: Bb,
            latinName: 'Sib menor',
            scale: [Bb, C, Db, Eb, F, Gb, Ab]
        }
    },
    {
        name: 'B minor',
        root: B,
        category: 'minor',
        latinName: 'Si menor',
        scale: [B, Cs, D, E, Fs, G, A],
        findBy: []
    },
    {
        name: 'C harmonic minor',
        root: C,
        category: 'harmonic minor',
        latinName: 'Do menor armónica',
        scale: [C, D, Eb, F, G, Ab, B],
        findBy: [Ds, Gs]
    },
    {
        name: 'C# harmonic minor',
        root: Cs,
        category: 'harmonic minor',
        latinName: 'Do# menor armónica',
        scale: [Cs, Ds, E, Fs, Gs, A, C],
        findBy: [Db, Eb, Gb, Ab],
        alt: {
            name: 'Db harmonic minor',
            root: Db,
            latinName: 'Reb menor armónica',
            scale: [Db, Eb, E, Gb, Ab, A, C]
        }
    },
    {
        name: 'D harmonic minor',
        root: D,
        category: 'harmonic minor',
        latinName: 'Re menor armónica',
        scale: [D, E, F, G, A, Bb, Cs],
        findBy: [As, Db]
    },
    {
        name: 'D# harmonic minor',
        root: Ds,
        category: 'harmonic minor',
        latinName: 'Re# menor armónica',
        scale: [Ds, F, Fs, Gs, As, B, D],
        findBy: [Eb, Gb, Ab, Bb],
        alt: {
            name: 'Eb harmonic minor',
            root: Eb,
            latinName: 'Mib menor armónica',
            scale: [Eb, F, Gb, Ab, Bb, B, D]
        }
    },
    {
        name: 'E harmonic minor',
        root: E,
        category: 'harmonic minor',
        latinName: 'Mi menor armónica',
        scale: [E, Fs, G, A, B, C, Ds],
        findBy: [Eb]
    },
    {
        name: 'F harmonic minor',
        root: F,
        category: 'harmonic minor',
        latinName: 'Fa menor aromónica',
        scale: [F, G, Ab, Bb, C, Db, E],
        findBy: [Gs, As, Cs]
    },
    {
        name: 'F# harmonic minor',
        root: Fs,
        category: 'harmonic minor',
        latinName: 'Fa# menor armónica',
        scale: [Fs, Gs, A, B, Cs, D, F],
        findBy: [Gb, Ab, Db],
        alt: {
            name: 'Gb harmonic minor',
            root: Gb,
            latinName: 'Solb menor armónica',
            scale: [Gb, Ab, A, B, Db, D, F]
        }
    },
    {
        name: 'G harmonic minor',
        root: G,
        category: 'harmonic minor',
        latinName: 'Sol menor aromónica',
        scale: [G, A, Bb, C, D, Eb, Fs],
        findBy: [As, Ds, Gb]
    },
    {
        name: 'G# harmonic minor',
        root: Gs,
        category: 'harmonic minor',
        latinName: 'Sol# menor armponica',
        scale: [Gs, As, B, Cs, Ds, E, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab harmonic minor',
            root: Ab,
            latinName: 'Lab menor armónica',
            scale: [Ab, Bb, B, Db, Eb, E, G]
        }
    },
    {
        name: 'A harmonic minor',
        root: A,
        category: 'harmonic minor',
        latinName: 'La menor armónica',
        scale: [A, B, C, D, E, F, Gs],
        findBy: [Ab]
    },
    {
        name: 'A# harmonic minor',
        root: As,
        category: 'harmonic minor',
        latinName: 'La# menor armónica',
        scale: [As, C, Cs, Ds, F, Fs, A],
        findBy: [Bb, Db, Eb, Gb],
        alt: {
            name: 'Bb harmonic minor',
            root: Bb,
            latinName: 'Sib menor armónica',
            scale: [Bb, C, Db, Eb, F, Gb, A]
        }
    },
    {
        name: 'B harmonic minor',
        root: B,
        category: 'harmonic minor',
        latinName: 'Si menor armónica',
        scale: [B, Cs, D, E, Fs, G, As],
        findBy: [Bb]
    },
    {
        name: 'C melodic minor',
        root: C,
        category: 'melodic minor',
        latinName: 'Do menor melódica',
        scale: [C, D, Eb, F, G, A, B],
        findBy: [Ds]
    },
    {
        name: 'C# melodic minor',
        root: Cs,
        category: 'melodic minor',
        latinName: 'Do# menor melódica',
        scale: [Cs, Ds, E, Fs, Gs, As, C],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db melodic minor',
            root: Db,
            latinName: 'Reb menor melódica',
            scale: [Db, Eb, E, Gb, Ab, Bb, C]
        }
    },
    {
        name: 'D melodic minor',
        root: D,
        category: 'melodic minor',
        latinName: 'Re menor melódica',
        scale: [D, E, F, G, A, B, Cs],
        findBy: [Db]
    },
    {
        name: 'D# melodic minor',
        root: Ds,
        category: 'melodic minor',
        latinName: 'Re# menor melódica',
        scale: [Ds, F, Fs, Gs, As, C, D],
        findBy: [Eb, Gb, Ab, Bb],
        alt: {
            name: 'Eb melodic minor',
            root: Eb,
            latinName: 'Mib menor melódica',
            scale: [Eb, F, Gb, Ab, Bb, C, D]
        }
    },
    {
        name: 'E melodic minor',
        root: E,
        category: 'melodic minor',
        latinName: 'Mi menor melódica',
        scale: [E, Fs, G, A, B, Cs, Ds],
        findBy: [Eb, Db]
    },
    {
        name: 'F melodic minor',
        root: F,
        category: 'melodic minor',
        latinName: 'Fa menor aromónica',
        scale: [F, G, Ab, Bb, C, D, E],
        findBy: [Gs, As]
    },
    {
        name: 'F# melodic minor',
        root: Fs,
        category: 'melodic minor',
        latinName: 'Fa# menor melódica',
        scale: [Fs, Gs, A, B, Cs, Ds, F],
        findBy: [Gb, Ab, Db, Eb],
        alt: {
            name: 'Gb melodic minor',
            root: Gb,
            latinName: 'Solb menor melódica',
            scale: [Gb, Ab, A, B, Db, Eb, F]
        }
    },
    {
        name: 'G melodic minor',
        root: G,
        category: 'melodic minor',
        latinName: 'Sol menor aromónica',
        scale: [G, A, Bb, C, D, E, Fs],
        findBy: [As, Gb]
    },
    {
        name: 'G# melodic minor',
        root: Gs,
        category: 'melodic minor',
        latinName: 'Sol# menor armponica',
        scale: [Gs, As, B, Cs, Ds, F, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab melodic minor',
            root: Ab,
            latinName: 'Lab menor melódica',
            scale: [Ab, Bb, B, Db, Eb, F, G]
        }
    },
    {
        name: 'A melodic minor',
        root: A,
        category: 'melodic minor',
        latinName: 'La menor melódica',
        scale: [A, B, C, D, E, Fs, Gs],
        findBy: [Gb, Ab]
    },
    {
        name: 'A# melodic minor',
        root: As,
        category: 'melodic minor',
        latinName: 'La# menor melódica',
        scale: [As, C, Cs, Ds, F, G, A],
        findBy: [Bb, Db, Eb],
        alt: {
            name: 'Bb melodic minor',
            root: Bb,
            latinName: 'Sib menor melódica',
            scale: [Bb, C, Db, Eb, F, G, A]
        }
    },
    {
        name: 'B melodic minor',
        root: B,
        category: 'melodic minor',
        latinName: 'Si menor melódica',
        scale: [B, Cs, D, E, Fs, Gs, As],
        findBy: [Ab, Bb]
    }
];