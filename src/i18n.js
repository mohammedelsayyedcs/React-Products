// handles all translation logic
import i18n from "i18next";
// Automatically detects the user's language (from browser settings, localStorage, etc.)
import languageDetector from "i18next-browser-languagedetector";
// Loads translation files from the server using an HTTP request (ex: /locales/en/translation.json)
import httpApi from "i18next-http-backend";
// Imports the connector that lets i18next work inside React
import { initReactI18next } from "react-i18next";

i18n.use(languageDetector)
    // Adds the HTTP backend plugin to load translation JSON files
    .use(httpApi)
    // Connects i18n to React so you can use useTranslation() in components
    .use(initReactI18next)
    // Starts the configuration object
    .init({
        // Defines which languages your website supports
        supportedLngs: ["en", "ar"],
        // Turns off debugging logs in the console
        debug: false,
        // Set Default Language
        fallbackLng: "en",
        // React already protects from XSS, so don't escape text
        interpolation: { escapeValue: false },
        /* 
            Configures the HTTP loader:               
            The translation files will be loaded from: 
            /locales/en/translation.json               
            /locales/ar/translation.json               
            {{ lang }} is automatically replaced with the selected language 
         */
        backend: { localPath: "/locales/{{lang}}/translation.json" },
        /*
            Order of detection:
            -------------------
            localStorage: if user selected before.
            navigator   : browser language.
            htmlTag     : <html lang="...">
            path        : URL language (ex: /en/home)
            subDomain   : (ex: ar.example.com)
         */
        detectors: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    })

i18n.on("languageChanged", (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
})

export default i18n;
