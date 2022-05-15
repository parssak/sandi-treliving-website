<script setup>
import { CameraIcon } from "@heroicons/vue/solid";
</script>

<template>
  <caption class="text-neutral-400 py-4 w-full flex items-start text-sm text-left">
    <CameraIcon class="w-5 h-5 mr-2 flex-shrink-0" alt="" />
    <slot></slot>
  </caption>
</template>