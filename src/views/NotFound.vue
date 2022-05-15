<script setup>
import Container from "@/components/layouts/Container.vue";
</script>

<template>
  <Container>
    <div class="flex items-center justify-center flex-col pt-24 text-center">
      <h1>Page not found...</h1>
      <p class="mt-2">
        Not quite sure what happened there.  <br />
        [Error 404]
      </p>
      <router-link class="btn btn-xl btn-dark mt-8" to="/">Take me back!</router-link>
    </div>
  </Container>
</template>
