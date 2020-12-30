import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import styles from './styles';

const ScalesList = ({ scales, notationType, onTry }) => {

    const scaleToString = scale => {
        const notationArray = scale.map(note => notationType !== 'Do'? note.name : note.latinName);
        return notationArray.join(' ');
    };

    const getScaleName = scale => {
        const key = notationType !== 'Do' ? 'name' : 'latinName';
        if (scale.alt) {
            return `${scale.root[key]} / ${scale.alt[key]}`;
        } else return scale[key]
    };
  
    return (
        <Layout style={styles.list}>
            {scales.map((scale, index) => (
                <Layout key={`${scale.name}`}>
                    <Layout style={styles.item}>
                        <Layout style={styles.itemText}>
                            <Text category="h6">
                                {getScaleName(scale)}
                            </Text>
                            <Text category="s1" appearance="hint">
                                {scaleToString(scale.scale)}
                            </Text>
                                {scale.alt && (
                                    <Text category="s1" appearance="hint">
                                        {scaleToString(scale.alt.scale)}
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