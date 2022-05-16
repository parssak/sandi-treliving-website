<template>
  <Popover class="sticky left-0 top-0 w-full z-20 bg-accent-lightest">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          md:justify-start md:space-x-5
        "
      >
        <div class="flex justify-start items-center lg:w-0 flex-1">
          <router-link to="/">
            <span class="sr-only">Sandi Treliving</span>
            <div class="flex items-center">
              <img
                class="h-9 w-auto flex items-center"
                src="@/assets/logo.svg"
                alt="Sandi Treliving"
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2">
          <PopoverButton
            class="
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              transition
              hover:bg-white
              group
            "
          >
            <span class="sr-only">Open menu</span>
            <svg
            class="h-6 w-6"
              width="35"
              height="24"
              viewBox="0 0 35 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="13" y="0.5" width="22" height="2" fill="#B8898C" />
              <rect y="10.5" width="35" height="2" fill="#B8898C" />
              <rect x="13" y="21.5" width="22" height="2" fill="#B8898C" />
            </svg>
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-6 xl:space-x-7">
          <NavItem
            v-for="item in navigation" 
            :route="item"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-100 ease-out"
      enter-from-class="opacity-0 1scale-75"
      enter-to-class="opacity-100 1scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 1scale-100"
      leave-to-class="opacity-0 1scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 z-10 inset-x-0 transition transform origin-top"
      >
        <div
          class="shadow-lg ring-1 ring-black ring-opacity-5 bg-accent-lightest"
        >
          <div class="pt-5 pb-6 px-5">
            <div
              class="
                flex
                items-center
                justify-between
                mx-auto
                max-w-7xl
                md:pr-3
                xl:pr-8
              "
            >
              <router-link to="/">
                <img
                  class="h-9 w-auto"
                  src="@/assets/logo.svg"
                  alt="Sandi Treliving"
                />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    duration-100
                    hover:bg-white
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6 text-accent" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 mx-auto max-w-7xl">
              <nav class="grid space-y-4">
                <PopoverButton>
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="{ name: item.name }"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import { navigation } from "@/data";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
  },
  setup() {
    return { navigation };
  },
};
</script>
