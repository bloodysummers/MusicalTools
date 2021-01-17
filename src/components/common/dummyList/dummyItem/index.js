import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { randomBetween } from './helper';
import styles from './styles';

const DummyItem = () => {
	const width = Dimensions.get('window').width;

	return (
		<View style={styles.item}>
			<Svg width={width - 30 - 85} height={45}>
				<Rect
					x={0}
					y={4}
					rx={8}
					ry={8}
					width={randomBetween(80, 120)}
					height={16}
				/>
				<Rect
					x={0}
					y={28}
					rx={7}
					ry={7}
					width={randomBetween(140, 160)}
					height={14}
				/>
			</Svg>
			<Svg width={85} height={45}>
				<Rect x={0} y={0} rx={6} ry={6} width={85} height={45} />
			</Svg>
		</View>
	);
};

export default DummyItem;
