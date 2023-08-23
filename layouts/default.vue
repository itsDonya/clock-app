<template>
  <div class="w-screen h-screen bg-secondary flex items-start">
    <aside
      class="w-56 h-full bg-light rounded-tr-xl rounded-br-xl shadow-2xl shadow-primary"
    >
      <app-sidebar></app-sidebar>
    </aside>
    <main class="w-full h-full">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
