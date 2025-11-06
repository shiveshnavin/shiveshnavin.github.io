import { I18n } from 'i18n-js';


const I18nProvider = new I18n({
    en: import('./en.json'),
    hi: import('./hi.json'),
    hinglish: import('./hinglish.json'),
    es: import('./es.json'),
});
I18nProvider.missingBehavior = "guess";

export default I18nProvider;