import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
      alias: ['/Login'],
    },
    {
      path: "/study",
      name: "Study",
      component: () => import("../views/StudyView.vue"),
      alias: ['/Study', '/studying', '/Studying'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/tutor",
      name: "Tutor",
      component: () => import("../views/TutoringView.vue"),
      alias: ['/tutor', '/Tutor', '/Tutoring'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/forum",
      name: "Forum",
      component: () => import("../views/ForumView.vue"),
      alias: ['/Forum'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/rewards",
      name: "Rewards",
      component: () => import("../views/RewardsView.vue"),
      alias: ['/Rewards'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
      alias: ['/Profile'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      redirect: "/profile",
    },
    {
      path: "/tutoringbooking",
      name: "Tutor Book",
      component: () =>
        import("../components/TutoringComponents/TutoringBookingComp.vue"),
      alias: ['/TutorBooking', '/tutorBook', '/tutoringBook'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/tutoringsession",
      name: "TutoringSession",
      component: () =>
        import("../components/TutoringComponents/TutoringSessionComp.vue"),
      alias: ['/tutoringsession', '/tutorsession'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/studymaterial",
      name: "StudyMaterial",
      component: () =>
        import("../components/StudyComponents/StudyMaterialComp.vue"),
      alias: ['/StudyMaterial', '/tutorsession'],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/studygroups",
      name: "StudyGroups",
      component: () => import("../components/StudyComponents/StudyGroupsComp.vue"),
      alias: ['/studyGroups'],
      meta: {
        requiresAuth: true,
      },
    },

    // Routes for Footer
    {
      path: "/aboutus",
      name: "About",
      component: () => import("../views/FooterViews/AboutView.vue"),
      alias: ['/aboutUs'],
    },
    {
      path: "/cookiepolicy",
      name: "Cookies Policy",
      component: () => import("../views/FooterViews/CookiesView.vue"),
      alias: ['/cookiePolicy'],
    },
    {
      path: "/privacypolicy",
      name: "Privacy Policy",
      component: () => import("../views/FooterViews/PrivacyView.vue"),
      alias: ['/privacyPolicy'],
    },
    {
      path: "/termsconditions",
      name: "Terms and Conditions",
      component: () => import("../views/FooterViews/TermsView.vue"),
      alias: ['/terms', '/termsandconditions', '/termsConditions'],
    },
    {
      path: "/contactus",
      name: "Contact Us",
      component: () => import("../views/FooterViews/ContactView.vue"),
      alias: ['/contact', '/contactUs'],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/home");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
