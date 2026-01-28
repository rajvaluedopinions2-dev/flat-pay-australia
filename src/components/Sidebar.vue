<template>
<div v-if="isOpen"class="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 p-6">
  <button @click="closeSidebar" class="text-white text-2xl mb-4">✕</button>
  <nav class="space-y-4">
     <router-link to="/Dashboard" class="text-white-600 hover:text-blue-600">Dashboard</router-link>
    <!-- <a href="#" class="block">Dashboard</a>
    <a href="#" class="block">Payslips</a>
    <a href="#" class="block">Settings</a>
    <a href="#" class="block">Logout</a> -->
  </nav>
</div>
</template>
<script setup>
defineProps({
  isOpen: Boolean,
  closeSidebar: Function
  })
</script>