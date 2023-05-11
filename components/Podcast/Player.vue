<template>
  <div id="audio_player">
    <audio preload="metadata" loop>
      <source :src="audio" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    <div class="controls">
      <button id="pause"><IconsPause /></button>
      <button id="play"><IconsPlay /></button>
    </div>
    <span class="title"><slot /></span>
    <div class="trackBar">
      <div class="trackPosition" id="trackPosition"></div>
    </div>
    <span id="current-time" class="time">0:00</span>
    <span id="duration" class="time">0:00</span>
  </div>
</template>
<script>
export default {
  props: {
    audio: String,
  },
  mounted() {
    const audio = document.querySelector("audio");
    const duration = document.getElementById("duration");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const currentTime = document.getElementById("current-time");
    const trackPosition = document.getElementById("trackPosition");

    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    };

    duration.textContent = calculateTime(audio.duration);

    play.addEventListener("click", () => {
      audio.play();
      play.classList.add("play");
      play.classList.remove("pause");
      pause.classList.add("play");
      pause.classList.remove("pause");
    });

    pause.addEventListener("click", () => {
      audio.pause();
      play.classList.add("pause");
      play.classList.remove("play");
      pause.classList.add("pause");
      pause.classList.remove("play");
    });

    audio.addEventListener("timeupdate", function () {
      currentTime.textContent = calculateTime(audio.currentTime);
      trackPosition.style.width =
        (Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100 +
        "%";
    });
  },
};
</script>
<style scoped>
#audio_player {
  display: grid;
  grid-template-columns: 50px 1fr auto;
  grid-template-areas: "controls title title" "track track track" "current . time";
  align-items: flex-end;
  max-width: 50ch;
  gap: 8px;
}
.controls {
  grid-area: controls;
  display: flex;
}
.controls button {
  display: flex;
  align-items: center;
  justify-items: center;
  color: var(--blue);
}
.controls button,
.controls button svg {
  width: var(--ml);
  height: var(--ml);
}
#play.play {
  opacity: 0.5;
}
#pause.pause {
  opacity: 0.5;
}
.title {
  grid-area: title;
  font-family: var(--font-serif);
}
.trackBar {
  grid-area: track;
  display: block;
  width: 100%;
  height: 5px;
  background: var(--white);
  opacity: 0.5;
}
.trackPosition {
  display: block;
  width: 0;
  height: 5px;
  background: var(--blue);
}
#current-time {
  grid-area: current;
}
#duration {
  grid-area: time;
  justify-self: flex-end;
}
</style>
