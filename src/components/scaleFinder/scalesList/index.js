import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import styles from './styles';
import { latinNotes } from '../../../utils/notes';

const ScalesList = ({ scales, notationType, onTry }) => {

    const scaleToString = scale => {
        const notationArray = scale.map(note => notationType !== 'Do' ? note : latinNotes[note]);
        return notationArray.join(' ');
    };

    const getScaleName = scale => {
        const key = notationType !== 'Do' ? scale.tonic : latinNotes[scale.tonic];
        if (scale.alt) {
            const altKey = notationType !== 'Do' ? scale.alt.tonic : latinNotes[scale.alt.tonic];
            return `${key} / ${altKey} ${scale.type}`;
        }
        return `${key} ${scale.type}`;
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
                                {scaleToString(scale.notes)}
                            </Text>
                                {scale.alt && (
                                    <Text category="s1" appearance="hint">
                                        {scaleToString(scale.alt.notes)}
                                    </Text>
                                )}
                        </Layout>
                        <Button status="basic" onPress={() => onTry(scale)}>Try</Button>
                    </Layout>
                    {index !== scales.length -1 && <Divider />}
                </Layout>
            ))}
        </Layout>
    );
};

export default ScalesList;