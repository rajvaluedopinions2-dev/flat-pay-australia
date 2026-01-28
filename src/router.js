// src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Contact from './pages/Contact.vue'
import Dashboard from './pages/Dashboard.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import DashboardHome from './pages/dashboard/Home.vue'
import Payrolls from './pages/dashboard/Payrolls.vue'
import Employees from './pages/dashboard/Employees.vue'
import Settings from './pages/dashboard/Settings.vue'
import PayCalculator from './pages/PayCalculator.vue'
import Timesheet from './pages/forms/timesheet.vue'
import FeeCalculator from './pages/FeeCalculator.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/PayCalculator', name:'PayCalculator',component: PayCalculator },
    { path: '/FeeCalculator', name:'FeeCalculator',component: FeeCalculator },
    { path: '/Timesheet', component: Timesheet },
    { path: '/register',name: 'Register',component: Register},
    {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      { path: '/', component: DashboardHome },
      { path: 'payrolls', component: Payrolls },
      { path: 'employees', component: Employees },
      { path: 'settings', component: Settings }
    ]
  }
  ]
})

