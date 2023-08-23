<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-6">
    <!-- clock -->
    <timer-clock></timer-clock>

    <!-- buttons -->
    <div class="w-full flex items-center justify-center gap-8">
      <base-btn class="text-neutral-500">cancel</base-btn>
      <base-btn class="text-green-500">resume</base-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTimer",
};
</script>
