import React from 'react';
import { View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Layout, Card, Text, Button } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import routes from '../../routes';
const { scaleFinder, circleOfFifths } = routes;

import styles from './styles';

const Home = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    return (
        <Layout level="4" style={styles.home}>
            <Card
                header={() => (
                    <View style={styles.header}>
                        <Text category="h4" style={styles.title}>MusicalTools</Text>
                        <Text style={styles.text}>{t('home:usefulTools')}</Text>
                    </View>
                )}
                footer={() => (
                    <View style={styles.footer}>
                        <Text
                            style={styles.rate}
                            status='primary'
                            onPress={() => Linking.openURL(`market://details?id=com.musicaltools`)}
                        >
                            {t('home:leaveComments')}
                        </Text>
                    </View>
                )}
            >
                <View>
                    <Button
                        style={styles.button}
                        size="large"
                        appearance="ghost"
                        onPress={() => navigation.navigate(scaleFinder.section)}
                    >
                        {t('scaleFinder')}
                    </Button>
                    <Button
                        style={styles.button}
                        size="large"
                        appearance="ghost"
                        onPress={() => navigation.navigate(circleOfFifths.section)}
                    >
                        {t('circleOfFifths')}
                    </Button>
                </View>
            </Card>
        </Layout>
    );
};

export default Home;