<template>
  <div class="w-screen h-screen bg-secondary flex items-start">
    <aside
      class="w-72 h-full bg-light rounded-tr-xl rounded-br-xl shadow-2xl shadow-primary"
    >
      <app-sidebar></app-sidebar>
    </aside>
    <main class="relative w-full h-full flex items-center justify-center">
      <app-container>
        <nuxt />
      </app-container>

      <!-- snackbar -->
      <transition
        enter-from-class="opacity-0"
        enter-active-class="transition-all duration-300"
        enter-to-class="opacity-100"
        leave-to-class="opacity-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100"
      >
        <base-snackbar v-if="$store.state.snackbarShow">{{
          $store.state.snackbarText
        }}</base-snackbar>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
