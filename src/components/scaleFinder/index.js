import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { AdMobBanner } from 'react-native-admob';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Keyboard from '../instruments/keyboard';
import ScalesList from './scalesList';
import DummyList from '../common/dummyList';
import NotFound from '../common/notFound';
import LoadingIndicator from '../common/loadingIndicator';
import { findScales } from './helper';
import styles from './styles';
import routes from '../../routes';
import ads from '../../config/ads';
const { scaleFinder } = routes;

const ScaleFinder = () => {
	const [scale, setScale] = useState([]);
	const [scales, setScales] = useState([]);
	const [loading, setLoading] = useState(false);
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
		setLoading(true);
		const foundScales = new Promise(resolve => {
			setTimeout(() => {
				const scales = findScales(scale, scaleTypes, notationType, t);
				resolve(scales);
			}, 0);
		});
		foundScales.then(scales => {
			setScales(scales);
			setLoading(false);
		});
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
					<Button
						style={styles.leftButton}
						status="primary"
						disabled={scale.length < 3}
						accessibilityLabel={t('find')}
						accessibilityState={{
							disabled: scale.length < 3,
							busy: loading
						}}
						accessoryLeft={
							loading
								? props => <LoadingIndicator {...props} status="basic" />
								: null
						}
						onPress={loading ? null : startFinding}>
						{loading ? '' : t('find')}
					</Button>
					<Button
						style={styles.rightButton}
						status="basic"
						disabled={!scale.length}
						accessibilityLabel={t('clear')}
						accessibilityState={{
							disabled: !scale.length,
							busy: loading
						}}
						accessoryLeft={
							loading
								? props => <LoadingIndicator {...props} status="primary" />
								: null
						}
						onPress={loading ? null : clear}>
						{loading ? '' : t('clear')}
					</Button>
				</Layout>
				<Layout style={styles.ad}>
					<AdMobBanner adSize="banner" adUnitID={ads.scaleFinderBanner} />
				</Layout>
				{loading ? (
					<DummyList />
				) : scales.length > 0 ? (
					<ScalesList
						scales={scales}
						notationType={notationType}
						onTry={tryScale}
					/>
				) : (
					!init && <NotFound>No scales found</NotFound>
				)}
			</Layout>
		</ScrollView>
	);
};

export default ScaleFinder;
