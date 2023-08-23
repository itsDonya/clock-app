<template>
  <nav class="w-full flex flex-col gap-2">
    <navbar-link
      v-for="(link, i) in links"
      :key="i"
      :path="link.path"
      :icon="link.icon"
    >
      {{ link.title }}
    </navbar-link>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const links = ref([
  {
    title: "timer",
    path: "/timer",
    icon: "clock-regular",
  },
  {
    title: "stop watch",
    path: "/stopwatch",
    icon: "stopwatch-solid",
  },
  {
    title: "alarm",
    path: "/alarm",
    icon: "bell-solid",
  },
  {
    title: "world clock",
    path: "/world-clock",
    icon: "globe-solid",
  },
]);
</script>
