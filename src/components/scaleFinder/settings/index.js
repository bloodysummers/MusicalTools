import React, { useState, useEffect } from 'react';
import { Layout, Card, Text, Toggle, Divider } from '@ui-kitten/components';

import styles from './styles';

const Settings = () => {
    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(false);

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
                        checked={check1}
                        onChange={setCheck1}
                    />
                </Layout>
                <Divider />
                <Layout style={styles.item}>
                    <Text>Modes</Text>
                    <Toggle
                        checked={check2}
                        onChange={setCheck2}
                    />
                </Layout>
            </Card>
        </Layout>
    );
};

export default Settings;