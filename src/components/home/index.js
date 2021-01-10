import React from 'react';
import { Layout, Card, Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout level="4">
            <Card>
                <Text>{t('home:welcome')}</Text>
            </Card>
        </Layout>
    );
};

export default Home;