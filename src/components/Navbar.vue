<template>
 <div class="min-h-screen flex flex-col">

  <!-- NAVBAR -->
  <nav
   :class="[
    'flex items-center justify-between bg-blue-600 text-white px-6 py-4 transition-all duration-300 ease-in-out',
    isSidebarOpen ? 'pr-72' : 'pr-6',
   ]"
  >
   <!-- Logo + Tagline -->
   <div>
    <div class="text-xl font-bold leading-tight tracking-wide">FlatPay</div>
    <div class="text-sm italic font-bold tracking-wider text-white opacity-90 mt-0.5">
     Simple. Smart. Affordable Payroll Solutions.
    </div>
   </div>

   <!-- Right Nav Items -->
   <div class="flex items-center space-x-6">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/about" class="hover:underline">About</router-link>
    <router-link to="/services" class="hover:underline">Services</router-link>
    <router-link to="/FeeCalculator" class="hover:underline">Fee Calculator</router-link>

    <!-- Dropdown menu -->
    <!-- <div class="relative" ref="dropdownRef">
     <span  @click="toggleDropdown" class="cursor-pointer hover:underline">Submissions ▾</span>
     <div
      v-if="showDropdown"     
      class="absolute top-full left-0 bg-white text-blue-600 shadow-md mt-2 rounded-md z-50 w-48"
     >
      <router-link to="/timesheet" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Timesheet</router-link>
      <router-link to="/salary-sacrifice" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Salary Sacrifice</router-link>
      <router-link to="/superannuation" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Superannuation</router-link>
      <router-link to="/travel-allowance" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Travel Allowance</router-link>
      <router-link to="/super-form" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Super Form</router-link>
      <router-link to="/bank-account" class="block px-4 py-2 hover:bg-gray-100" @click.stop="closeDropdown">Bank Account</router-link>
     </div>
    </div> -->

    <router-link to="/contact" class="hover:underline">Contact</router-link>

    <!-- ☰ icon -->
    <!-- <button @click="toggleSidebar" class="text-2xl font-bold focus:outline-none">☰</button> -->
   </div>
  </nav>

  <!-- SIDEBAR -->
  <div
   class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out"
   :class="isSidebarOpen ? 'translate-x-0' : 'translate-x-full'"
  >
   <div class="p-6 text-blue-600">
    <div class="flex justify-between items-center mb-6">
     <h2 class="text-xl font-bold">Menu</h2>
     <button @click="closeSidebar">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
     </button>
    </div>
    <nav class="flex flex-col space-y-4">
     <router-link to="/Dashboard" class="text-blue-600 hover:text-blue-800">Dashboard</router-link>
    </nav>
   </div>
  </div>

  <!-- PAGE CONTENT -->
  <main class="flex-grow">
   <router-view />
  </main>

<footer class="bg-blue-700 text-white py-6 px-4"> 
  <div class="flex justify-between items-center w-full px-4 max-w-full">
    <!-- Social Icons aligned to extreme left -->
     <div class="flex space-x-4 text-white text-xl ml-0">
      <a href="https://www.facebook.com/" class="hover:text-gray-200" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/" class="hover:text-gray-200" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>   
      <!-- <a href="#" class="hover:text-gray-200" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a> -->
      <!-- <a href="#" class="hover:text-gray-200" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a> -->
    </div>
<!-- Powered by --> 
 <div class="text-sm opacity-90 text-center md:text-right w-full md:w-auto">Powered by <span class="font-semibold">Gajanan Software Solutions Australia Pty Ltd</span>
 </div>
  <div class="text-sm opacity-90 text-center md:text-right w-full md:w-auto"><span class="font-semibold">ABN </span>52668172272
</div>
</div>
</footer>
 </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isSidebarOpen = ref(false)
const showDropdown = ref(false)
const dropdownRef=ref(null)

const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value)
const closeSidebar = () => (isSidebarOpen.value = false)
const toggleDropdown = ()=> (showDropdown.value = !showDropdown.value)
const closeDropdown = () => (showDropdown.value = false)

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showDropdown.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
