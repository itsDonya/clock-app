<template>
  <div
    class="w-96 h-auto max-h-[80vh] overflow-y-auto p-4 bg-light rounded-xl shadow-2xl"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppContainer",
};
</script>
