// const scrollToSection = (event) => {
//     event.preventDefault(); // Sahifani qayta yuklanishining oldini oladi
//     const targetId = event.target.getAttribute("href").substring(1); // "about", "services" kabi ID ni olish
//     const targetSection = document.getElementById(targetId);
  
//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   };
//   import { useLanguage } from "../context/LanguageContext";

// export default function Buttons({send}){
//     const { language, translations } = useLanguage();
//     return(
//         <>
//         <button href="#info" onClick={scrollToSection} className={`w-[190px] bg-green-700 py-[10px] max-[920px]:py-[8px] px-[26px] rounded-4xl hover:bg-green-700/70  `}><a onClick={scrollToSection} className="text-[17px] font-bold text-white max-[920px]:text-[16px]">{translations[language].navbar.contact}</a></button>
//         </>
//     )
// }

import { useLanguage } from "../context/LanguageContext";

export default function Buttons({ send }) {
  const { language, translations } = useLanguage();

  const scrollToSection = (event) => {
    event.preventDefault(); // Sahifani qayta yuklanishining oldini oladi
    const targetId = event.currentTarget.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      data-target="info"
      onClick={scrollToSection}
      className="w-[190px] bg-green-700 py-[10px] max-[920px]:py-[8px] px-[26px] rounded-4xl hover:bg-green-700/70 text-[17px] font-bold text-white max-[920px]:text-[16px]"
    >
      {translations[language].navbar.contact}
    </button>
  );
}
