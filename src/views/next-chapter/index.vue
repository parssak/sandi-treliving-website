<script setup>
import Container from "@/components/layouts/Container.vue";
import HeroImageSplit from "@/components/layouts/hero/HeroImageSplit.vue";
</script>

<template>
  <HeroImageSplit>
    <template v-slot:image>
      <img
        class="w-full h-full object-cover object-"
        src="@/assets/images/life-after.png"
        alt=""
      />
    </template>
    <div class="blockquote mb-6">
      <h1 class="mb-0 leading-tight">The Next Chapter: <br />Life After 60</h1>
    </div>
    <p class="text-xl">
      My monthly message reflecting on the next chapter of life. Reflections on
      being a woman in this world. Words to inspire you. Plus, some of my
      favourite things.
      <br /><br />
      Sign up here to receive my monthly message:
    </p>
    <div class="flex items-center flex-col sm:flex-row mt-4 w-full">
      <input type="email" placeholder="Enter your email" />
      <button
        class="
          sm:ml-2
          mt-2
          sm:mt-0
          w-full
          btn btn-dark btn-xl btn-dark
          whitespace-nowrap
          sm:w-max
        "
      >
        Notify me
      </button>
    </div>
  </HeroImageSplit>
</template>