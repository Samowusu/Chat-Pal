import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { BASE_URL, BOT_NAME, MessagesType } from "../config/utils";
import RefreshIcon from "../assets/svgs/RefreshIcon";

interface TitleProps {
  setMessages: React.Dispatch<React.SetStateAction<MessagesType[]>>;
}

function Header({ setMessages }: TitleProps) {
  const [isResettingState, setIsResettingState] = useState(false);
  const [currentTimestampState, setCurrentTimestampState] = useState("");

  useEffect(() => {
    const updateTimestamp = () => {
      const currentDate = new Date();

      const options: Intl.DateTimeFormatOptions = {
        // weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
      const time = currentDate.toLocaleTimeString("en-US", options);
      const formattedTimestamp = `${day}, ${time}`;

      setCurrentTimestampState(formattedTimestamp);
    };

    updateTimestamp();

    // Update the timestamp every minute
    const intervalId = setInterval(updateTimestamp, 6000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  const handleResetConversation = async () => {
    setIsResettingState(true);

    try {
      const res = await axios.get(`${BASE_URL}/reset`);
      res.status === 200
        ? setMessages([])
        : console.log("There was an error with the API request");
      setIsResettingState(false);
    } catch (error: any) {
      console.log(error);
      alert(error.message);
      setIsResettingState(false);
    }
  };
  return (
    <div className="flex justify-between items-center w-full p-4 bg-transparent text-white font-bold shadow">
      <p className="flex-grow text-center">{currentTimestampState}</p>
      <button
        className={
          "transition-all self-end duration-300 text-blue-300 hover:text-pink-500 " +
          (isResettingState && "animate-pulse")
        }
        onClick={handleResetConversation}
      >
        <RefreshIcon />
      </button>
    </div>
  );
}

export default Header;
