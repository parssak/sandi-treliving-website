<template>
  <main class="lg:relative lg:min-h-[90vh]">
    <div class="mx-auto max-w-7xl w-full">
      <div class="h-96 lg:w-1/2 lg:h-full lg:absolute lg:inset-y-0 lg:left-0">
        <slot name="image" />
      </div>
    </div>
    <div
      class="
        relative
        w-full
        px-4
        sm:px-8
        xl:pl-16
        lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
        pt-10
        pb-12
        md:pb-20 md:pt-16
        flex flex-col
        justify-center
        items-start
      "
    >
      <slot></slot>
    </div>
  </main>
</template>