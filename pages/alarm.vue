<template>
  <div class="w-full py-8 flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h1 class="text-3xl text-center font-medium text-secondary">Alarm</h1>

    <!-- clock -->
    <alarm-clock></alarm-clock>

    <!-- buttons -->
    <!-- -- if timer is started but not running (paused), show "cancel" & "resume" buttons -- -->
    <!-- <div
      v-if="isStarted && !isRunning"
      class="w-full flex items-center justify-center gap-8"
    >
      <base-btn @click="cancel" class="text-neutral-500">cancel</base-btn>
      <base-btn @click="resume" class="text-green-500">resume</base-btn>
    </div>
    <base-btn
      @click="pause"
      v-else-if="isStarted && isRunning"
      class="text-primary"
      >stop</base-btn
    >
    <base-btn @click="start" v-else class="text-primary">start</base-btn> -->
  </div>
</template>

<script>
export default {
  name: "AppAlarm",
};
</script>
