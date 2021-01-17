import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView, View } from 'react-native';
import { Text } from '@ui-kitten/components';

import styles from './styles';
import { tones, getNoteByFret, sounds } from './helper';
import colors from '../../../utils/colors';

const Guitar = ({ tuning }) => {
	const playSound = note => {
		const player = sounds[note.sound][`${note.sound}${note.octave}`];
		if (player.isPlaying()) player.stop();
		player.play(() => player.stop());
	};

	return (
		<View style={styles.fretboard}>
			<ScrollView horizontal>
				<View style={styles.nut} />
				<View style={styles.frets}>
					{tones.slice(0, tones.length - 1).map((item, i) => (
						<View key={i} style={styles.fretWrap}>
							<View key={i} style={styles.fret} />
						</View>
					))}
				</View>
				<View style={styles.strings}>
					{tuning.map(({ note, octave }) => (
						<View style={styles.stringWrap} key={`${note}${octave}`}>
							<View style={styles.string} />
						</View>
					))}
				</View>
				<View style={styles.notesPerString}>
					{tuning.map(({ note, octave }, stringNumber) => (
						<View style={styles.stringNotes} key={`${note}${octave}`}>
							{tones.map((item, fret) => {
								const noteByFret = getNoteByFret(note, fret, octave);
								return (
									<TouchableHighlight
										key={`${stringNumber + 1}-${fret + 1}`}
										underlayColor={colors.red}
										style={styles.note}
										onPressIn={() => {
											const data = getNoteByFret(note, fret, octave);
											playSound(data);
										}}>
										<Text category="h6" style={styles.noteName}>
											{noteByFret.note}
										</Text>
									</TouchableHighlight>
								);
							})}
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

Guitar.defaultProps = {
	tuning: [
		{ note: 'E', octave: 4 },
		{ note: 'B', octave: 3 },
		{ note: 'G', octave: 3 },
		{ note: 'D', octave: 3 },
		{ note: 'A', octave: 2 },
		{ note: 'E', octave: 2 }
	]
};

Guitar.propTypes = {
	tuning: PropTypes.array
};

export default Guitar;
