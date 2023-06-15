import React, { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import Controller from "./components/Controller";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="flex justify-between w-full">
      {/* <div className="flex border border-red-500">
        <audio controls>
          <source src="../public/lift every voice.mp4" type="audio/mp4" />
        </audio>
      </div> */}
      <Landing />
      {/* <AudioPlayer file="../public/lift every voice.mp4" /> */}
      <Controller />
    </div>
  );
}

export default App;
