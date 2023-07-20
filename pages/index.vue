<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <NuxtLink 
         v-for="destination in destinations" 
         :key="destination.id"
         :to="'/destination/' + destination.id + destination.slug"
         >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </NuxtLink>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
