import Wavesurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";
import PlayIcon from "../assets/svgs/PlayIcon";
import PauseIcon from "../assets/svgs/PauseIcon";

function AudioPlayer({ file }: { file: string }) {
  const [isPlayingState, setIsPlayingState] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const waveform = useRef<any>(null);
  const waveformContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if wavesurfer object is already created.
    if (!waveform.current) {
      // Create a wavesurfer object
      // More info about options here https://wavesurfer-js.org/docs/options.html
      waveform.current = Wavesurfer.create({
        container: waveformContainerRef.current!,
        waveColor: "#e0e0e4",
        progressColor: "#ffffff",
        barGap: 1,
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 0,
        cursorColor: "#ffffff",
        height: 40,
        mediaControls: true,
        hideScrollbar: true,
      });

      // Load audio from a remote url.
      waveform.current.load(file);
      waveform.current.on("ready", () => {
        setDuration(waveform.current.getDuration());
      });

      waveform.current.on("audioprocess", (time: number) => {
        setCurrentTime(time);
      });
      waveform.current.on("finish", () => {
        setIsPlayingState(false);
      });

      /* To load a local audio file
		    1. Read the audio file as a array buffer.
			2. Create a blob from the array buffer
			3. Load the audio using wavesurfer's loadBlob API
	 */
    }

    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (waveform.current) {
    //     waveform.current.load(reader.result as ArrayBuffer);
    //   }
    // };

    // reader.readAsArrayBuffer(file!);
  }, [file]);

  const playAudio = () => {
    console.log("started function");

    // Check if the audio is already playing
    if (waveform.current.isPlaying()) {
      console.log("paused");
      setIsPlayingState(false);
      waveform.current.pause();
    } else {
      console.log("playing");
      setIsPlayingState(true);

      waveform.current.play();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const displayTime = isPlayingState
    ? formatTime(currentTime)
    : formatTime(duration);

  return (
    <div className="flex w-200 items-center h-auto py-1 pl-2 rounded-3xl bg-blue-600">
      <button onClick={playAudio}>
        {isPlayingState ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div
        ref={waveformContainerRef}
        style={{
          width: "70%",
          height: "100%",
          marginLeft: "10px",
        }}
      />
      <p className="ml-2 text-white text-sm">{displayTime}</p>
    </div>
  );
}

export default AudioPlayer;
