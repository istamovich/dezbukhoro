import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext";

export default function FAQAccordion() {
  const { language, translations } = useLanguage();
    useEffect(() => {
            AOS.init({ 
                duration: 1000, 
                once: true 
            });
        }, []);
  return (
    <div>
     

      <Accordion
        sx={{
          boxShadow: "none", // Default shadow'ni olib tashlaymiz
          borderBottom: "1px solid #ccc", // Faqat pastki chegarani qo'shamiz
          "&:before": { display: "none" }, // MUI Accordion ning default border effektini olib tashlaymiz
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="border-b border-red-500"
        >
          <h4 className="text-[30px] font-normal text-[rgb(96,96,112)] max-sm:text-[20px]">
          {translations[language].main.faqInfo}
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p data-aos="fade-right"  className="text-[#404040] text-[16px] font-medium max-sm:text-[15px]">
          {translations[language].main.faqInfoMore}
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none", // Default shadow'ni olib tashlaymiz
          borderBottom: "1px solid #ccc", // Faqat pastki chegarani qo'shamiz
          "&:before": { display: "none" }, // MUI Accordion ning default border effektini olib tashlaymiz
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="border-b border-red-500"
        >
          <h4 className="text-[30px] font-normal text-[rgb(96,96,112)] max-sm:text-[20px]">
          {translations[language].main.faqInfo2}
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p data-aos="fade-right"  className="text-[#404040] text-[16px] font-medium max-sm:text-[15px]">
          {translations[language].main.faqInfoMore2}
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none", // Default shadow'ni olib tashlaymiz
          borderBottom: "1px solid #ccc", // Faqat pastki chegarani qo'shamiz
          "&:before": { display: "none" }, // MUI Accordion ning default border effektini olib tashlaymiz
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="border-b border-red-500"
        >
          <h4 className="text-[30px] font-normal text-[rgb(96,96,112)] max-sm:text-[20px]">
          {translations[language].main.faqInfo3}
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <p data-aos="fade-right"  className="text-[#404040] text-[16px] font-medium max-sm:text-[15px]">
          {translations[language].main.faqInfoMore3}
          </p>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
