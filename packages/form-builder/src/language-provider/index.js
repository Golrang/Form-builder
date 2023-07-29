import enLang from "./entries/en-us";
import itLang from "./entries/it-it";
import vnLang from "./entries/vi-vn";
import faLang from "./entries/fa-fa";

export const AppLanguages = [
  {
    languageId: "vietnamese",
    locale: "vi",
    name: "Vietnamese",
    icon: "vn",
  },
  {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "us",
  },
  {
    languageId: "farsi",
    locale: "fa",
    name: "Farsi",
    icon: "fa",
  },
  {
    languageId: "italian",
    locale: "it",
    name: "Italiano",
    icon: "it",
  },
];

const AppLocale = {
  en: enLang,
  vi: vnLang,
  it: itLang,
  fa: faLang,
};

export default AppLocale;
