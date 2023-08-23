<template>
  <nuxt-link :to="path">
    <button
      class="w-full px-2 py-2.5 flex items-center justify-start gap-1.5 rounded-md text-primary capitalize hover:bg-secondary/30 transition-all cursor-pointer"
    >
      <base-icon :name="icon" class="w-4 h-4 fill-primary"></base-icon>

      <span class="text-sm font-medium">
        <slot></slot>
      </span>
    </button>
  </nuxt-link>
</template>

<script>
export default {
  name: "NavbarLink",
};
</script>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: "",
  },
  path: {
    type: String,
    required: true,
    default: "/",
  },
});
</script>
