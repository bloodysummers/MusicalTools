import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ScalesList from '../../../../src/components/scaleFinder/ScalesList';
import KittenBase from '../../../kittenBase';
import { majorScales } from '../../../../src/utils/scales';

jest.mock('react-i18next', () => ({
	useTranslation: () => {
		return {
			t: str => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
				language: 'en'
			}
		};
	}
}));

describe('ScalesList', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('Matches snapshot', () => {
		const dMajorScale = majorScales[2];
		const fsMajorScale = majorScales[6];
		const { toJSON } = render(
			<KittenBase>
				<ScalesList scales={[dMajorScale, fsMajorScale]} notationType="C" />
			</KittenBase>
		);
		expect(toJSON()).toMatchSnapshot();
	});

	it('Calls the onTry function', () => {
		const dMajorScale = majorScales[2];
		const onTry = jest.fn();
		const { getByA11yLabel } = render(
			<KittenBase>
				<ScalesList scales={[dMajorScale]} notationType="C" onTry={onTry} />
			</KittenBase>
		);

		const dMajorTry = getByA11yLabel('try');

		fireEvent.press(dMajorTry);

		expect(onTry).toBeCalled();
	});

	it('Renders notes correctly', () => {
		const fsMajorScale = majorScales[6];
		fsMajorScale.nameToDisplay = 'C# / Db major';
		const onTry = jest.fn();
		const { queryAllByText } = render(
			<KittenBase>
				<ScalesList scales={[fsMajorScale]} notationType="C" onTry={onTry} />
			</KittenBase>
		);

		const scaleName = queryAllByText('C# / Db major');
		const sharpNotes = queryAllByText('F# G# A# B C# D# E#');
		const flatNotes = queryAllByText('Gb Ab Bb Cb Db Eb F');

		expect(scaleName).toBeTruthy();
		expect(sharpNotes).toBeTruthy();
		expect(flatNotes).toBeTruthy();
	});
});
