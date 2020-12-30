import React, { useState, useEffect } from 'react';
import { Layout, Card, Text, Toggle, Divider } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';

import { setScaleType } from '../../../store/actions/scaleFinder';
import styles from './styles';

const Settings = () => {
    const dispatch = useDispatch();
    const { regular, modes } = useSelector(state => state.scaleFinder.scaleTypes);

    const setType = type => {
        dispatch(setScaleType(type));
    };

    return (
        <Layout style={styles.page} level="4">
            <Card disabled header={() => (
                <Layout style={styles.header}>
                    <Text category="h6">Scale types</Text>
                </Layout>
            )}>
                <Layout style={styles.item}>
                    <Text>Major and minor</Text>
                    <Toggle
                        checked={regular}
                        onChange={() => setType({ regular: !regular })}
                    />
                </Layout>
                <Divider />
                <Layout style={styles.item}>
                    <Text>Modes</Text>
                    <Toggle
                        checked={modes}
                        onChange={() => setType({ modes: !modes })}
                    />
                </Layout>
            </Card>
        </Layout>
    );
};

export default Settings;