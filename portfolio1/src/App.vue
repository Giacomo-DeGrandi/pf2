<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid sticky-top">
        <!-- Logo on the left -->
        <a class="display-3 font-s stronger ms-3" href="#"> G </a>
        <!-- Links on the right -->
        <div class="font-s justify-content-end me-4">
          <div class="row">
            <div class="col">
              <a class="nav-link text-nowrap" aria-current="page" href="#"
                >my projects</a
              >
            </div>
            <div class="col">
              <a class="nav-link" href="#">contacts</a>
            </div>
            <div class="col">
              <a class="nav-link" href="#">about</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<style></style>
