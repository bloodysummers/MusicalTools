import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal';

import WhiteKey from './whiteKey';
import BlackKey from './blackKey';

import styles from './styles';
import { keys } from './helper';
import { sounds } from '../../../utils/sounds';

const whiteKeys = keys.filter(key => key.whole);
const blackKeys = keys.filter(key => !key.whole);

const Keyboard = ({ allow, scale, onPress }) => {
	const { notationType, instrumentSound } = useSelector(
		state => state.settings
	);

	const playSound = useCallback(
		key => {
			if (onPress) onPress(key.note);
			if (instrumentSound && (allow || scale.findBy.indexOf(key.note) > -1)) {
				const player = sounds[key.sound];
				if (player.isPlaying()) player.stop();
				player.play(() => player.stop());
			}
		},
		[onPress, allow, scale]
	);

	const markKey = useCallback(
		note => {
			return scale.findBy.indexOf(note) > -1;
		},
		[scale.findBy]
	);

	const checkDisabled = useCallback(
		note => {
			return !allow && scale.findBy.indexOf(note) === -1;
		},
		[scale, allow]
	);

	const checkRoot = useCallback(
		note => {
			return scale.tonic === note || Note.enharmonic(scale.tonic) === note;
		},
		[scale.tonic]
	);

	return (
		<View style={styles.keyboard}>
			<View style={styles.whiteKeys}>
				{whiteKeys.map(key => {
					const disabled = checkDisabled(key.note);
					return (
						<WhiteKey
							key={key.note}
							disabled={disabled}
							mark={markKey(key.note)}
							root={checkRoot(key.note)}
							onPressIn={!disabled ? () => playSound(key) : null}
							notationType={notationType}
							noteData={key}
						/>
					);
				})}
			</View>
			<View style={styles.blackKeys}>
				{blackKeys.map((key, i) => {
					const disabled = checkDisabled(key.note);
					return (
						<BlackKey
							key={key.note}
							disabled={disabled}
							mark={markKey(key.note)}
							root={checkRoot(key.note)}
							style={styles[`blackKey${i + 1}`]}
							onPressIn={!disabled ? () => playSound(key) : null}
							notationType={notationType}
							noteData={key}
						/>
					);
				})}
			</View>
		</View>
	);
};

Keyboard.defaultProps = {
	scale: {}
};

Keyboard.propTypes = {
	scale: PropTypes.object,
	allow: PropTypes.bool,
	onPress: PropTypes.func
};

export default Keyboard;
