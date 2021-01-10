import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button, Layout, Divider, Text, Icon, Card, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './styles';
import { setNotationType, setInstrumentSound } from '../../store/actions/settings';

const languages = [
    {code: 'en', label: 'English'},
    {code: 'es', label: 'Español'},
  ];

const Settings = () => {
    const dispatch = useDispatch();
    const { notationType, instrumentSound } = useSelector(state => state.settings);
    const { t, i18n } = useTranslation();
    const selectedLanguage = useMemo(() => {
        const currentLanguage = i18n.language;
        return languages.find(language => language.code === currentLanguage);
    }, [i18n.language]);

    const setLanguage = useCallback(selected => {
        const language = languages[selected.row];
        i18n.changeLanguage(language.code);
    }, [i18n]);

    const activeButton = useMemo(() =>
        type => type === notationType ? 'primary' : 'basic'
    ,[notationType]);

    const VolumeIcon = useCallback((props) => (
        <Icon
            {...props}
            name={instrumentSound ? 'volume-up-outline' : 'volume-off-outline'}
        />
    ), [instrumentSound]);

    const saveNotationType = useCallback(async value => {
        dispatch(setNotationType(value));
    }, [dispatch]);

    const saveSound = useCallback(async () => {
        dispatch(setInstrumentSound(!instrumentSound));
    }, [instrumentSound, dispatch]);

    return (
        <Layout style={styles.page} level="4">
            <Card disabled>
                <Layout style={styles.section}>
                    <Text>{t('settings:notation')}</Text>
                    <View style={styles.notesButtons}>
                        <Button
                            status={activeButton('C')}
                            style={styles.firstButton}
                            onPress={() => saveNotationType('C')}
                        >C</Button>
                        <Button
                            status={activeButton('Do')}
                            style={styles.middleButton}
                            onPress={() => saveNotationType('Do')}
                        >Do</Button>
                        <Button
                            status={activeButton('None')}
                            style={styles.lastButton}
                            onPress={() => saveNotationType('None')}
                        >{t('settings:none')}</Button>
                    </View>
                </Layout>
                <Divider />
                <Layout style={styles.section}>
                    <Text>{t('settings:instrumentSound')}</Text>
                    <Button
                        status={instrumentSound ? 'primary' : 'basic'}
                        onPress={saveSound}
                        accessoryLeft={VolumeIcon}
                    />
                </Layout>
                <Layout style={styles.section}>
                    <Text>{t('settings:language')}</Text>
                    <Select
                        value={selectedLanguage.label}
                        onSelect={setLanguage}
                        style={styles.language}
                    >
                        {languages.map(language => (
                            <SelectItem key={language.code} title={language.label} />
                        ))}
                    </Select>
                </Layout>
            </Card>
        </Layout>
    );
};

export default Settings;