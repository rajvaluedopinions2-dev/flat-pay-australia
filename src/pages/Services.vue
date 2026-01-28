<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden py-12">
    <!-- Background grid -->
    <div
      class="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"
      aria-hidden="true"></div>
    <!-- 3D Card Container -->
    <div
      class="relative bg-white p-10 rounded-2xl shadow-[0_12px_40px_rgb(2,6,23,0.08)] transform hover:-translate-y-2 transition-all duration-300 w-full max-w-5xl mx-4">
      <!-- Header -->
      <header class="text-center mb-10">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900"> Our <span class="text-blue-600">Services</span>
        </h1>
        <p class="mt-4 text-gray-700 text-lg max-w-2xl mx-auto"> At <span class="font-semibold">Flat Pay</span>, we
          simplify payroll for small businesses and contractors — offering everything you need for just <span
            class="font-semibold">1%</span>. </p>
      </header>
      <!-- Services Grid -->
      <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(service, index) in services" :key="index"
          class="bg-white border border-gray-100 rounded-xl p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <div class="text-3xl mb-3 text-blue-600">{{ service.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
          <p class="text-gray-700 text-sm">{{ service.description }}</p>
        </div>
      </section>
      <!-- CTA -->
      <footer class="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-gray-700"> Ready to make payroll effortless? Switch to <span class="font-semibold">Flat
            Pay</span> today and pay only <span class="font-semibold">1%</span>. </div>
        <div class="flex gap-3"> <router-link to="/register"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-block text-center">
            Get Started Free </router-link>
          <router-link to="/contact"
            class="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition inline-block text-center">
            Contact Us </router-link>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>export default { name: "Services", data() { return { services: [{ title: "Payroll Processing", description: "Automate pay runs with accurate calculations and instant payslips — no spreadsheets or stress.", icon: " ", }, { title: "Superannuation", description: "Handle employee super payments easily and stay compliant with ATO standards.", icon: " ", }, { title: "Tax & Compliance", description: "PAYG, STP, and other reports are generated automatically and submitted on time.", icon: " ", }, { title: "Contractor Payments", description: "Simplify freelancer or contractor payments with one-click payouts and summaries.", icon: " ", }, { title: "Employee Onboarding", description: "Add employees fast — upload details, assign pay rates, and start payroll instantly.", icon: " ", }, { title: "Dedicated Support", description: "Friendly, fast help from real humans who care about your business — no call queues.", icon: " ", },], }; }, };</script>
<style scoped>
/* You can reuse or extend animations from About.vue */
</style>