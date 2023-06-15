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
          <button
            className="bg-white p-4 rounded-full"
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
          <p className="mt-2 text-white font-light">{status}</p>
        </div>
      )}
    />
  );
}

export default RecordMessage;
