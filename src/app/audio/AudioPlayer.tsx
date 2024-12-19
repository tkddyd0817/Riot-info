"use clint";
import { useState, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const tracks = ["/Sample.mp3", "/Sample2.mp3"];

  const play = (): void => {
    audioRef.current?.play();
  };

  const pause = (): void => {
    audioRef.current?.pause();
  };

  const nextTrack = (): void => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    audioRef.current?.pause();
  };

  const handleEnded = () => {
    nextTrack();
  };

  return (
    <div className="pr-10">
      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        onError={(e) => console.error("Audio error:", e)}
        onEnded={handleEnded}
      />
      <div className="flex items-center justify-center  p-10 text-red-500 mx-auto">
        <button className="text-red-500 text-2xl font-bold mx-2" onClick={play}>
          ▶️
        </button>
        <button
          className="text-red-500 text-2xl font-bold mx-auto"
          onClick={pause}
        >
          ⏸️
        </button>
        <button
          className="text-red-500 text-2xl font-bold mx-auto"
          onClick={nextTrack}
        >
          ⏭️
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
