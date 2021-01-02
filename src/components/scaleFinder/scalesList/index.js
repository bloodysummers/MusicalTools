import React from 'react';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';
import styles from './styles';
import { latinNotes } from '../../../utils/notes';

const ScalesList = ({ scales, notationType, onTry }) => {

    const scaleToString = scale => {
        const notationArray = scale.map(note => notationType !== 'Do' ? note : latinNotes[note]);
        return notationArray.join(' ');
    };
  
    return (
        <Layout style={styles.list}>
            {scales.map((scale, index) => (
                <Layout key={index}>
                    <Layout style={styles.item}>
                        <Layout style={styles.itemText}>
                            <Text category="h6">
                                {scale.nameToDisplay} {scale.subtitle && <Text appearance="hint">{scale.subtitle}</Text>}
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