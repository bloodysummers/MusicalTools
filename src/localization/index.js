import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './en';
import es from './es';

export const AVAILABLE_LANGUAGES = {
    en,
    es
};

const AVAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES);

const languageDetector = {
    type: 'languageDetector',
    async: true,
    init: () => {
    /* use services and options */
    },
    detect: async (callback) => {
        const language = await AsyncStorage.getItem('APP_LANG');
        if (!language) {
            const bestLanguage = RNLocalize.findBestAvailableLanguage(AVAILABLE_LANG_CODES) || {};
            callback(bestLanguage.languageTag || 'en');
            return;
        }
        callback(language);
    },
    cacheUserLanguage: (lng) => {
        AsyncStorage.setItem('APP_LANG', lng);
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: AVAILABLE_LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'common'
    });