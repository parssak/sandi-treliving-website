<template>
  <Container>
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="lg:py-12">
        <h1 class="blockquote">About Sandi</h1>
        <p>
          I’ve been a director on the board of the CAMH Foundation since 2014
          and am proud to be a founding member, along with my family (including
          husband Jim Treliving, owner of Boston Pizza International and known
          to many as the longest serving “dragon” on CBC’s Dragon’s Den),
          of womenmind. This community is committed to increasing awareness
          about girls’ and women’s mental health, reducing the gender gap in
          mental health, recruiting and advancing female scientists, and
          supporting ground-breaking discoveries in the field of mental health.
          <br /><br />
          The mental health challenges facing women are significant and
          pressing: women experience depression, anxiety, and trauma to a
          greater extent than men. Many treatments used today have been
          disproportionately tested on men and not equitably studied on women.
          And women in science face biases as they work to advance their
          careers.
          <br /><br />
          womenmind exists to close existing gaps in care, and achieve better
          mental health care and outcomes that will have a positive impact on
          women’s health and advancement in North America and beyond.
        </p>
        <img
          src="@/assets/icons/womenmind-logo.svg"
          alt="womanmind and camh logo"
          class="mt-6"
        />
        <p class="mt-4">Learn more about how you can get involved.</p>
        <a
          href="https://www.camh.ca/en/get-involved/join-the-cause/womenmind"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-xl btn-dark mt-6"
        >
          Visit the camh website
        </a>
      </div>
      <div class="pb-4">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/married.png"
          alt=""
        />
        <Caption> Photograph of Sandi and Jim Treliving </Caption>
      </div>
    </div>
  </Container>

  <Container class="bg-accent-hover">
    <h2>Why mental health?</h2>
    <p>
      My personal connection to mental health goes back to my early family life.
      I was seven years old when my teenager brother, David, began exhibiting
      the symptoms of what would later be diagnosed as schizophrenia. It’s a
      disease that can cause delusions, hallucinations and disorganized
      thinking. When in the grip of psychosis, David would have violent
      outbursts and it wasn’t until later in life that he was able to get the
      treatment and medication he needed. <br /><br />
      Being exposed to mental health challenges at a very young age with my
      brother’s illness, I always knew that I was going to do something in the
      mental health world.
      <br /><br />
      I didn’t realize the impact of my brother’s illness on me. I always looked
      at my father and mother and how challenging it’s been for them, but
      David’s illness has impacted me tremendously as well. Because my brother
      is ten years older than me, I didn’t really get to know him ever. And I’m
      sad about that. I know he was a great brother to my sisters, but I never
      really experienced that relationship with him because I was so young. So
      being able to do the work I am doing now in the mental health field is
      both rewarding and healing.
      <br /><br />
      I’ve come to believe that the more we talk about mental health, the better
      we will be able to support people and families living with mental illness.
      <br /><br />
      Humanity is experiencing a mental health crisis and the numbers are
      staggering — almost half a billion people globally struggle with mental
      illness, and fewer than half of those affected have access to adequate
      care despite known effective treatments.
      <br /><br />
      When it comes to our focus on the mental wellbeing of women, it really
      hits home. Between Jim, and I, we have two daughters, two
      daughters-in-law, six granddaughters, and one great-granddaughter. Women’s
      health research is underfunded, underrepresented, and is overall lagging
      within the field of mental health.
      <br /><br />
      I hope you’ll consider joining me and my family on our mission to help
      grow the womenmind community so that together we can be champions of
      women’s mental health.
    </p>
  </Container>
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import { CameraIcon } from "@heroicons/vue/solid";
import Caption from "@/components/Caption.vue";
</script>