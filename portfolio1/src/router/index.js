import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomePage from "../views/pages/HomePage.vue";
import ProjectPage from "../views/pages/ProjectPage.vue";
import ContactsPage from "../views/pages/ContactsPage.vue";
import AboutPage from "../views/pages/AboutPage.vue";

const routes = [
  {
    path: "/",
    component: LayoutView,
    children: [
      { path: "", name: "home", component: () => HomePage },
      {
        path: "",
        name: "project",
        component: () => ProjectPage,
        props: true,
      },
      { path: "", name: "contacts", component: () => ContactsPage },
      { path: "", name: "about", component: () => AboutPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
