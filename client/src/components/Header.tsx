import { useState } from "react";
import axios from "axios";
import { BASE_URL, BOT_NAME, MessagesType } from "../config/utils";
import RefreshIcon from "../assets/svgs/RefreshIcon";

interface TitleProps {
  setMessages: React.Dispatch<React.SetStateAction<MessagesType[]>>;
}

function Header({ setMessages }: TitleProps) {
  const [isResettingState, setIsResettingState] = useState(false);

  const handleResetConversation = async () => {
    setIsResettingState(true);

    try {
      const res = await axios.get(`${BASE_URL}/reset`);
      res.status === 200
        ? setMessages([])
        : console.log("There was an error with the API request");
      setIsResettingState(false);
    } catch (error) {
      console.log(error);
      setIsResettingState(false);
    }
  };
  return (
    <div className="flex justify-between items-center w-full p-4 bg-gray-900 text-white font-bold shadow">
      <div className="italic uppercase">{BOT_NAME}</div>
      <button
        className={
          "transition-all duration-300 text-blue-300 hover:text-pink-500 " +
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
