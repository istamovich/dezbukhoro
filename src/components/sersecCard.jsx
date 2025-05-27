import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function ServerCards({title,text,img}){
    useEffect(() => {
                AOS.init({ 
                    duration: 1000, 
                    once: true // ❗️ Animatsiya faqat bir marta ishlaydi
                });
            }, []);
    return(
        <div data-aos="fade-right" className="mt-[30px] flex justify-between items-center gap-5 py-[20px] px-[30px] max-md:px-[10px] border border-gray-400 rounded-3xl max-md:flex-col">
            <img className="w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px]" src={img} alt="serves" />

            <div className="w-[65%] max-md:w-full max-md:items-center">
                <h2 className="text-[#033102] text-[26px] font-bold my-[26px] max-sm:text-[22px] max-sm:mb-[22px] max-md:text-center">{title}</h2>
                <p className="text-[#49574e] text-[16px] font-light my-[16px] max-sm:text-[14px] max-sm:mb-[14px]  max-md:text-center">{text}</p>
            </div>
        </div>
    )
}