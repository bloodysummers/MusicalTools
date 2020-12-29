import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import styles from './styles';

const ScalesList = ({ scales, notationType, onTry }) => {

    const scaleToString = scale => {
        const notationArray = scale.map(note => notationType !== 'Do'? note.name : note.latinName);
        return notationArray.join(' ');
    };
  
    return (
        <Layout style={styles.list}>
            {scales.map((item, index) => (
                <Layout key={`${item.name}`}>
                    <Layout style={styles.item}>
                        <Layout style={styles.itemText}>
                            <Text category="h6">
                                {notationType !== 'Do' ? item.name : item.latinName}
                                {item.alt && ` / ${item.alt.name}`}
                            </Text>
                            <Text category="s1" appearance="hint">
                                {scaleToString(item.scale)}
                            </Text>
                                {item.alt && (
                                    <Text category="s1" appearance="hint">
                                        {scaleToString(item.alt.scale)}
                                    </Text>
                                )}
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