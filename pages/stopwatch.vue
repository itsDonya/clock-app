<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Stopwatch</h1>

    <!-- clock -->
    <stopwatch-clock></stopwatch-clock>

    <!-- buttons -->
    <!-- test -->
    <div class="w-full flex items-center justify-center gap-8">
      <base-btn class="text-neutral-500">cancel</base-btn>
      <base-btn class="text-green-500">resume</base-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStopwatch",
};
</script>

<script setup></script>
