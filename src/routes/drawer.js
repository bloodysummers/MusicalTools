import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Linking } from 'react-native';
import { Drawer, DrawerItem, Text, IndexPath } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

export const CustomDrawer = ({ navigation, descriptors, state }) => {
	const { t } = useTranslation();
	return (
		<>
			<Text category="h4" style={styles.title}>
				MusicalTools
			</Text>
			<Drawer
				selectedIndex={new IndexPath(state.index)}
				onSelect={index => navigation.navigate(state.routeNames[index.row])}>
				{state.routes.map(item => (
					<DrawerItem
						key={item.key}
						title={t(descriptors[item.key].options.title)}
						onPress={() => navigation.navigate(item.name)}
					/>
				))}
				<DrawerItem
					title={t('rateUs')}
					onPress={() => Linking.openURL('market://details?id=com.musicaltools')}
				/>
			</Drawer>
		</>
	);
};

CustomDrawer.propTypes = {
	navigation: PropTypes.object,
	descriptors: PropTypes.object,
	state: PropTypes.object
};

const styles = StyleSheet.create({
	title: {
		margin: 15,
		fontWeight: 'bold'
	}
});
