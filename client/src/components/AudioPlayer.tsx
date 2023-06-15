import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

function AudioPlayer() {
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "violet",
      progressColor: "purple",
      cursorColor: "navy",
    });

    wavesurfer.load("audio.mp3");
  }, []);

  return <div id="waveform" className="border border-red-500"></div>;
}

export default AudioPlayer;
