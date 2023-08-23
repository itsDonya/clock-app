<template></template>

<script>
export default {
  layout: "App",
  middleware({ redirect }) {
    redirect("/timer");
  },
};
</script>
