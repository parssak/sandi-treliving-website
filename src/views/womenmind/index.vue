<script setup>
import Container from "@/components/layouts/Container.vue";
import Caption from "@/components/Caption.vue";

const accomplishments = [
  {
    action: "RECRUITED",
    body: "the first-ever Treliving Family Scientist specializing in women’s mental health. Dr. Daisy Radha Singla, an independent scientist jointly appointed to the Institute for Mental Health Policy Research and the Centre for Complex Interventions, began working at CAMH in July 2021. Her area of research involves exploring innovative models to improve access to psychotherapy for pregnant and postpartum women.",
  },
  {
    action: "LAUNCHED",
    body: "the first womenmind Seed Funding Competition. Supporting research projects focused on women’s mental health. Inaugural awardees include Dr. Yuliya Nikolova, Dr. Laurie Zawertailo and Dr. Nikki Bozinoff, who be researching, respectively, new clinical tools to treat depression, women and nicotine addiction and safer and more effective use of benzodiazepines by women.",
  },
  {
    action: "CREATED",
    body: "the inaugural Treliving Family Chair in Women’s Mental Health in conjunction with the University of Toronto. A new chair will be announced in 2022. ",
  },
  {
    action: "PROVIDED SUPPORT",
    body: "for several womenmind Postdoctoral Fellowships",
  },
  {
    action: "DEVELOPED",
    body: "a womenmind mentorship program. CAMH has welcomed two senior scientists to lead the development of the mentorship program for women scientists. ",
  },
  {
    action: "INVITED",
    body: "womenmind members to a Salon Series. The womenmind virtual salon-style event series helps forge connections among womenmind members and inspires others to join the community.",
  },
  {
    action: "DOUBLED",
    body: "the number of womenmind donors in the past year.",
  },
];
</script>

<template>
  <!-- Used negative margin top for putting it back at the top  -->
  <Container class="-mt-10">
    <div class="blockquote">
      <div>
        <h1 class="italic mb-4 md:mb-8 leading-tight">womenmind</h1>
        <p class="text-xl">
          Deborah Gilles, CEO of the CAMH Foundation explains it best in this
          short video. She believes, as I do, that the womenmind donor community
          plays a critical role in addressing the gender inequities women face
          in mental health.
        </p>
      </div>
    </div>

    <img src="@/assets/images/video.png" class="my-6 md:my-12 w-full" />
    <h2>What is <span class="italic">womenmind?</span></h2>
    <p>
      womenmind™ is a community of change leaders committed to tackling the
      unique gender issues which women face when navigating their mental health.
      Inspired and empowered by their support of CAMH, members of the womenmind
      community connect in unique ways to make impactful change for women's
      mental health and advance women in science through generosity, learning
      and action.
      <br /><br />
      The mental health challenges facing women are significant and pressing:
      women experience depression, anxiety, and trauma to a greater extent than
      men. Many treatments used today have been disproportionately tested on men
      and not equitably studied on women. And women in science face biases as
      they work to advance their careers. womenmind is closing the gender gap in
      mental health by supporting the recruitment of new female scientists,
      cultivating early career start-up and mentorship programs, leveling gender
      bias, hiring the first ever university/hospital chair of women’s mental
      health in Canada and sharing leading edge science on women’s mental
      health. Members of the womenmind community connect with and learn from
      each other while driving change for women’s mental health and women in
      science.
      <br /><br />
      womenmind was launched in March 2020 with a $5-million gift from Sandi and
      Jim Treliving and family, coupled with a $1.5-million donation from
      Hudson’s Bay Foundation. womenmind continues to seek additional donors to
      reach its fundraising goal of $10 million by 2025.
    </p>
    <img
      src="@/assets/images/group.png"
      alt="founding members of camh"
      class="w-full mt-6"
    />
    <Caption>
      Our family (including left to right: Candace Creighton, Donna Corrigan,
      myself, Katie Borger, Jenn Beauchamp and Cheryl Treliving) is proud to be
      founding members of the womenmind donor community at CAMH, which supports
      female scientists who are researching new treatments for women’s mental
      health.
    </Caption>
  </Container>

  <section class="bg-accent-dark overflow-hidden">
    <Container>
      <div class="relative lg:flex lg:items-center">
        <div class="hidden lg:block lg:flex-shrink-0">
          <img
            class="h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover"
            src="@/assets/images/face.png"
            alt=""
          />
        </div>

        <div class="relative lg:ml-10 text-white">
          <svg
            class="
              absolute
              top-0
              left-0
              transform
              -translate-x-8 -translate-y-24
              h-36
              w-36
              text-[#8E87AD]
              opacity-50
            "
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              stroke-width="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote class="relative">
            <div class="leading-9 italic">
              <p class="text-xl md:text-2xl">
                womenmind is an opportunity for us to bring women in
                philanthropy together through a shared vision, lift up the
                voices of women living with mental illness and advance women in
                science. There’s no better place to do all of that than at CAMH.
              </p>
            </div>
            <footer class="mt-8">
              <div class="flex items-center">
                <div class="flex-shrink-0 lg:hidden">
                  <img
                    class="h-12 w-12 rounded-full object-cover"
                    src="@/assets/images/face.png"
                    alt=""
                  />
                </div>
                <div class="ml-4 lg:ml-0">
                  <div class="text-lg font-medium">— Sandi Treliving</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </Container>
  </section>

  <Container>
    <h2>Accomplishments of <span class="italic">womenmind</span></h2>

    <div class="space-y-4">
      <div
        v-for="(a, index) in accomplishments"
        :key="index"
        class="p-4 border-accent border-2 text-accent-dark"
      >
        <p>
          <span class="font-medium">{{ a.action }}</span
          >{{ " " }}
          <span>{{ a.body }}</span>
        </p>
      </div>
    </div>
  </Container>

  <Container>
    <div class="flex flex-col items-center text-center">
      <img
        src="@/assets/icons/womenmind-logo.svg"
        class="w-full max-w-sm mb-4"
      />
      <h3 class="leading-tight">
        Learn more about joining the
        <span class="italic">womenmind</span> community and how you can help
        close the gender gap in mental health at CAMH and beyond.
      </h3>
      <a
        href="https://www.camh.ca/en/get-involved/join-the-cause/womenmind"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-xl btn-dark mt-6"
      >
        Visit the camh website
      </a>
    </div>
  </Container>

  <div class="bg-accent-light">
    <Container>
      <div class="grid gap-4 lg:gap-8 lg:grid-cols-3 text-white">
        <div>
          <h3 class="text-white">
            For more information about <span class="italic">womenmind</span>,
            please contact:
          </h3>
        </div>
        <div>
          <p>
            <span class="font-medium">Megan Tregunno </span>
            <br />
            Vice President, Philanthropy
            <br />
            <a href="tel:416-697-7902" class="with-underline">
              <span class="font-medium">T:</span> 416-697-7902
            </a>
            <br />
            <a href="mailto:megan.tregunno@camh.ca" class="with-underline">
              <span class="font-medium">E:</span>
              megan.tregunno@camh.ca
            </a>
          </p>
        </div>

        <div>
          <p>
            <span class="font-medium">Muthoni Kariuki </span>
            <br />
            Senior Philanthropy Officer, Engagement
            <br />
            <a href="tel:416-951-8420" class="with-underline">
              <span class="font-medium">T:</span> 416-951-8420
            </a>
            <br />
            <a href="mailto:muthoni.kariuki@camh.ca" class="with-underline">
              <span class="font-medium">E:</span>
              muthoni.kariuki@camh.ca
            </a>
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>