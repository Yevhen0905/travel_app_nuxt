<template>
  <div></div>
</template>

<!-- <template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup>
import sourceData from "@/data.json";
import { computed } from "vue";
const route = useRoute();
const id = route.params.id;
const slug = route.params.slug;
console.log(id);
console.log(slug);

const destination = computed(() =>
  sourceData.destinations.find((destination) => destination.id === id)
);
const experience = computed(() =>
  destination.experiences.find(
    (experience) => experience.slug === slug)
);
</script> -->
