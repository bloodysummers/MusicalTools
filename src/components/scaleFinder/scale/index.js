import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from 'react-native-admob';
import { useSelector } from 'react-redux';

import Keyboard from '../../instruments/keyboard';
import ScalesList from '../scalesList';
import DummyList from '../../common/dummyList';
import { findChords } from './helper';
import styles from './styles';
import routes from '../../../routes';
import ads from '../../../config/ads';
const { scaleFinder } = routes;

const Scale = () => {
	const [chords, setChords] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();
	const route = useRoute();
	const {
		params: { scale }
	} = route;
	const { notationType } = useSelector(state => state.settings);

	useEffect(() => {
		navigation.setOptions({
			title: scale.nameToDisplay
		});
	}, [scale]);

	useEffect(() => {
		getChords();
	}, [scale, notationType]);

	const getChords = useCallback(() => {
		setLoading(true);
		const foundChords = new Promise(resolve => {
			setTimeout(() => {
				const chords = findChords(scale.name, notationType);
				resolve(chords);
			}, 0);
		});
		foundChords.then(chords => {
			setChords(chords);
			setLoading(false);
		});
	}, [scale, notationType]);

	const tryChord = useCallback(
		chord => {
			navigation.navigate(scaleFinder.scale.chord, {
				scale: chord
			});
		},
		[navigation]
	);

	return (
		<ScrollView>
			<Layout level="1">
				<Keyboard scale={scale || {}} allow={false} />
				<Layout style={styles.ad}>
					<AdMobBanner adSize="banner" adUnitID={ads.scaleBanner} />
				</Layout>
				{loading ? (
					<DummyList />
				) : (
					chords.length > 0 && (
						<ScalesList
							scales={chords}
							notationType={notationType}
							onTry={tryChord}
						/>
					)
				)}
			</Layout>
		</ScrollView>
	);
};

export default Scale;
