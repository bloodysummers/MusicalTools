import React from 'react';
import { Layout, Card } from '@ui-kitten/components';

import CircleOfFifths from '../circleOfFifths';

const Home = () => {

    return (
        <Layout level="4">
            <Card>
                <CircleOfFifths />
            </Card>
        </Layout>
    );
};

export default Home;