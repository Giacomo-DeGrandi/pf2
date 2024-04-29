<template>
  <div class="container-fluid shadow-sm font-s border rounded-3 fs-5">
    <div v-if="techs" class="shadow-sm p-4">
      <div v-for="technos in techs.technologies" :key="technos">
        <div class="shadow-sm p-3 border rounded-5">{{ technos }}</div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  techs: {
    type: Object,
    required: true,
  },
});
</script>
