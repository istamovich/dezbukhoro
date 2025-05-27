const TelegramButton = () => {
    return (
      <a
        href="https://t.me/YOUR_TELEGRAM_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300 before:content-[''] before:absolute before:w-15 before:h-15 before:bg-green-500 before:opacity-50 before:rounded-full before:animate-ping"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M22 2L2.001 10.645 9.099 13.16 17.826 5.661 10.361 14.82 10.36 18.933 13.683 15.822 17.05 18.047 22 2Z" />
        </svg>
      </a>
    );
  };
  
  export default TelegramButton;
  