<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-4">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Alarm</h1>

    <!-- clock -->
    <alarm-clock></alarm-clock>

    <!-- alarms -->
    <alarm-cards :alarms="alarms"></alarm-cards>
  </div>
</template>

<script>
export default {
  name: "AppAlarm",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const alarms = ref([
  {
    time: "09:23",
    isAm: true,
    isOn: false,
  },
  {
    time: "00:38",
    isAm: false,
    isOn: true,
  },
]);
</script>
