import { createContext, useContext, useState } from "react";
import translations from "../content/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru"); // 🔹 Default til: O‘zbek

  // 🔹 Tilni o‘zgartirish funksiyasi
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 🔥 4️⃣ Contextni ishlatish uchun custom hook
export const useLanguage = () => useContext(LanguageContext);
