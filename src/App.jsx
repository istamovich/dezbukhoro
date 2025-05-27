import "./App.css";
import Buttons from "./components/buttons";
import logo from "./assets/logo.png";
import LanguageDropdown from "./components/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { faLocationDot, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import show from "./assets/show.webp";
import AboutCard from "./components/aboutCard";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServerCards from "./components/sersecCard";
import serves from "./assets/servers.png";
import serves2 from "./assets/servers2.png";
import serves3 from "./assets/servers3.png";
import ServesType from "./components/servesType";
import hashorat from "./assets/hashorat.jpg";
import hashorat3 from "./assets/hashorat3.jpg";
import hashorat4 from "./assets/hashorat4.jpg";
import hashorat5 from "./assets/5.jpg";
import hashorat6 from "./assets/hashorat6.jpg";
import serversphotos from "./assets/serversphotos.jpg";
import servericon from "./assets/servericon.svg";
import According from "./components/according";
import { icons } from "./assets/icons";
import TelegramButton from "./components/telegram";
import { useLanguage } from "./context/LanguageContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { toast } from "react-toastify";

function App() {
  const [burger, setBurger] = useState(false);
  const { language, translations } = useLanguage();
  const SendMessage =(event)=>{
    event.preventDefault();
    const token ="7829207456:AAGyt3gkjovKgZvpLllo411zRLLwX4rMQJc"
    const chatId='5445767761'
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const name =document.getElementById('name').value
    const number =document.getElementById('number').value
    const massageName = `Ism :${name} \n Number:${number}`

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: massageName,
      },
    })
      .then((res) => {
        document.getElementById("myForm").reset();
        toast.success("Xabar muvaffaqiyatli yuborildi! 🎉", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.error("Xatolik yuz berdi! ❌", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  }
  const handBurger = () => {
    setBurger(!burger);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const scrollToSection = (event) => {
    event.preventDefault(); // Sahifani qayta yuklanishining oldini oladi
    const targetId = event.target.getAttribute("href").substring(1); // "about", "services" kabi ID ni olish
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className=" sticky top-0 z-40 bg-white">
        <div className="shadow-lg w-full py-[20px]">
          <div className="flex items-center justify-between  max-w-[1550px]  mx-auto container">
            <a href=""><img className="w-[200px] h-[72px]" src={logo} /></a>

            <div className="flex items-center justify-between gap-[15px]">
              <ul className="flex items-center justify-between gap-[25px] mr-4 max-[860px]:hidden">
                <li>
                  <a
                    className="font-normal text-[20px] text-gray-500 hover:text-black max-[920px]:text-[16px]"
                    href="#home"
                    onClick={scrollToSection}
                  >
                    {translations[language].navbar.home}
                  </a>
                </li>
                <li>
                  <a
                    className="font-normal text-[20px] text-gray-500 hover:text-black max-[920px]:text-[16px]"
                    href="#about"
                    onClick={scrollToSection}
                  >
                    {translations[language].navbar.about}
                  </a>
                </li>
                <li>
                  <a
                    className="font-normal text-[20px] text-gray-500 hover:text-black max-[920px]:text-[16px]"
                    href="#services"
                    onClick={scrollToSection}
                  >
                    {translations[language].navbar.services}
                  </a>
                </li>
                <li>
                  <a
                    className="font-normal text-[20px] text-gray-500 hover:text-black max-[920px]:text-[16px]"
                    href="#faq"
                    onClick={scrollToSection}
                  >
                    {translations[language].navbar.FAQ}
                  </a>
                </li>
              </ul>

              <LanguageDropdown />
              <button
                onClick={handBurger}
                className="hidden max-[860px]:block text-[23px] text-green-500"
              >
                <FontAwesomeIcon icon={faBarsStaggered} />
              </button>
              <a className="max-[860px]:hidden">
                <Buttons send="Bog'lanish" />
              </a>
            </div>
          </div>
        </div>

        {/* burger minu */}
        <div
          className={`navrespons hidden max-md:block w-[70%] ml-auto z-20 h-screen  p-0 fixed duration-500 top-[0%] right-0 ease ${
            burger ? "translate-x-[0%]" : "translate-x-[200%]"
          }`}
        >
          <div
            className={`burger-menu w-[100%]  h-full ml-auto ease-in-out duration-500 ${
              burger ? "translate-x-[0%]" : "translate-x-[100%] "
            } `}
          >
            <div className="bg-white h-full px-[20px] pt-[60px]">
              <button
                onClick={handBurger}
                className="text-green-500 hidden text-[18px] max-md:block absolute top-[43px] right-[26px]"
              >
                <FontAwesomeIcon icon={faX} />
              </button>

              <div className="flex flex-col justify-between  gap-[15px]">
                <ul className="flex items-left justify-center flex-col gap-[25px] mr-4">
                  <li onClick={handBurger}>
                    <a onClick={scrollToSection}
                      className="font-normal text-[20px] text-gray-500 hover:text-black"
                      href="#home"
                    >
                      {translations[language].navbar.home}
                    </a>
                  </li>
                  <li onClick={handBurger}>
                    <a
                      onClick={scrollToSection}
                      className="font-normal text-[20px] text-gray-500 hover:text-black"
                      href="#about"
                    >
                      {translations[language].navbar.about}
                    </a>
                  </li>
                  <li onClick={handBurger}>
                    <a
                    onClick={scrollToSection}
                      className="font-normal text-[20px] text-gray-500 hover:text-black"
                      href="#services"
                    >
                      {translations[language].navbar.services}
                    </a>
                  </li>
                  <li onClick={handBurger}>
                    <a
                    onClick={scrollToSection}
                      className="font-normal text-[20px] text-gray-500 hover:text-black"
                      href="#faq"
                    >
                      {translations[language].navbar.FAQ}
                    </a>
                  </li>
                </ul>
                <div onClick={handBurger}>
                  <Buttons send="Bog'lanish" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={handBurger}
          className={` ${
            burger
              ? "opacity-100 backdrop-blur overlay w-full  h-screen z-10 max-md:block  fixed top-0 duration-0 ease"
              : "opacity-0 hidden ease"
          }`}
        ></div>
      </header>

      <main>
        <div className="container">
          <div id="home" className="py-[50px] max-sm:py-[25px]">
            <div className=" flex justify-between items-center max-[860px]:hidden">
              <div className="flex flex-col justify-start w-[50%]">
                <h1 className="text-[50px] text-[#44a842;] font-medium leading-[60px] max-lg:text-[40px]">
                {translations[language].main.welcome}
                </h1>
                <h3 className="w-[400px] text-[20px] text-[#272121] font-medium my-[50px] max-lg:text-[16px]">
                {translations[language].main.description}
                </h3>
                <Buttons send="Bog'lanish" />
              </div>

              <img className="w-[50%] rounded-3xl" src={show} alt="show" />
            </div>

            <div className="hidden max-[860px]:block">
              <div className="flex flex-col justify-between background  p-[20px] rounded-3xl">
                <h1 className="text-[40px] text-white font-medium max-w-[750px] max-[452px]:text-[30px] leading-[37px]">
                {translations[language].main.welcome}
                </h1>
                <h3 className="w-[400px] max-[452px]:w-full text-[16px] text-white font-medium max-[452px]:text-[14px]">
                {translations[language].main.description}
                </h3>
                <Buttons send="Bog'lanish" />
              </div>
            </div>
          </div>

          {/* biz haqimizda */}
          <div
            id="about"
            data-aos="fade-right"
            className="mt-[60px] mb-[100px]"
          >
            <h3 className="text-[#023107] font-bold text-2xl mb-[30px]">
            {`${translations[language].main.aboutUs}`}
            </h3>
            <div className="pt-[30px] border-t border-gray-400 flex items-center justify-between gap-4 max-[850px]:flex-col">
              <AboutCard img={icons.quick} title={`${translations[language].main.aboutCards}`} text={`${translations[language].main.aboutCardsText}`}/>
              <AboutCard img={icons.ourSenior} title={`${translations[language].main.aboutCards2}`} text={`${translations[language].main.aboutCardsText2}`}/>
              <AboutCard img={icons.fire} title={`${translations[language].main.aboutCards3}`} text={`${translations[language].main.aboutCardsText3}`}/>
            </div>
          </div>

          <div className="mb-[50px]">
            <div className="py-[100px] pl-[50%] max-[800px]:px-[20px] max-sm:py-[50px] flex flex-col justify-between background2  p-[20px] rounded-3xl">
              <h1
                data-aos="fade-right"
                className="text-[40px] text-[#fafafa] font-bold max-[452px]:text-[30px] leading-[45px] max-sm:leading-[35px]"
              >
                {`${translations[language].main.aboutInfo}`}
              </h1>
              <h3
                data-aos="fade-right"
                className="w-[400px]  mb-[50px] mt-[20px] max-[452px]:w-full text-[16px] text-white font-medium max-[452px]:text-[14px]"
              >
                {translations[language].main.aboutInfo2}
              </h3>
              <Buttons data-aos="fade-right" send="Bog'lanish" />
            </div>
          </div>

          {/* xizmatlar */}
          <div id="services" className="mb-[100px] ">
            <h2
              data-aos="fade-right"
              className="mb-[43px] max-sm:mb-[16px] text-[52px] max-sm:text-[32px] text-[rgb(2,49,6)] font-bold"
            >
              {translations[language].main.serves}
            </h2>
            <h2
              data-aos="fade-right"
              className="mb-[18px] text-[18px] max-sm:text-[14px] text-[#666] font-bold"
            >
              {translations[language].main.serves2}
            </h2>
            <div>
              <ServerCards
                img={serves}
                title={`${translations[language].main.servesInfo}`}
                text={`${translations[language].main.servesInfo2}`}
              />
              <ServerCards
                img={serves2}
                title={`${translations[language].main.servesInfo}`}
                text={`${translations[language].main.servesInfo2}`}
              />
              <ServerCards
                img={serves3}
                title={`${translations[language].main.servesInfo}`}
                text={`${translations[language].main.servesInfo2}`}
              />
            </div>
          </div>

          {/* xixmatlar turi */}
          <div>
            <h2
              data-aos="fade-right"
              className="mb-[43px] text-[52px] text-[#020c31] font-bold max-sm:text-[40px]"
            >
              {translations[language].main.serviceType}
            </h2>
            <div className="grid grid-cols-3 max-[1250px]:grid-cols-2 max-md:grid-cols-1 gap-[30px]">
              <ServesType
                img={hashorat}
                title={translations[language].main.insects}
                text={translations[language].main.insectsTitle}
              />
              <ServesType
                img={hashorat3}
                title={translations[language].main.insects2}
                text={translations[language].main.insectsTitle2}
              />
              <ServesType
                img={hashorat4}
                title={translations[language].main.insects3}
                text={translations[language].main.insectsTitle3}
              />
              <ServesType
                img={hashorat5}
                title={translations[language].main.insects4}
                text={translations[language].main.insectsTitle4}
              />
              <ServesType
                img={hashorat6}
                title={translations[language].main.insects5}
                text={translations[language].main.insectsTitle5}
              />
            </div>
          </div>

          <div className="backs py-[30px] rounded-2xl px-[20px] flex items-center justify-between gap-[30px] my-[100px]">
            <img
              className="rounded-2xl max-lg:w-[350px] max-lg:h-[340px] max-md:hidden"
              src={serversphotos}
              alt="serversphotos"
            />

            <div className="w-[60%] max-md:w-[90%]">
              <img
                data-aos="fade-right"
                className="rounded-4xl"
                src={servericon}
                alt="serversphotos"
              />
              <h3
                data-aos="fade-right"
                className="text-white text-[32px] max-lg:text-[22px] font-bold leading-[48px] mt-[12px] mb-[50px] max-lg:mb-[30px] max-lg:leading-[30px]"
              >
                {translations[language].main.Official}
              </h3>
              <button
                href="#info"
                onClick={scrollToSection}
                data-aos="fade-right"
                className={`w-[190px] bg-white py-[10px] max-[920px]:py-[8px] px-[26px] rounded-4xl`}
              >
                <a
                  href="#info"
                  onClick={scrollToSection}
                  className="text-[17px] font-bold text-black max-[920px]:text-[16px]"
                >
                  {translations[language].main.buttonSend}
                </a>
              </button>
            </div>
          </div>

          <div id="faq" className="mb-[100px]">
            <h2 className="text-[40px] font-medium text-[#002206] mb-[40px]">
              {translations[language].navbar.FAQ}
            </h2>
            <According />
          </div>

          <div id="info" className="background3 py-[30px] px-[20px] mb-[100px]">
            <div className="py-[50px] px-[50px] max-sm:p-[15px] rounded-2xl bg-[#fff] w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <h2 className="text-[#242825] text-[32px] font-bold mb-[32px] max-[450px]:text-[24px] max-[450px]:mb-[24px]">
              {translations[language].main.information}
              </h2>
              <h3 className="text-[#242825] text-[16px] font-bold mb-[16px]">
              {translations[language].main.information}
              </h3>
              {/* <form id="myForm" className="flex flex-col" onSubmit={SendMessage}>
                <input
                id="name"
                  placeholder={translations[language].main.infoName}
                  type="text"
                  className="bg-[#e4e4e4] p-[10px] rounded-[5px] mb-[20px] border-2 border-transparent focus:border-yellow-500 outline-none"
                />

                <input
                  id="number"
                  type="text"
                  placeholder="+998-94-033-72-12"
                  className="bg-[#e4e4e4] p-[10px] rounded-[5px] mb-[20px] border-2 border-transparent focus:border-yellow-500 outline-none"
                  onInput={(e) => {
                    let value = e.target.value.replace(/\D/g, ""); // Faqat raqamlarni olish
                    if (!value.startsWith("998")) value = "998" + value; // +998 prefiksi qo‘shish
                    value = value.substring(0, 12); // Maksimal 12 ta raqam (998 XX XXX XX XX)

                    // Formatlash
                    let formatted = `+${value.substring(0, 3)}`;
                    if (value.length > 3)
                      formatted += ` ${value.substring(3, 5)}`;
                    if (value.length > 5)
                      formatted += `-${value.substring(5, 8)}`;
                    if (value.length > 8)
                      formatted += `-${value.substring(8, 10)}`;
                    if (value.length > 10)
                      formatted += `-${value.substring(10, 12)}`;

                    e.target.value = formatted;
                  }}
                />

                <button
                type="submit"
                  className={`w-full bg-green-700 py-[10px] max-[920px]:py-[8px] px-[26px] rounded-[5px] hover:bg-green-700/70  `}
                >
                  <a className="text-[17px] font-bold text-white max-[920px]:text-[16px]">
                  {translations[language].main.send}
                  </a>
                </button>
              </form> */}

<form id="myForm" className="flex flex-col" onSubmit={SendMessage}>
  <input
    id="name"
    placeholder={translations[language].main.infoName}
    type="text"
    required
    className="bg-[#e4e4e4] p-[10px] rounded-[5px] mb-[20px] border-2 border-transparent focus:border-yellow-500 outline-none"
  />

  <input
    id="number"
    type="text"
    placeholder="+998-94-033-72-12"
    required
    className="bg-[#e4e4e4] p-[10px] rounded-[5px] mb-[20px] border-2 border-transparent focus:border-yellow-500 outline-none"
    onInput={(e) => {
      let value = e.target.value.replace(/\D/g, ""); // Faqat raqamlarni olish
      if (!value.startsWith("998")) value = "998" + value;
      value = value.substring(0, 12);
      
      let formatted = `+${value.substring(0, 3)}`;
      if (value.length > 3) formatted += ` ${value.substring(3, 5)}`;
      if (value.length > 5) formatted += `-${value.substring(5, 8)}`;
      if (value.length > 8) formatted += `-${value.substring(8, 10)}`;
      if (value.length > 10) formatted += `-${value.substring(10, 12)}`;
      
      e.target.value = formatted;
    }}
  />

  <button
    type="submit"
    className="w-full bg-green-700 py-[10px] max-[920px]:py-[8px] px-[26px] rounded-[5px] hover:bg-green-700/70"
  >
    <a className="text-[17px] font-bold text-white max-[920px]:text-[16px]">
      {translations[language].main.send}
    </a>
  </button>
</form>

            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="mb-[150px] border-t-2 border-gray-500 pt-[70px]">
          <div className="container flex items-center gap-[200px] max-lg:justify-between max-lg:gap-[25px] max-sm:flex-col max-sm:items-start">
            <img src={logo} alt="logo" />
            <div>
              <a
                className="text-black text-[16px] font-bold flex items-center gap-[25px] mb-2.5"
                href="https://maps.app.goo.gl/rKgu3uRC1VMye3vG7"
              >
                <span className="border-2 border-gray-500 rounded-[8px] w-[44px] h-[44px] flex items-center justify-center text-gray-500">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                {translations[language].footer.location} <span>{icons.rightUp}</span>
              </a>
              <a
                className="text-black text-[16px] font-bold flex items-center gap-[25px]"
                href="tel:+998940337212"
              >
                <span className="border-2 border-gray-500 rounded-[8px] w-[44px] h-[44px] flex items-center justify-center text-gray-500">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                {translations[language].footer.locNum}<span>{icons.rightUp}</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <TelegramButton/>
    </>
  );
}

export default App;
