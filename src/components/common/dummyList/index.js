import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider } from '@ui-kitten/components';
import ContentLoader from 'react-native-masked-loader';

import DummyItem from './dummyItem';
import styles from './styles';

const DummyList = ({ count }) => {
	const dummyItems = useMemo(() => {
		const items = [];
		for (let i = 0; i < count; i++) {
			items.push(
				<Layout key={i}>
					<Layout style={styles.item}>
						<ContentLoader
							MaskedElement={<DummyItem />}
							backColor="#E4E9F2"
							forColor="#EDF1F7"
						/>
					</Layout>
					{i < count && <Divider />}
				</Layout>
			);
		}
		return items;
	}, []);

	return <Layout style={styles.list}>{dummyItems.map(item => item)}</Layout>;
};

DummyList.defaultProps = {
	count: 10
};

DummyList.propTypes = {
	count: PropTypes.number
};

export default DummyList;
