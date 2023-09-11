<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Timer</h1>

    <!-- clock -->
    <timer-clock @stop="resetTimer" @not-valid="timeValidation"></timer-clock>

    <!-- buttons -->
    <!-- -- if timer is started but not running (paused), show "cancel" & "resume" buttons -- -->
    <div
      v-if="isStarted && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="cancel" class="text-neutral-500">cancel</base-btn>
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
    </div>
    <!-- -- if timer is running, show "start" buttons -- -->
    <base-btn
      @click="pause"
      v-else-if="isStarted && isRunning"
      class="text-primary"
      >stop</base-btn
    >
    <base-btn @click="start" v-else class="text-primary">start</base-btn>
  </div>
</template>

<script>
export default {
  name: "AppTimer",
};
</script>

<script setup>
import { ref, provide, useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
const isStarted = ref(false);
const isRunning = ref(false);

// provide
provide("started", isStarted);
provide("running", isRunning);

// methods
const start = () => {
  // start & run timer
  isStarted.value = true;
  isRunning.value = true;
};
const pause = () => {
  // pause timer
  isRunning.value = false;
};
const resume = () => {
  // resume timer
  isRunning.value = true;
};
const cancel = () => {
  // completely stop & reset timer
  resetTimer();
};
const resetTimer = () => {
  isStarted.value = false;
  isRunning.value = false;
};
const timeValidation = (validationError) => {
  resetTimer(); // completely stop & reset timer
  store.dispatch("showSnackbar", validationError); //show a snackbar including the validation's error message
};
</script>
