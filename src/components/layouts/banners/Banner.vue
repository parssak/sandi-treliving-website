<template>
  <div class="relative py-6">
    <div class="banner-img-wrapper inset-0 absolute w-full h-full">
      <slot name="image"></slot>
    </div>
    <Container>
      <section class="grid place-items-center">
        <div class="p-10 md:p-16 bg-accent-lightest">
          <slot></slot>
        </div>
      </section>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
</script>

<style>
.banner-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
