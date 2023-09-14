<template>
  <div class="absolute w-full h-full rounded-full rotate-90">
    <alarm-clock-hand-second
      :seconds="seconds"
      @seconds-up="secondsUp"
    ></alarm-clock-hand-second>
    <alarm-clock-hand-minute :minutes="minutes"></alarm-clock-hand-minute>
    <alarm-clock-hand-hour
      :minutes="minutes"
      :hours="hours"
    ></alarm-clock-hand-hour>
  </div>
</template>

<script>
export default {
  name: "AlarmClockHands",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const seconds = ref(new Date().getSeconds());
const minutes = ref(new Date().getMinutes());
const hours = ref(new Date().getHours());

// methods
const secondsUp = () => {
  if (seconds.value < 59) {
    seconds.value++;
  } else {
    seconds.value = 0;
    minutesUp();
  }
};
const minutesUp = () => {
  if (minutes.value < 59) {
    minutes.value++;
  } else {
    minutes.value = 0;
    hoursUp();
  }
};
const hoursUp = () => {
  if (hours.value < 11) {
    hours.value++;
  } else {
    hours.value = 0;
  }
};
</script>
