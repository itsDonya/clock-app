<template>
  <base-card>
    <div class="flex items-center justify-start gap-3">
      <span class="text-primary font-bold">{{ index }}</span>
      <p class="text-secondary font-bold">Lap</p>
    </div>
    <p class="text-primary font-bold">
      <slot></slot>
    </p>
  </base-card>
</template>

<script>
export default {
  name: "StopwatchLapItem",
};
</script>

<script setup>
defineProps({
  index: {
    type: [String, Number],
    required: true,
    default: 0,
  },
});
</script>
