<template>
  <div class="container-fluid shadow-sm font-s border rounded-3">
    <div v-if="project" class="shadow-sm p-4 fs-5">
      <h2 class="display-7 font-l p-2 stronger">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="d-flex flex-row align-items-center">
        <p>{{ project.started_at }}</p>
        <p
          v-if="project.status === 'completed'"
          class="bg-info text-dark p-1 shadow-sm"
        >
          {{ project.status }}
        </p>
        <p class="bg-light text-dark p-1 shadow-sm" v-else>
          {{ project.status }}
        </p>
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
});
</script>
