import regular from '../../utils/scales/regular';
import modes from '../../utils/scales/modes';

export const findScales = (subScale, scaleTypes) => {
    let scales = [];
    if (scaleTypes.regular) {
        const regularScales = checkScales(subScale, regular);
        scales = scales.concat(regularScales);
    }
    if (scaleTypes.modes) {
        const modesScales = checkScales(subScale, modes);
        scales = scales.concat(modesScales);
    }
    return scales;
};

const checkScales = (subScale, scalesSet) => {
    return scalesSet.filter(scale => {
        const notes = [...scale.scale, ...scale.findBy];
        return subScale.every(note => notes.findIndex(noteData => noteData.name === note.name) > -1);
    });
};