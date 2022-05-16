<script setup>
import HeroImageSplitFlip from "@/components/layouts/hero/HeroImageSplitFlip.vue";
</script>

<template>
  <HeroImageSplitFlip>
    <template v-slot:image>
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/contact.png"
        alt=""
      />
    </template>
    <div class="blockquote mb-6">
      <h1 class="mb-0 leading-tight">Contact</h1>
    </div>
    <p class="text-xl">Get in touch. I'd love to hear from you!</p>
    <div class="grid md:grid-cols-2 gap-8 mt-6">
      <div>
        <label>
          <span> First name </span>
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          <span> Last name </span>
          <input type="text" />
        </label>
      </div>
      <div class="md:col-span-2">
        <label>
          <span> Email </span>
          <input type="email" />
        </label>
      </div>
      <div class="md:col-span-2">
        <label>
          <span> Message </span>
          <textarea rows="4"></textarea>
        </label>
      </div>
    </div>
    <div class="mt-6">
      <button class="btn btn-xl btn-dark">Send Message</button>
    </div>
  </HeroImageSplitFlip>
</template>