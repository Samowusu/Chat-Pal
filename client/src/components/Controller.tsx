import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import {
  BASE_URL,
  BOT_NAME,
  DUMMY_MESSAGES,
  MessagesType,
} from "../config/utils";
import RecordMessage from "./RecordMessage";
import AudioPlayer from "./AudioPlayer";

function Controller() {
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [messagesState, setMessagesState] = useState<MessagesType[]>([]);

  const handleCreateBlobUrl = (data: any) => {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  };

  //bloburl gives you the url to the binary data(audio in this case)
  // so there is the need to fetch the actual audio and post it to the backend
  const handleStopRecording = async (blobUrl: string) => {
    try {
      setIsLoadingState(true);
      const myMessage = { sender: "me", blobUrl };
      const updatedMessages = [...messagesState, myMessage];
      setMessagesState(updatedMessages);

      const response = await fetch(blobUrl);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("file", blob, "myFile.wav");

      const res = await axios.post(`${BASE_URL}/post-audio`, formData, {
        headers: { "Content-Type": "audio/mpeg" },
        responseType: "arraybuffer",
      });

      const audioBlob = res.data;

      const audioUrl = handleCreateBlobUrl(audioBlob);

      const botMessage = { sender: BOT_NAME, blobUrl: audioUrl };
      const updatedWithBotMessage = [...updatedMessages, botMessage];
      setMessagesState(updatedWithBotMessage);

      setIsLoadingState(false);

      const audio = new Audio();
      audio.src = audioUrl;
      audio.play();
    } catch (error: any) {
      console.log(error);
      alert(error.message);
      setIsLoadingState(false);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="h-full overflow-y-hidden w-full max-w-lg ">
      <Header setMessages={setMessagesState} />
      <div className="flex flex-col justify-between h-full overflow-y-auto pb-96">
        <div className="mt-5 px-5">
          {messagesState.map((audio, index) => (
            <div
              key={index + audio.sender}
              className={
                "flex flex-col " +
                (audio.sender === `${BOT_NAME}` && "items-end")
              }
            >
              <div className="mt-4">
                <p
                  className={
                    audio.sender === `${BOT_NAME}`
                      ? "text-right mr-2 italic text-green-500"
                      : "ml-2 italic text-blue-500"
                  }
                >
                  {audio.sender}
                </p>

                <AudioPlayer file={audio.blobUrl} />
              </div>
            </div>
          ))}

          {messagesState.length === 0 && !isLoadingState && (
            <div className="text-center text-white font-light italic mt-10">
              Send {BOT_NAME} a message...
            </div>
          )}
          {isLoadingState && (
            <div className="text-center text-white font-light italic mt-10 animate-pulse">
              Gimme a few seconds...
            </div>
          )}
        </div>
        {/* Recorder */}
        <div
          className="fixed z-10 bottom-0 w-full max-w-lg py-6 text-center"
          style={{ background: "linear-gradient( to right, #07080D, #050B0B)" }}
        >
          <div className="flex justify-center items-center w-full">
            <RecordMessage onStop={handleStopRecording} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controller;

// #07080D
// #07080D
// #050B0B
