import scales from '../../utils/scales';

export const findScales = subScale => {
    return scales.filter(scale => {
        const notes = [...scale.scale, ...scale.findBy];
        return subScale.every(note => notes.findIndex(noteData => noteData.name === note) > -1);
    });
};