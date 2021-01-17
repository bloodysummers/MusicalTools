import React, { useMemo } from 'react';
import { Layout, Divider } from '@ui-kitten/components';
import ContentLoader from 'react-native-masked-loader';

import DummyItem from './dummyItem';
import styles from './styles';

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
