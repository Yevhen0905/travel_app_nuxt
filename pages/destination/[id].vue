<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <GoBack />
    <div class="destination-details">
        <div class="destination-details_img">
          <img
            class="image"
            :src="`/images/${destination.image}`"
            :alt="destination.name"
          />
        </div>
        <p>{{ destination.description }}</p>
      </div>
  </section>
  <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
    
        >
          <ExperienceCard :experience="experience" />
        </div>
      </div>
      <slot />
    </section>
</template>

<script setup>
import sourceData from "@/data.json";
import { computed } from "vue";
const route = useRoute();
const id = route.params.id;
// console.log(id);

const destination = computed(() =>
  sourceData.destinations.find((destination) => destination.id === parseInt(id))
);
</script>
