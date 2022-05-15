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
        src="@/assets/images/speak.png"
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
  <Split
    title="Closing the gender gap in mental health "
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet ultricies magna sed suscipit platea elit fames. Magna volutpat urna leo ac id sapien habitant molestie amet. Eget at adipiscing consequat laoreet commodo pretium. Consectetur scelerisque est cras scelerisque sed mi ipsum. Tellus tristique tellus in a amet mauris ultricies ultrices. Semper at volutpat condimentum tristique aenean a, eget lacus. Pellentesque fringilla ac a lobortis."
    bgClass="bg-accent-dark"
  >
    <img
      src="@/assets/images/talk.png"
      class="w-full h-full object-cover"
      alt=""
    />
  </Split>
  <Split
    title="We need to talk: Erasing the stigma around mental health"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet ultricies magna sed suscipit platea elit fames. Magna volutpat urna leo ac id sapien habitant molestie amet. Eget at adipiscing consequat laoreet commodo pretium. Consectetur scelerisque est cras scelerisque sed mi ipsum. Tellus tristique tellus in a amet mauris ultricies ultrices. Semper at volutpat condimentum tristique aenean a, eget lacus. Pellentesque fringilla ac a lobortis."
    flip
  >
    <img
      src="@/assets/images/talk.png"
      class="w-full h-full object-cover"
      alt=""
    />
  </Split>
  <Split
    title="Why now is the time for <span class='italic'>womenmind</span>"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at aliquet ultricies magna sed suscipit platea elit fames. Magna volutpat urna leo ac id sapien habitant molestie amet. Eget at adipiscing consequat laoreet commodo pretium. Consectetur scelerisque est cras scelerisque sed mi ipsum. Tellus tristique tellus in a amet mauris ultricies ultrices. Semper at volutpat condimentum tristique aenean a, eget lacus. Pellentesque fringilla ac a lobortis."
    bgClass="bg-accent-light"
  >
    <img
      src="@/assets/images/talk.png"
      class="w-full h-full object-cover"
      alt=""
    />
  </Split>
</template>