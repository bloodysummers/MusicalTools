import { regularScales, modeScales, pentatonicScales, bluesScales, harmonicMinorModeScales, melodicMinorModeScales, augmentedAndDiminishedScales } from '../../utils/scales';
import { latinNotes } from '../../utils/notes';

export const findScales = (subScale, scaleTypes, notationType) => {
    let scales = [];
    if (scaleTypes.regular) {
        const regular = checkScales(subScale, regularScales);
        scales = scales.concat(regular);
    }
    if (scaleTypes.modes) {
        const modes = checkScales(subScale, modeScales);
        scales = scales.concat(modes);
    }
    if (scaleTypes.pentatonic) {
        const pentatonics = checkScales(subScale, pentatonicScales);
        scales = scales.concat(pentatonics);
    }
    if (scaleTypes.blues) {
        const blues = checkScales(subScale, bluesScales);
        scales = scales.concat(blues);
    }
    if (scaleTypes.harmonicMinorModes) {
        const harmonicMinorModes = checkScales(subScale, harmonicMinorModeScales);
        scales = scales.concat(harmonicMinorModes);
    }
    if (scaleTypes.melodicMinorModes) {
        const melodicMinorModes = checkScales(subScale, melodicMinorModeScales);
        scales = scales.concat(melodicMinorModes);
    }
    if (scaleTypes.augmentedDiminished) {
        const augmentedDiminished = checkScales(subScale, augmentedAndDiminishedScales);
        scales = scales.concat(augmentedDiminished);
    }
    return scales.map(scale => {
        scale.nameToDisplay = getScaleName(scale, notationType);
        return scale;
    });
};

const getScaleName = (scale, notationType) => {
    const key = notationType !== 'Do' ? scale.tonic : latinNotes[scale.tonic];
    if (scale.alt) {
        const altKey = notationType !== 'Do' ? scale.alt.tonic : latinNotes[scale.alt.tonic];
        return `${key} / ${altKey} ${scale.type}`;
    }
    return `${key} ${scale.type}`;
};

const checkScales = (subScale, scalesSet) =>
    scalesSet.filter(scale =>
        subScale.every(note =>
            scale.findBy.indexOf(note) > -1));