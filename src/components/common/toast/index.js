import React from 'react';
import { View } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';

import styles from './styles';

const Toast = ({text1, text2, hide, type }) => (
    <View style={styles.toastWrap}>
        <View style={[styles.toast, styles[type]]}>
            <View style={styles.textWrap}>
                <Text category="s1" style={styles.text1} appearance="alternative">{text1}</Text>
                {text2 && <Text category="s2" appearance="alternative">{text2}</Text>}
            </View>
            <View style={styles.closeWrap}>
                <Button
                    appearance="ghost"
                    status="control"
                    onPress={hide}
                    size="large"
                    accessoryLeft={(props) => (
                        <Icon
                            {...props}
                            name="close"
                        />
                    )}
                />
            </View>
        </View>
    </View>
);

export default Toast;