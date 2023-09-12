<template>
  <div class="w-full flex flex-col items-center justify-start gap-4">
    <alarm-card
      v-for="(alarm, i) in alarms"
      :key="i"
      :is-on="alarm.isOn"
      :is-am="alarm.isAm"
      >{{ alarm.time }}</alarm-card
    >
  </div>
</template>

<script>
export default {
  name: "AlarmCards",
};
</script>

<script setup>
// props
defineProps({
  alarms: {
    type: Array,
    requried: true,
    default: function () {
      return [];
    },
  },
});
</script>
