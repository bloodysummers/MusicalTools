import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Layout, Button, Icon } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from 'react-native-admob';
import * as tonal from '@tonaljs/tonal';
import { useTranslation } from 'react-i18next';

import Keyboard from '../../../instruments/keyboard';
import styles from './style';
import ads from '../../../../config/ads';
import { getNotesWithOctave } from './helper';
import { sounds } from '../../../../utils/sounds';

const PlayIcon = props => <Icon {...props} name="play-circle-outline" />;

const Chord = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();
	const route = useRoute();
	const {
		params: { scale }
	} = route;

	const playChord = useCallback(() => {
		const notes = getNotesToPlay();
		notes.forEach(sound => {
			if (sound.isPlaying()) sound.stop();
			sound.play(() => sound.stop());
		});
	}, [scale]);

	const playArpeggio = useCallback(() => {
		const notes = getNotesToPlay();
		notes.forEach((sound, i) => {
			if (sound.isPlaying()) sound.stop();
			setTimeout(() => {
				sound.play(() => sound.stop());
			}, 400 * i);
		});
	}, [scale]);

	const getNotesToPlay = useCallback(() => {
		const notes = getNotesWithOctave(scale.notes);
		return notes.map(note => {
			if (note.indexOf('#') > -1) {
				const enharmonic = tonal.Note.enharmonic(note);
				return sounds[enharmonic.toLowerCase()];
			} else return sounds[note.toLowerCase()];
		});
	}, [scale]);

	useEffect(() => {
		navigation.setOptions({
			title: scale.nameToDisplay
		});
	}, [scale]);

	return (
		<View>
			<Layout level="1">
				<Keyboard scale={scale} allow={false} />
				<Layout style={styles.titleWrap}>
					<Button
						appearance="outline"
						style={styles.leftButton}
						accessoryLeft={PlayIcon}
						accessibilityLabel={t('playChord')}
						onPress={playChord}>
						{t('playChord')}
					</Button>
					<Button
						appearance="outline"
						style={styles.rightButton}
						accessoryLeft={PlayIcon}
						accessibilityLabel={t('playArpeggio')}
						onPress={playArpeggio}>
						{t('playArpeggio')}
					</Button>
				</Layout>
				<Layout style={styles.ad}>
					<AdMobBanner adSize="banner" adUnitID={ads.chordBanner} />
				</Layout>
			</Layout>
		</View>
	);
};

export default Chord;
