<template>
  <div
    class="w-56 h-56 p-2 bg-gradient-to-tl from-primary to-secondary rounded-full custom-shadow-1"
  >
    <div
      class="inside-clock w-full h-full bg-light rounded-full flex items-center justify-center"
    >
      <p
        v-if="isTimerStarted"
        class="text-4xl text-center font-bold text-primary"
      >
        {{ displayMinutes }}:{{ displaySeconds }}
      </p>

      <div v-else class="w-full p-4 flex items-center justify-center gap-3">
        <input
          type="number"
          maxlength="2"
          class="w-12 h-12 p-2 bg-inherit border-2 border-secondary rounded-xl text-center"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          v-model="minutes"
        />
        <span>:</span>
        <input
          type="number"
          maxlength="2"
          class="w-12 h-12 p-2 bg-inherit border-2 border-secondary rounded-xl text-center"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          v-model="seconds"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerClock",
};
</script>

<script setup>
import { ref, computed, inject, watch } from "@nuxtjs/composition-api";

// variables
const seconds = ref(0);
const minutes = ref(0);

// emit
const emit = defineEmits(["stop"]);

// inject
const isTimerStarted = inject("started");
const isTimerRunning = inject("running");

// computed
const displaySeconds = computed(() => {
  return String(seconds.value).length < 2 ? `0${seconds.value}` : seconds.value;
});
const displayMinutes = computed(() => {
  return String(minutes.value).length < 2 ? `0${minutes.value}` : minutes.value;
});

// methods
const calculateTimer = () => {
  const secondInterval = setInterval(function () {
    if (isTimerRunning.value) {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        if (minutes.value > 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
          clearInterval(secondInterval);
          stopTimer();
          clearTimerData();
        }
      }
    }
  }, 1000);
};

const stopTimer = () => {
  emit("stop");
};

const clearTimerData = () => {
  seconds.value = 0;
  minutes.value = 0;
};

// watchers
watch(
  () => isTimerStarted.value,
  (newval) => {
    if (newval === true) calculateTimer();
  }
);
</script>

<style scoped>
.inside-clock {
  box-shadow: 0px 0px 6px #ffffff;
}
</style>
