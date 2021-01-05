import React from 'react';
import { Layout } from '@ui-kitten/components';
import { useSelector } from 'react-redux';

import Circle from './circle';

const CircleOfFifths = () => {
    const { lockCircle } = useSelector(state => state.circleOfFifths);

    return (
        <Layout level="1">
            <Circle lock={lockCircle} />
        </Layout>
    );
};

export default CircleOfFifths;