<template>
  <Container>
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="lg:py-12 lg:order-2">
        <h1 class="blockquote">Talent Fund</h1>
        <p>
          It’s an honour to serve as the Advisory Committee Chair to Telefilm’s
          Talent Fund, a private donation fund which supports emerging Canadian
          talent and fosters the success of Canadian cinema.
          <br /><br />
          I truly believe that stories of our shared human experiences have the
          power to break down barriers and connect us with each other.
          <br /><br />
          In my work as a member of the CAMH Foundation board and as a founding
          funder of womenmind, I know how important it is for people to share
          stories of their lives, their mental health struggles and how they
          need to speak their truth and be understood. By opening up dialogue,
          we shut down the stigma that often surrounds mental health.
          <br /><br />
          Similarly, in my work with Telefilm, I know that Canadian filmmakers
          are also desperate to share their stories with the world. They need
          encouragement, financial support and someone to believe in them.
          <br /><br />
          Both CAMH and Telefilm are highly respected Canadian institutions that
          focus on the universal need to create connection, enhance compassion
          and inspire change. I’m so proud to be associated with both of them.
          <br /><br />
          Sandi Treliving has been appointed as the new chair of the Talent
          Fund, a private donation fund created by Telefilm Canada nine years
          ago to support emerging filmmakers.
          <br /><br />
          Since 2012, the fund led by distinguished philanthropists and business
          leaders has raised over $17 million and supported 165 projects.
        </p>
        <img
          src="@/assets/icons/womenmind-logo.svg"
          alt="womanmind and camh logo"
          class="mt-6"
        />
        <p class="mt-4">Learn more about how you can get involved.</p>
        <a
          href="https://playbackonline.ca/2021/09/22/telefilm-appoints-new-chair-of-talent-fund/#ixzz7M9T6wBQI"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-xl btn-dark mt-6"
        >
          Read the article
        </a>
      </div>
      <div class="pb-4">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/red-carpet.png"
          alt=""
        />
        <Caption>
          Photograph of Jim and Sandi Treliving at a Canadian film premiere
        </Caption>
      </div>
    </div>
  </Container>

  <Container>
    <h2 class="text-center">
      Check out these new films supported by Talent Fund
    </h2>
    <div class="grid gap-8 lg:grid-cols-3">
      <div class="flex flex-col items-center">
        <div class="bg-neutral-600 h-96 w-64 max-w-sm mb-6" />
        <h3>Film Title</h3>
        <p>Secondary Text</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="bg-neutral-600 h-96 w-64 max-w-sm mb-6" />
        <h3>Film Title</h3>
        <p>Secondary Text</p>
      </div>
      <div class="flex flex-col items-center">
        <div class="bg-neutral-600 h-96 w-64 max-w-sm mb-6" />
        <h3>Film Title</h3>
        <p>Secondary Text</p>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import { CameraIcon } from "@heroicons/vue/solid";
import Caption from "@/components/Caption.vue";
</script>