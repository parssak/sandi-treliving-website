<script setup>
import Container from "@/components/layouts/Container.vue";

const getAssetPath = (name) =>
  new URL(`../../assets/${name}`, import.meta.url).href;

const recommendations = [
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
  {
    title: "LGBT Youthline",
    type: "Organization",
    image: getAssetPath("images/book.png"),
  },
];
</script>

<template>
  <!-- Used negative margin top for putting it back at the top  -->
  <Container class="-mt-10">
    <div class="blockquote">
      <div>
        <h1 class="mb-4 md:mb-8 leading-tight">Sandi Recommends</h1>
        <p class="text-xl">
          When it comes to mental health there are so many valuable resources
          available to us.
          <br />
          Here are a few I wholeheartedly recommend:
        </p>
      </div>
    </div>

    <div class="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="r in recommendations"
        :key="r.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="r.image"
          alt=""
          class="w-full h-full object-cover mb-6 max-w-sm"
        />
        <h3>{{ r.title }}</h3>
        <p>{{ r.type }}</p>
      </div>
    </div>
  </Container>
</template>