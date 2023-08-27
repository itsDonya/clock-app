<template>
  <div
    class="absolute left-4 bottom-4 w-auto px-2.5 py-2 rounded text-light bg-primary flex items-center justify-start gap-2 transition-all"
  >
    <!-- icon -->
    <base-icon
      name="info-solid"
      class="w-5 h-5 p-1 rounded-full fill-light border-[1px] border-light"
    ></base-icon>

    <!-- text -->
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseSnackbar",
};
</script>
