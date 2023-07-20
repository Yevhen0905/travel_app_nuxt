<template>
    <div>
      <section class="destination">gfdgdf
         <!-- <h1>{{ destination.name }}</h1> -->
      </section>
    </div>
</template>

<script setup>
import sourceData from "@/data.json";
import { computed } from "vue";
const route = useRoute();
const id = route.params.id;
console.log(id);

const destination = computed(() =>
  sourceData.destinations.find((destination) => destination.id === parseInt(id))
);
</script>