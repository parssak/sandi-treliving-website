<template>
  <main class="lg:relative min-h-screen">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <slot></slot>
      </div>
    </div>

    <div class="lg:w-1/2 lg:h-full lg:absolute lg:inset-y-0 lg:right-0">
      <slot name="image" />
    </div>
  </main>
</template>