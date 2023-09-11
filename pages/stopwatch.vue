<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Stopwatch</h1>

    <!-- clock -->
    <stopwatch-clock @stop="cancel" @lap="addLap"></stopwatch-clock>

    <!-- buttons -->

    <!-- -- if stopwatch isn't started & running, show "start" button -- -->
    <base-btn
      v-if="!isStarted && !isRunning"
      @click="start"
      class="text-green-500"
    >
      start
    </base-btn>
    <!-- -- if stopwatch is paused, show "resume" & "reset" button -- -->
    <div
      v-else-if="isStarted && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
      <base-btn @click="resetStopwatch" class="text-neutral-500"
        >reset</base-btn
      >
    </div>
    <!-- -- if stopwatch is running, show "stop" & "lap" button -- -->
    <div v-else class="w-full flex items-center justify-center gap-8">
      <base-btn @click="pause" class="text-neutral-500">stop</base-btn>
      <base-btn @click="setLap" class="text-neutral-500">lap</base-btn>
    </div>

    <stopwatch-laps :laps="laps"></stopwatch-laps>
  </div>
</template>

<script>
export default {
  name: "AppStopwatch",
};
</script>

<script setup>
import { ref, provide } from "@nuxtjs/composition-api";

// variables
const isStarted = ref(false); // stopwatch is started, now it's running or paused
const isRunning = ref(false); // stopwatch is started and it's running right now (not paused)
const lap = ref("00:00:00"); // initial lap time
const laps = ref([]); // stopwatch laps list

// provide
provide("started", isStarted);
provide("running", isRunning);
provide("lap", lap);

// methods
const start = () => {
  // start and run stopwatch
  isStarted.value = true;
  isRunning.value = true;
};
const pause = () => {
  // pause stopwatch temporary (started, but not running)
  isRunning.value = false;
};
const resume = () => {
  // resume stopwatch
  isRunning.value = true;
};
const addLap = (newLap) => {
  // store the submitted lap time in laps' list
  laps.value.push(newLap);
};
const setLap = () => {
  // do a quick toggle on lap value, to make the child component aware of submitting a new lap
  lap.value = true;
  setTimeout(() => {
    lap.value = false;
  }, 50);
};
const cancel = () => {
  // completely stop stopwatch (not started, not running) & clear stored data (e.g. laps data)
  resetStopwatch();
};
const resetStopwatch = () => {
  // reset all changes
  isStarted.value = false;
  isRunning.value = false;
  laps.value = [];
};
</script>
