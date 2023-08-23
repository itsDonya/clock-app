<template>
  <div class="w-screen h-screen bg-secondary">
    <aside
      class="w-56 h-full bg-light rounded-tr-xl rounded-br-xl shadow-2xl shadow-primary"
    >
      <app-sidebar></app-sidebar>
    </aside>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
