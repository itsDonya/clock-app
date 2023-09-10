<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Stopwatch</h1>

    <!-- clock -->
    <stopwatch-clock
      @not-valid="stopwatchValidation"
      @stop="cancel"
    ></stopwatch-clock>

    <!-- buttons -->
    <base-btn
      v-if="!isStarted && !isRunning"
      @click="start"
      class="text-green-500"
      >start</base-btn
    >
    <div
      v-else-if="isStarted && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
      <base-btn @click="resetStopwatch" class="text-neutral-500"
        >reset</base-btn
      >
    </div>
    <div v-else class="w-full flex items-center justify-center gap-8">
      <base-btn @click="stop" class="text-neutral-500">stop</base-btn>
      <base-btn @click="setLap" class="text-neutral-500">lap</base-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStopwatch",
};
</script>

<script setup>
import { ref, provide, useStore } from "@nuxtjs/composition-api";

// variables
const isStarted = ref(false);
const isRunning = ref(false);
const lap = ref("00:00:00");
const store = useStore();

// provide
provide("started", isStarted);
provide("running", isRunning);
provide("lap", lap);

// methods
const start = () => {
  isStarted.value = true;
  isRunning.value = true;
};
const stop = () => {
  isRunning.value = false;
};
const resume = () => {
  isRunning.value = true;
};
const cancel = () => {
  resetStopwatch();
};
const setLap = () => {
  lap.value = true;
  setTimeout(() => {
    lap.value = false;
  }, 50);
};
const resetStopwatch = () => {
  isStarted.value = false;
  isRunning.value = false;
};
const stopwatchValidation = (validationError) => {
  resetStopwatch();
  store.dispatch("showSnackbar", validationError);
};
</script>
