<template>
  <Container>
    <div class="grid gap-12 lg:grid-cols-5">
      <section :class="flip && `lg:order-1`" class="lg:py-12 lg:col-span-2">
        <p v-if="slogan" class="uppercase tracking-widest text-accent mb-4">
          {{ slogan }}
        </p>
        <h2>
          <span v-html="title"></span>
        </h2>
        <p class="lg:max-w-md">
          <span v-html="description"></span>
        </p>
        <slot name="extra-content"></slot>
      </section>
      <section class="lg:col-span-3">
        <div class="split-img-wrapper w-full h-full relative">
          <div
            v-if="!withoutBorder"
            class="absolute -top-2 md:-top-4 w-full h-full"
            :class="`${flip ? '-left-2 md:-left-4' : '-right-2 md:-right-4'}
            ${bgClass}
            `"
          ></div>
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/layouts/Container.vue";
export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    withoutBorder: {
      type: Boolean,
      default: false,
    },
    slogan: {
      type: String,
      default: null,
    },
    bgClass: {
      type: String,
      default: "bg-accent",
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
  position: relative;
}
</style>