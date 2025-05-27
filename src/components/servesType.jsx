import Buttons from "./buttons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServesType({ title, text, img }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ❗️ Animatsiya faqat bir marta ishlaydi
    });
  }, []);
  return (
    <div className="w-full bg-[#c4f7cb] p-[20px] rounded-3xl flex flex-col h-full">
      <h2 className="text-[#023104] text-[32px] font-bold mb-[25px] max-sm:text-[22px] max-sm:mb-[22px]">
        {title}
      </h2>
      {/* flex-grow ishlashi uchun max-h-[200px] beramiz */}
      <p className="text-[#495157] text-[16px] font-light mb-[20px] max-sm:text-[16px] max-sm:mb-[14px] flex-grow max-h-[200px] overflow-auto">
        {text}
      </p>
      <div className="flex items-end justify-between gap-3.5 mt-auto">
        <Buttons send="Bog'lanish" />
        <img
          className="w-[150px] h-[150px] max-md:w-[100px] max-md:h-[100px] rounded-full"
          src={img}
          alt="hashorat"
        />
      </div>
    </div>
  );
}
