import { icons } from "../assets/icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutCard({img,title,text}) {
    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true
        });
    }, []);

    return (
        <div data-aos="fade-right" className="w-[32%] max-[850px]:w-full max-[850px]:border max-[850px]:border-gray-400 rounded-2xl max-[850px]:px-[10px] max-[850px]:py-[15px]">
            <div className="text-green-700">{img}</div>
            <h3 className='text-[#081b02] text-[25px] font-bold py-[25px]'>{title}</h3>
            <p className='text-[#678372] text-[16px] font-normal'>
                {text}
            </p>
        </div>
    );
}
