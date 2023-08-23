<template>
  <button
    class="custom-shadow-2 border-0 font-medium bg-light px-8 py-2 rounded-lg active:shadow-none transition-all"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>
