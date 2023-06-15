import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "../assets/svgs/RecordIcon";

interface RecordMessageProps {
  onStop?: (blobUrl: string) => void;
}
function RecordMessage({ onStop }: RecordMessageProps) {
  return (
    <ReactMediaRecorder
      audio
      onStop={onStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="mt-2">
          <p className="text-white font-light">
            {status === "idle" ? "Hold to record" : status}
          </p>
          <button
            className="bg-blue-600 p-4 rounded-full mt-2"
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
          >
            <RecordIcon
              classText={
                status === "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
          </button>
        </div>
      )}
    />
  );
}

export default RecordMessage;
