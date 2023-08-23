<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Timer</h1>

    <!-- clock -->
    <timer-clock @time-submitted="timeSubmitted"></timer-clock>

    <!-- buttons -->
    <div
      v-if="started && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="cancel" class="text-neutral-500">cancel</base-btn>
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
    </div>
    <base-btn
      @click="stop"
      v-else-if="started && isRunning"
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
import { ref } from "@nuxtjs/composition-api";

// variables
const isReady = ref(false);
const started = ref(false);
const isRunning = ref(false);

// methods
const start = () => {
  if (isReady.value) {
    started.value = true;
  }
};
const timeSubmitted = () => {
  isReady.value = true;
};
const cancel = () => {
  started.value = false;
  isReady.value = false;
};
const stop = () => {
  isRunning.value = false;
};
const resume = () => {
  isRunning.value = true;
};
</script>
