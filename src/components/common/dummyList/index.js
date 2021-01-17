import React, { useMemo, useCallback } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { Layout, Divider } from '@ui-kitten/components';
import ContentLoader from 'react-native-masked-loader';

import styles from './styles';

const DummyItem = () => {
	const randomBetween = useCallback(
		(min, max) => Math.round(Math.random() * (max - min) + min),
		[]
	);

	const width = useMemo(() => Dimensions.get('window').width, []);

	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
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

const DummyList = () => {
	const dummyItems = useMemo(() => {
		const items = [];
		for (let i = 0; i < 10; i++) {
			items.push(
				<Layout key={i}>
					<Layout style={styles.item}>
						<ContentLoader
							MaskedElement={<DummyItem />}
							backColor="#E4E9F2"
							forColor="#EDF1F7"
						/>
					</Layout>
					{i < 10 && <Divider />}
				</Layout>
			);
		}
		return items;
	}, []);

	return <Layout style={styles.list}>{dummyItems.map(item => item)}</Layout>;
};

export default DummyList;
