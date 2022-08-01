import en from './locales/en.js';
import uz from './locales/uz.js';
import ru from './locales/ru.js';
import { createI18n } from 'vue-i18n'

let lang = localStorage.getItem('lang') || 'uz';

const i18n = createI18n({
    locale: lang,
    allowChangingLocale: true,
    messages: {
        en,
        uz,
        ru
    },
    missing: (locale, key) => {
        console.log(`Missing translation: ${key}`);
        return `${key} is missing for ${locale}`;
    }
})

export default i18n