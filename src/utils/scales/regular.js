import notes from '../notes';
const { C, Cs, Db, D, Ds, Eb, E, Fs, F, Gb, G, Gs, Ab, A, As, Bb, B } = notes;

const REGULAR = 'regular';
const MAJOR = 'major';
const MINOR = 'minor';
const HARMONIC_MINOR = 'harmonic minor';
const MELODIC_MINOR = 'melodic minor';

export default [
    {
        name: 'C major',
        root: C,
        type: REGULAR,
        category: MAJOR,
        latinName: 'Do mayor',
        scale: [C, D, E, F, G, A, B],
        findBy: []
    },
    {
        name: 'C# major',
        root: Cs,
        type: REGULAR,
        category: MAJOR,
        latinName: 'C# mayor',
        scale: [Cs, Ds, F, Fs, Gs, As, C],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db major',
            root: Db,
            latinName: 'Reb mayor',
            scale: [Db, Eb, F, Gb, Ab, Bb, C]
        }
    },
    {
        name: 'D major',
        root: D,
        type: REGULAR,
        category: MAJOR,
        latinName: 'Re mayor',
        scale: [D, E, Fs, G, A, B, Cs],
        findBy: [Gb, Db]
    },
    {
        name: 'D# major',
        root: Ds,
        type: REGULAR,
        category: MAJOR,
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
        type: REGULAR,
        category: MAJOR,
        latinName: 'Mi mayor',
        scale: [E, Fs, Gs, A, B, Cs, Ds],
        findBy: [Gb, Ab, Eb]
    },
    {
        name: 'F major',
        root: F,
        type: REGULAR,
        category: MAJOR,
        latinName: 'Fa mayor',
        scale: [F, G, A, Bb, C, D, E],
        findBy: [As]
    },
    {
        name: 'F# major',
        root: Fs,
        type: REGULAR,
        category: MAJOR,
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
        category: MAJOR,
        latinName: 'Sol mayor',
        scale: [G, A, B, C, D, E, Fs],
        findBy: [Gb]
    },
    {
        name: 'G# major',
        root: Gs,
        category: MAJOR,
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
        category: MAJOR,
        latinName: 'La mayor',
        scale: [A, B, Cs, D, E, Fs, Gs],
        findBy: [Db, Ab]
    },
    {
        name: 'A# major',
        root: As,
        category: MAJOR,
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
        category: MAJOR,
        latinName: 'Si mayor',
        scale: [B, Cs, Ds, E, Fs, Gs, As],
        findBy: [Eb, Db, Gb, Ab, Bb]
    },
    {
        name: 'C minor',
        root: C,
        type: REGULAR,
        category: MINOR,
        latinName: 'Do menor',
        scale: [C, D, Eb, F, G, Ab, Bb],
        findBy: [Ds, Gs, As]
    },
    {
        name: 'C# minor',
        root: Cs,
        type: REGULAR,
        category: MINOR,
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
        type: REGULAR,
        category: MINOR,
        latinName: 'Re menor',
        scale: [D, E, F, G, A, Bb, C],
        findBy: [As]
    },
    {
        name: 'D# minor',
        root: Ds,
        type: REGULAR,
        category: MINOR,
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
        type: REGULAR,
        category: MINOR,
        latinName: 'Mi menor',
        scale: [E, Fs, G, A, B, C, D],
        findBy: []
    },
    {
        name: 'F minor',
        root: F,
        type: REGULAR,
        category: MINOR,
        latinName: 'Fa menor',
        scale: [F, G, Ab, Bb, C, Db, Eb],
        findBy: [Gs, As, Cs, Ds]
    },
    {
        name: 'F# minor',
        root: Fs,
        type: REGULAR,
        category: MINOR,
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
        type: REGULAR,
        category: MINOR,
        latinName: 'Sol menor',
        scale: [G, A, Bb, C, D, Eb, F],
        findBy: [As, Ds]
    },
    {
        name: 'G# minor',
        root: Gs,
        type: REGULAR,
        category: MINOR,
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
        type: REGULAR,
        category: MINOR,
        latinName: 'La menor',
        scale: [A, B, C, D, E, F, G],
        findBy: []
    },
    {
        name: 'A# minor',
        root: As,
        type: REGULAR,
        category: MINOR,
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
        type: REGULAR,
        category: MINOR,
        latinName: 'Si menor',
        scale: [B, Cs, D, E, Fs, G, A],
        findBy: []
    },
    {
        name: 'C harmonic minor',
        root: C,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Do menor armónico',
        scale: [C, D, Eb, F, G, Ab, B],
        findBy: [Ds, Gs]
    },
    {
        name: 'C# harmonic minor',
        root: Cs,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Do# menor armónico',
        scale: [Cs, Ds, E, Fs, Gs, A, C],
        findBy: [Db, Eb, Gb, Ab],
        alt: {
            name: 'Db harmonic minor',
            root: Db,
            latinName: 'Reb menor armónico',
            scale: [Db, Eb, E, Gb, Ab, A, C]
        }
    },
    {
        name: 'D harmonic minor',
        root: D,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Re menor armónico',
        scale: [D, E, F, G, A, Bb, Cs],
        findBy: [As, Db]
    },
    {
        name: 'D# harmonic minor',
        root: Ds,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Re# menor armónico',
        scale: [Ds, F, Fs, Gs, As, B, D],
        findBy: [Eb, Gb, Ab, Bb],
        alt: {
            name: 'Eb harmonic minor',
            root: Eb,
            latinName: 'Mib menor armónico',
            scale: [Eb, F, Gb, Ab, Bb, B, D]
        }
    },
    {
        name: 'E harmonic minor',
        root: E,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Mi menor armónico',
        scale: [E, Fs, G, A, B, C, Ds],
        findBy: [Eb]
    },
    {
        name: 'F harmonic minor',
        root: F,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Fa menor aromónica',
        scale: [F, G, Ab, Bb, C, Db, E],
        findBy: [Gs, As, Cs]
    },
    {
        name: 'F# harmonic minor',
        root: Fs,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Fa# menor armónico',
        scale: [Fs, Gs, A, B, Cs, D, F],
        findBy: [Gb, Ab, Db],
        alt: {
            name: 'Gb harmonic minor',
            root: Gb,
            latinName: 'Solb menor armónico',
            scale: [Gb, Ab, A, B, Db, D, F]
        }
    },
    {
        name: 'G harmonic minor',
        root: G,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Sol menor aromónica',
        scale: [G, A, Bb, C, D, Eb, Fs],
        findBy: [As, Ds, Gb]
    },
    {
        name: 'G# harmonic minor',
        root: Gs,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Sol# menor armponica',
        scale: [Gs, As, B, Cs, Ds, E, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab harmonic minor',
            root: Ab,
            latinName: 'Lab menor armónico',
            scale: [Ab, Bb, B, Db, Eb, E, G]
        }
    },
    {
        name: 'A harmonic minor',
        root: A,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'La menor armónico',
        scale: [A, B, C, D, E, F, Gs],
        findBy: [Ab]
    },
    {
        name: 'A# harmonic minor',
        root: As,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'La# menor armónico',
        scale: [As, C, Cs, Ds, F, Fs, A],
        findBy: [Bb, Db, Eb, Gb],
        alt: {
            name: 'Bb harmonic minor',
            root: Bb,
            latinName: 'Sib menor armónico',
            scale: [Bb, C, Db, Eb, F, Gb, A]
        }
    },
    {
        name: 'B harmonic minor',
        root: B,
        type: REGULAR,
        category: HARMONIC_MINOR,
        latinName: 'Si menor armónico',
        scale: [B, Cs, D, E, Fs, G, As],
        findBy: [Bb]
    },
    {
        name: 'C melodic minor',
        root: C,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Do menor melódico',
        scale: [C, D, Eb, F, G, A, B],
        findBy: [Ds]
    },
    {
        name: 'C# melodic minor',
        root: Cs,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Do# menor melódico',
        scale: [Cs, Ds, E, Fs, Gs, As, C],
        findBy: [Db, Eb, Gb, Ab, Bb],
        alt: {
            name: 'Db melodic minor',
            root: Db,
            latinName: 'Reb menor melódico',
            scale: [Db, Eb, E, Gb, Ab, Bb, C]
        }
    },
    {
        name: 'D melodic minor',
        root: D,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Re menor melódico',
        scale: [D, E, F, G, A, B, Cs],
        findBy: [Db]
    },
    {
        name: 'D# melodic minor',
        root: Ds,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Re# menor melódico',
        scale: [Ds, F, Fs, Gs, As, C, D],
        findBy: [Eb, Gb, Ab, Bb],
        alt: {
            name: 'Eb melodic minor',
            root: Eb,
            latinName: 'Mib menor melódico',
            scale: [Eb, F, Gb, Ab, Bb, C, D]
        }
    },
    {
        name: 'E melodic minor',
        root: E,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Mi menor melódico',
        scale: [E, Fs, G, A, B, Cs, Ds],
        findBy: [Eb, Db]
    },
    {
        name: 'F melodic minor',
        root: F,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Fa menor aromónica',
        scale: [F, G, Ab, Bb, C, D, E],
        findBy: [Gs, As]
    },
    {
        name: 'F# melodic minor',
        root: Fs,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Fa# menor melódico',
        scale: [Fs, Gs, A, B, Cs, Ds, F],
        findBy: [Gb, Ab, Db, Eb],
        alt: {
            name: 'Gb melodic minor',
            root: Gb,
            latinName: 'Solb menor melódico',
            scale: [Gb, Ab, A, B, Db, Eb, F]
        }
    },
    {
        name: 'G melodic minor',
        root: G,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Sol menor aromónica',
        scale: [G, A, Bb, C, D, E, Fs],
        findBy: [As, Gb]
    },
    {
        name: 'G# melodic minor',
        root: Gs,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Sol# menor armponica',
        scale: [Gs, As, B, Cs, Ds, F, G],
        findBy: [Ab, Bb, Db, Eb],
        alt: {
            name: 'Ab melodic minor',
            root: Ab,
            latinName: 'Lab menor melódico',
            scale: [Ab, Bb, B, Db, Eb, F, G]
        }
    },
    {
        name: 'A melodic minor',
        root: A,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'La menor melódico',
        scale: [A, B, C, D, E, Fs, Gs],
        findBy: [Gb, Ab]
    },
    {
        name: 'A# melodic minor',
        root: As,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'La# menor melódico',
        scale: [As, C, Cs, Ds, F, G, A],
        findBy: [Bb, Db, Eb],
        alt: {
            name: 'Bb melodic minor',
            root: Bb,
            latinName: 'Sib menor melódico',
            scale: [Bb, C, Db, Eb, F, G, A]
        }
    },
    {
        name: 'B melodic minor',
        root: B,
        type: REGULAR,
        category: MELODIC_MINOR,
        latinName: 'Si menor melódico',
        scale: [B, Cs, D, E, Fs, Gs, As],
        findBy: [Ab, Bb]
    }
];