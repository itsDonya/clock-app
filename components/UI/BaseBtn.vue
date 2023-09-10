<template>
  <button
    v-on="$listeners"
    class="custom-shadow-2 border-0 font-medium bg-light px-8 py-2 rounded-xl active:shadow-none transition-all"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>
