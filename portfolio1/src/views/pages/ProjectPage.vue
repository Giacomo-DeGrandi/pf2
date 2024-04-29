<template>
  <div class="border-lb">
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col display-5 font-s p-4">Projects</div>
        <div
          class="col display-5 text-secondary font-s p-4"
          @click="handleDivClick"
        >
          <div class="cont">Skills</div>
        </div>
      </div>
      <div class="container-fluid p-3">
        <ProjectItem :project="project" />

        <div v-if="showSecondDiv">
          <SkillItem :project="project" :techs="techs" />
        </div>

        <div class="d-flex flex-row align-items-center text-center mt-3">
          <RouterLink
            :to="{ name: 'project', query: { id: project.id - 1 } }"
            rel="prev"
            v-if="project.id != 1"
            class="btn btn-dark border p-2 text-white text-small rounded-5"
            >prev
          </RouterLink>

          <RouterLink
            :to="{ name: 'project', query: { id: project.id + 1 } }"
            rel="next"
            v-if="nextId"
            class="btn btn-dark border p-2 text-white text-small rounded-5"
            >next
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectItem from "@/components/ProjectItem.vue";
import SkillItem from "@/components/SkillItem.vue";
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import ProjectService from "@/services/ProjectService.js";

const route = useRoute();
const project = ref(null);
const techs = ref([]);
const projectsTot = ref(0);
const showSecondDiv = ref(false);

function handleDivClick() {
  showSecondDiv.value = !showSecondDiv.value;
}

const id_proj = computed(() => parseInt(route.query.id) || 1);

const nextId = computed(() => {
  const totalPages = Math.ceil(projectsTot.value / 2);
  if (project.value.id > totalPages) {
    return false;
  }
  return project.value.id;
});

watchEffect(async () => {
  project.value = 1; // Clear current project before fetching new
  try {
    const response = await ProjectService.getProject(id_proj.value);
    const respTechs = await ProjectService.getTechByProjId(id_proj.value);
    const resNum = await ProjectService.getProjNum();
    techs.value = respTechs.data;
    techs.value = techs.value[id_proj.value - 1];
    project.value = response.data;
    projectsTot.value = resNum.data.length;
  } catch (error) {
    console.error("Failed to fetch project:", error);
    project.value = {}; // Set to empty object or appropriate error handling state
  }
});
</script>
