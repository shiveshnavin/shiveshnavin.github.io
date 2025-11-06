import { I18n as I18nEngine } from 'i18n-js';
import { Platform } from 'react-native';
import { I18n } from 'react-native-boxes';
import en from './en.json';
import es from './es.json';
import hi from './hi.json';
import hinglish from './hinglish.json';

export const SupportedLanguages = [
    {
        code: 'en',
        label: 'English'
    }, {
        code: 'es',
        label: 'Español'
    }, {
        code: 'hi',
        label: 'हिन्दी'
    }, {
        code: 'hinglish',
        label: 'Hinglish'
    }]

export function getLocaleProvider(locale = 'en'): I18n {
    const I18nProvider = new I18nEngine({
        en,
        hi,
        hinglish,
        es
    });
    I18nProvider.enableFallback = true;
    I18nProvider.missingBehavior = "guess";

    let tOriginal = I18nProvider.t.bind(I18nProvider)
    I18nProvider.t = (scope, options) => {
        if (scope == undefined)
            return ''
        if (typeof scope == 'string') {
            if (scope.startsWith("{{") && scope.endsWith("}}")) {
                return scope.replace("{{", "").replace("}}", "")
            }
        }
        return tOriginal(scope, options)
    }

    if (Platform.OS === 'web') {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('locale')?.trim();
        if (langParam) {
            I18nProvider.locale = langParam;
            I18nProvider.defaultLocale = 'en';
        }
    }

    return I18nProvider as unknown as I18n;
}