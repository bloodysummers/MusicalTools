import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import styles from './styles';

const ScalesList = ({ scales, notationType, onTry }) => {
  
    return (
        <Layout style={styles.list}>
            {scales.map((item, index) => (
                <Layout key={`${item.name}`}>
                    <Layout style={styles.item}>
                        <Layout style={styles.itemText}>
                            <Text category="h6">
                                {notationType !== 'Do' ? item.name : item.latinName}
                            </Text>
                            <Text category="s1" appearance="hint">
                                {item.scale.map((note, i) => `${notationType !== 'Do' ? note.name : note.latinName} `)}
                            </Text>
                        </Layout>
                        <Button status="basic" onPress={() => onTry(item)}>Try</Button>
                    </Layout>
                    {index !== scales.length -1 && <Divider />}
                </Layout>
            ))}
        </Layout>
    );
};

export default ScalesList;