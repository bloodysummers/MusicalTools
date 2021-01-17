import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import styles from './styles';
import { latinNotes } from '../../../utils/notes';

const ScalesList = ({ scales, notationType, onTry }) => {
	const { t } = useTranslation();

	const scaleToString = useCallback(
		scale => {
			const notationArray = scale.map(note =>
				notationType !== 'Do' ? note : latinNotes[note]
			);
			return notationArray.join(' ');
		},
		[notationType]
	);

	return (
		<Layout style={styles.list}>
			{scales.map((scale, index) => (
				<Layout key={index}>
					<Layout style={styles.item}>
						<Layout style={styles.itemText}>
							<Text category="h6">{scale.nameToDisplay}</Text>
							<Text category="s1" appearance="hint">
								{scaleToString(scale.notes)}
							</Text>
							{scale.alt && (
								<Text category="s1" appearance="hint">
									{scaleToString(scale.alt.notes)}
								</Text>
							)}
						</Layout>
						<Button status="basic" onPress={() => onTry(scale)}>
							{t('try')}
						</Button>
					</Layout>
					{index !== scales.length - 1 && <Divider />}
				</Layout>
			))}
		</Layout>
	);
};

ScalesList.propTypes = {
	scales: PropTypes.array,
	notationType: PropTypes.string,
	onTry: PropTypes.func,
	loading: PropTypes.bool
};

export default ScalesList;
