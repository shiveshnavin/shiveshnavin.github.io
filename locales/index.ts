import { I18n as I18nEngine } from 'i18n-js';
import { Platform } from 'react-native';
import { I18n } from 'react-native-boxes';
import en from './en.json';
import es from './es.json';
import hi from './hi.json';
import hinglish from './hinglish.json';


export function getLocaleProvider(locale = 'en'): I18n {
    const I18nProvider = new I18nEngine({
        en,
        hi,
        hinglish,
        es
    });
    I18nProvider.missingBehavior = "guess";

    if (Platform.OS === 'web') {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('locale')?.trim();
        if (langParam) {
            I18nProvider.locale = langParam;
            I18nProvider.defaultLocale = langParam;
        }
        console.log("Current locale:", I18nProvider);
    }
    return I18nProvider as unknown as I18n;
}