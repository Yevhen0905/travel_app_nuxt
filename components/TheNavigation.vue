<template>
  <div id="nav">
    <img
      class="nav_img"
      src="../public/travel-svgrepo-com.svg"
      alt="logo travel"
    />
    <NuxtLink class="nav_logo" id="logo" to="/">Travel App</NuxtLink>
    <NuxtLink 
      v-for="destination in destinations" 
      :key="destination.id"
      :to="'/destination/' + destination.id + destination.slug"
    >
      {{ destination.name }}
    </NuxtLink>
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

<style scoped lang="scss">
.nav_img {
  width: 40px;
  height: 40px;
}
.nav_logo {
  margin-right: 20px;
}
#nav .vue-school-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>
