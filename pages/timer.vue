<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Timer</h1>

    <!-- clock -->
    <timer-clock @stop="resetTimer" @not-valid="timeValidation"></timer-clock>

    <!-- buttons -->
    <div
      v-if="isStarted && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="cancel" class="text-neutral-500">cancel</base-btn>
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
    </div>
    <base-btn
      @click="stop"
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
  resetTimer();
};
const resetTimer = () => {
  isStarted.value = false;
  isRunning.value = false;
};
const timeValidation = (validationError) => {
  resetTimer();
  store.dispatch("showSnackbar", validationError);
};
</script>
