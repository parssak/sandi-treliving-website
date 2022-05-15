<template>
  <HeroImageSplit>
    <template v-slot:image>
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/hero.png"
        alt=""
      />
    </template>
    <h1 class="leading-tight mb-12">
      <span class="text-accent-dark">Philanthropist,</span> <br />
      <span class="text-accent">Mental Health Advocate</span> <br />
      and
      <span class="text-accent-light">
        Founding Member <br />
        of <span class="italic">womenmind</span> at CAMH
      </span>
    </h1>
    <div class="flex items-center space-x-6">
      <a href="#" class="link">Instagram</a>
      <a href="#" class="link">Twitter</a>
      <a href="#" class="link">LinkedIn</a>
    </div>
  </HeroImageSplit>

  <Container>
    <div class="relative md:py-24 lg:py-36">
      <div class="md:absolute md:right-0 md:w-1/2 md:inset-y-0">
        <img
          src="@/assets/images/about-1.png"
          class="object-cover w-full h-full max-h-[40vh] md:max-h-full"
          alt=""
        />
      </div>
      <div class="bg-accent-dark p-8 md:p-12 md:w-2/3 lg:w-7/12 relative">
        <h2 class="text-white">Hello and Welcome</h2>
        <p class="text-white">
          Welcome to my website and thank you for taking an interest in me and
          my work.
          <br /><br />
          I hope my digital home will be an inspiration and an invitation to you
          to join me in the work of womenmindTM, the community of
          philanthropists and thought leaders at Toronto’s Centre for Addiction
          and Mental Health (CAMH), Canada’s largest mental health teaching
          hospital. As an organization, womenmind is committed to using its
          collective power to make impactful change for women’s mental health.
        </p>
        <router-link
          :to="{ name: 'about' }"
          class="btn btn-xl btn-white w-full sm:w-max mt-6"
          >read more</router-link
        >
      </div>
    </div>
  </Container>

  <Banner>
    <template v-slot:image>
      <img
        src="@/assets/images/roses.png"
        class="object-cover w-full h-full"
        alt=""
      />
    </template>
    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <h3>Let's Talk</h3>
        <p>
          Sign up for my monthly messages on women & mental health, the
          <span class="italic">womenmind</span>
          donor community & more.
        </p>
      </div>
      <div class="flex items-center flex-col md:flex-row">
        <input type="email" placeholder="Enter your email" />
        <button
          class="
            md:ml-2
            mt-2
            md:mt-0
            w-full
            btn btn-dark btn-xl btn-dark
            whitespace-nowrap
            md:w-max
          "
        >
          Notify me
        </button>
      </div>
    </div>
  </Banner>
</template>

<script setup>
import HeroImageSplit from "@/components/layouts/hero/HeroImageSplit.vue";
import Container from "@/components/layouts/Container.vue";
import Banner from "@/components/layouts/banners/Banner.vue";
</script>
