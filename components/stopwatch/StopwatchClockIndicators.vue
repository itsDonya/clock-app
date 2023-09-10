<template>
  <div
    class="absolute bg-light top-0 right-0 w-full h-full rounded-full rotate-90 -z-20"
  >
    <span v-for="i in 25" :key="i" ref="test"></span>
  </div>
</template>

<script>
export default {
  name: "StopwatchClockIndicators",
};
</script>

<script setup>
import { ref, onMounted } from "@nuxtjs/composition-api";

// variabels
const test = ref(null);
const counter = ref(0);

// props
const props = defineProps({
  degree: {
    type: Number,
    required: true,
    default: 360,
  },
});

// lifecycles
onMounted(() => {
  for (let i in test.value) {
    // select element
    const el = test.value[i];

    // calculate counter
    counter.value = i * 15;

    // set element's classes based on timer current value
    if (counter.value <= props.degree) {
      el.className = `absolute content-[''] bottom-[50%] top-[50%] w-full h-[2px] inline-block rotate-[${counter.value}deg] before:absolute before:top-0 before:left-0 before:w-4 before:h-full before:bg-primary before:rounded-xl`;
    } else {
      el.className = `absolute content-[''] bottom-[50%] top-[50%] w-full h-[2px] inline-block rotate-[${counter.value}deg] before:absolute before:top-0 before:left-0 before:w-4 before:h-full before:bg-secondary before:rounded-xl`;
    }
  }
});
</script>
