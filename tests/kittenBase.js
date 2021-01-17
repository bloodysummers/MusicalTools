import React from 'react';
import PropTypes from 'prop-types';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

const KittenBase = ({ children }) => (
	<>
		<IconRegistry icons={EvaIconsPack} />
		<ApplicationProvider {...eva} theme={eva.light}>
			{children}
		</ApplicationProvider>
	</>
);

KittenBase.propTypes = {
	children: PropTypes.node
};

export default KittenBase;
