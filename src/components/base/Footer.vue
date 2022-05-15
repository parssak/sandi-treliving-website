<template>
  <footer class="bg-accent-lightest border-t" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <p class="text-base font-light">Sandi Treliving &copy; 2022</p>
        <div class="flex items-center space-x-5 mt-4 md:mt-0">
          <a href="#">
            <img src="@/assets/icons/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/icons/twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="@/assets/icons/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
