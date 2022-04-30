import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import FishingNewLog from '../views/FishingNewLog.vue'
import HuntingNewLog from '../views/HuntingNewLog.vue'
import ScoutingNewLog from '../views/ScoutingNewLog.vue'
import HikingNewLog from '../views/HikingNewLog.vue'
import ViewFishingLogs from '../views/ViewFishingLogs.vue'
import ViewHuntingLogs from '../views/ViewHuntingLogs.vue'
import ViewScoutingLogs from '../views/ViewScoutingLogs.vue'
import ViewHikingLogs from '../views/ViewHikingLogs.vue'
import ViewFishLog from '../views/ViewFishLog.vue'
import ViewHuntLog from '../views/ViewHuntLog.vue'
import ViewHikeLog from '../views/ViewHikeLog.vue'
import ViewScoutLog from '../views/ViewScoutLog.vue'


Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path:"/fishing/new/log",
      name: "fishing-new-log",
      component: FishingNewLog,
      meta: {
        requiresAuth: true
      }
    },
    {
    path: "/hunting/new/log",
    name: "hunting-new-log",
    component: HuntingNewLog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/scouting/new/log",
    name: "scouting-report-new-log",
    component: ScoutingNewLog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/hiking/new/log",
    name: "hiking-new-log",
    component: HikingNewLog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/view/Fishing/logs",
    name: "view-fishing-logs",
    component: ViewFishingLogs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/view/Hunting/logs",
    name: "view-hunting-logs",
    component: ViewHuntingLogs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/view/scouting/logs",
    name: "view-scouting-logs",
    component: ViewScoutingLogs,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/view/hiking/logs",
    name: "view-hiking-logs",
    component: ViewHikingLogs,
    meta: {
      requiresAuth: true
    }
  },
  {
  path: "/view/fish/log",
  name: "view-fish-log",
  component: ViewFishLog,
  meta: {
    requiresAuth: true
  }
},
{
  path: "/view/hunt/log",
  name: "view-hunt-log",
  component: ViewHuntLog,
  meta: {
    requiresAuth: true
  }
},
{
  path: "/view/hike/log",
  name: "view-hike-log",
  component: ViewHikeLog,
  meta: {
    requiresAuth: true
  }
},
{
  path: "/view/scout/log",
  name: "view-scout-log",
  component: ViewScoutLog,
  meta: {
    requiresAuth: true
  }
},

  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
