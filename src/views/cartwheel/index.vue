<script setup>
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";
import Caption from "@/components/Caption.vue";
import HeroImageSplit from "@/components/layouts/hero/HeroImageSplit.vue";
</script>

<template>
  <HeroImageSplit>
    <template v-slot:image>
      <img
        class="w-full h-full object-cover object-"
        src="@/assets/images/cartwheel-vid.png"
        alt=""
      />
    </template>
    <div class="blockquote mb-6">
      <h1 class="mb-0">Speaking</h1>
    </div>
    <p class="text-xl">
      Sandi Treliving offers inspiring speeches that audiences remember. Talk to
      her about customizing a message for your particular organization.
    </p>
  </HeroImageSplit>

  <div class="bg-accent-hover">
    <Container>
      <h2>Head Over Heels for Mental Health</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
        aliquet ultricies magna sed suscipit platea elit fames. Magna volutpat
        urna leo ac id sapien habitant molestie amet. Eget at adipiscing
        consequat laoreet commodo pretium. Consectetur scelerisque est cras
        scelerisque sed mi ipsum. Tellus tristique tellus in a amet mauris
        ultricies ultrices. Semper at volutpat condimentum tristique aenean a,
        eget lacus. Pellentesque fringilla ac a lobortis.
      </p>
    </Container>
  </div>
</template>