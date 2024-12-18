"use clint";
import { useState, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const tracks = ["../public/Sample.mp3"];

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
    <div>
      <audio
        className="bg-red-500"
        ref={audioRef}
        src={tracks[currentTrack]}
        onEnded={handleEnded}
        controls
      />
      <div>
        <button className="bg-red-500" onClick={play}></button>
        <button className="bg-red-500" onClick={pause}></button>
        <button className="bg-red-500" onClick={nextTrack}></button>
      </div>
    </div>
  );
};

export default AudioPlayer;
