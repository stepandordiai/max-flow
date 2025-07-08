import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import cs from "./assets/locales/cs/locale.json";
import sk from "./assets/locales/sk/locale.json";
import en from "./assets/locales/en/locale.json";

export default i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			cs: {
				translation: cs,
			},
			sk: {
				translation: sk,
			},
			en: {
				translation: en,
			},
		},

		fallbackLng: "cs",

		detection: {
			order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
			caches: ["localStorage", "cookie"],
		},

		interpolation: {
			escapeValue: false,
		},
	});
