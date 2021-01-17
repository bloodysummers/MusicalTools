import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner } from 'react-native-admob';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Keyboard from '../instruments/keyboard';
import ScalesList from './scalesList';
import { findScales } from './helper';
import styles from './styles';
import routes from '../../routes';
import ads from '../../config/ads';
const { scaleFinder } = routes;

const ScaleFinder = () => {
	const [scale, setScale] = useState([]);
	const [scales, setScales] = useState([]);
	const [init, setInit] = useState(true);
	const { notationType } = useSelector(state => state.settings);
	const { scaleTypes } = useSelector(state => state.scaleFinder);
	const navigation = useNavigation();
	const { t } = useTranslation();

	useEffect(() => {
		setScales([]);
		setInit(true);
	}, [scaleTypes, notationType]);

	const toggleScale = useCallback(
		note => {
			const newScale = [...scale];
			const index = scale.indexOf(note);
			if (scale.indexOf(note) > -1) {
				newScale.splice(index, 1);
			} else {
				newScale.push(note);
			}
			setScales([]);
			setInit(true);
			setScale(newScale);
		},
		[scale]
	);

	const startFinding = useCallback(() => {
		if (init) setInit(false);
		const foundScales = new Promise(resolve => {
			const scales = findScales(scale, scaleTypes, notationType, t);
			resolve(scales);
		});
		foundScales.then(scales => setScales(scales));
	}, [scale, scaleTypes, notationType]);

	const clear = useCallback(() => {
		setScale([]);
		setScales([]);
		setInit(true);
	}, []);

	const tryScale = useCallback(
		scale => {
			navigation.navigate(scaleFinder.scale.section, {
				screen: scaleFinder.scale.screen,
				params: { scale }
			});
		},
		[navigation]
	);

	return (
		<ScrollView>
			<Layout level="1">
				<Layout style={styles.titleWrap}>
					<Text category="h6">{t('scaleFinder:select3notes')}</Text>
				</Layout>
				<Keyboard scale={{ findBy: scale }} allow onPress={toggleScale} />
				<Layout style={styles.titleWrap}>
					<Button style={styles.leftButton} disabled={scale.length < 3} onPress={startFinding}>
						{t('find')}
					</Button>
					<Button
						style={styles.rightButton}
						status="basic"
						disabled={!scale.length}
						onPress={clear}>
						{t('clear')}
					</Button>
				</Layout>
				<Layout style={styles.ad}>
					<AdMobBanner adSize="banner" adUnitID={ads.scaleFinderBanner} />
				</Layout>
				{scales.length > 0 ? (
					<ScalesList scales={scales} notationType={notationType} onTry={tryScale} />
				) : (
					!init && <Text>No scales found</Text>
				)}
			</Layout>
		</ScrollView>
	);
};

export default ScaleFinder;
