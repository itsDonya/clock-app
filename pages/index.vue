<template>
  <h1>{{ name }}</h1>
</template>

<script setup>
import { ref } from "@nuxtjs/composition-api";

const name = ref("Clock App");
</script>
