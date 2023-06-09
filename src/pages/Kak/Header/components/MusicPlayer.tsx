import { useState } from "react";
import icon_play from "./assets/icons/play-button-arrowhead.png";
// import icon_pause from "./assets/icons/pause.png";
import icon_forwards from "./assets/icons/forward-button.png";
// import icon_stop from "./assets/icons/stop-button.png";
import song_outliners from "./assets/music/outliners.mp3";
import song_suddenclap from "./assets/music/suddenClap.mp3";
import style from "./musicplayer.module.scss";

const songs = [
  {
    id: 0,
    name: "Outliners",
    path: song_outliners,
    audio: new Audio(song_outliners),
  },
  { id: 1, name: "Sudden Clap", path: song_suddenclap },
];

const MusicPlayer = () => {
  const [music, setMusic] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currAudio, setCurrAudio] = useState();

  const playMusic = () => {
    setIsPlaying(true);
  };

  // const pauseSong = () => {
  //   audio.pause();
  //   // setIsPlaying(false);
  // };

  const changeSong = (direction: string) => {
    if (direction === "prev") {
      setMusic((prev) => {
        if (prev.id - 1 < songs.length - 1) {
          return songs[-1];
        }
        return songs[prev.id - 1];
      });
    }
    if (direction === "next") {
      setMusic((prev) => {
        if (prev.id + 1 > songs.length - 1) {
          return songs[0];
        }
        return songs[prev.id + 1];
      });
    }
  };

  return (
    <div className={style.musicplayer}>
      <button className={style.prev} onClick={() => changeSong("prev")}>
        <img src={icon_forwards} />
      </button>
      {music.name}
      <button className={style.next} onClick={() => changeSong("next")}>
        <img src={icon_forwards} />
      </button>

      {!isPlaying ? (
        <button onClick={playMusic}>
          <img src={icon_play} />
        </button>
      ) : (
        <></>
        // <button onClick={pauseSong}>
        //   <img src={icon_pause} />
        // </button>
      )}
    </div>
  );
};
export default MusicPlayer;
