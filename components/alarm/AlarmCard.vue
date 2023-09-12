<template>
  <base-card>
    <!-- alarm time -->
    <div class="flex items-center justify-start gap-2">
      <p class="text-primary font-bold">
        <slot></slot>
      </p>
      <span class="text-xs text-primary">{{ isAm ? "am" : "pm" }}</span>
    </div>

    <!-- alarm options -->
    <div class="h-full flex items-center justify-center">
      <input
        type="checkbox"
        name="alarm"
        id="alarm"
        class="alarm"
        :checked="isOn"
      />
    </div>
  </base-card>
</template>

<script>
export default {
  name: "AlarmCard",
};
</script>

<script setup>
// props
defineProps({
  isAm: {
    type: Boolean,
    default: true,
  },
  isOn: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.alarm {
  --s: 20px;
  height: var(--s);
  aspect-ratio: 2.5;
  width: auto;
  border-radius: var(--s);
  padding: calc(var(--s) / 10);
  margin: calc(var(--s) / 2);
  cursor: pointer;
  background: radial-gradient(farthest-side, #806a6a 96%, #0000) var(--_p, 0%) /
      var(--s) content-box no-repeat,
    var(--_c, #b9abab80);
  box-sizing: content-box;
  transform-origin: calc(3 * var(--s) / 5) 50%;
  transition: transform cubic-bezier(0, 300, 1, 300) 0.5s,
    background 0.3s 0.1s ease-in;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.alarm:checked {
  --_c: #806a6a98;
  --_p: 100%;
  transform-origin: calc(100% - 3 * var(--s) / 5) 50%;
  transform: rotate(0.1deg);
}
</style>
