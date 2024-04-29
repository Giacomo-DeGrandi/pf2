<template>
  <div
    class="background-section d-flex align-items-end justify-content-evenly h-100"
  >
    <div class="container">
      <div class="mb-5">
        <h1 class="display-4 font-l font-wh text-shad">Giacomo De Grandi</h1>
        <h4 class="font-s font-wh text-nowrap stronger">
          Développeur Web & Consultant
        </h4>
      </div>
      <div class="float-end mb-5" @click="scrollDown">
        <span class="font-l font-wh">Visit</span>
        <img src="..\..\assets\icons\arrow_down.svg" class="display-3" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.background-section {
  background-image: url("@/assets/landflower.jpg");
  background-size: cover;
  background-position: center;
  min-height: 90svh;
  background-attachment: fixed;
}
</style>
