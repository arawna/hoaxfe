import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                "Sign Up": "Sign Up",
                "Password mismatch": "Password mismatch",
                "Username": "Username",
                "Display Name": "Display Name",
                "Password": "Password",
                "Password Repeat": "Password Repeat",
                "Login": "Login"
            }
        },
        tr: {
            translations: {
                "Sign Up": "Kayıt Ol",
                "Password mismatch": "Şifre eşleşmiyor",
                "Username": "Kullanıcı Adı",
                "Display Name": "Tercih edilen isim",
                "Password": "Şifre",
                "Password Repeat": "Şifre Tekrar",
                "Login": "Sisteme Gir"
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
})

export default i18n;