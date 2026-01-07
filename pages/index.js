import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="container">
      <video
        src="/love.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video"
      />

      <audio ref={audioRef} loop>
        <source src="/myloveallmine.mp3" type="audio/mpeg" />
      </audio>

      <div className="overlay" />
      <div className="grain" />

      <div className="text">
        <h1>my love</h1>
        <p>all mine ♡</p>
      </div>

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "⏸︎" : "▶︎"}
      </button>

      <div className="hearts">♡ ♡ ♡</div>
    </div>
  );
          }
