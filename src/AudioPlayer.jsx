import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  audio.volume = 0.1;
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => audio.play());
    };
  }, [audio]);

  return [playing, toggle, setPlaying];
};

const Player = ({ url }) => {
  const [playing, toggle, setPlaying] = useAudio(url);

  useEffect(() => {
    setPlaying(true); // Start playing once the component mounts
  }, [setPlaying]);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "▶"}</button>
    </div>
  );
};

export default Player;