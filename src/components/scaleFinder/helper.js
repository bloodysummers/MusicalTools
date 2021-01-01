import { regularScales, modeScales } from '../../utils/scales';

export const findScales = (subScale, scaleTypes) => {
    let scales = [];
    if (scaleTypes.regular) {
        const regular = checkScales(subScale, regularScales);
        scales = scales.concat(regular);
    }
    if (scaleTypes.modes) {
        const modes = checkScales(subScale, modeScales);
        scales = scales.concat(modes);
    }
    return scales;
};

const checkScales = (subScale, scalesSet) =>
    scalesSet.filter(scale =>
        subScale.every(note =>
            scale.findBy.indexOf(note) > -1));