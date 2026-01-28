<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
    <!-- Background grid pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"
    ></div>

    <!-- Contact Box -->
    <div
      class="relative bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:-translate-y-2 transition-all duration-300 w-full max-w-3xl mx-4"
    >
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
        Contact <span class="text-blue-600">FlatPay Payroll</span>
      </h2>

      <div class="grid sm:grid-cols-3 gap-8 text-center">
        <!-- Email -->
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
          <div class="text-blue-600 text-3xl mb-3">📧</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-1">Email</h3>
          <p class="text-gray-700">support-flatpay@gmail.com</p>
        </div>

        <!-- Phone -->
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
          <div class="text-blue-600 text-3xl mb-3">📞</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
          <p class="text-gray-700">+61 469 766 536</p>
        </div>

        <!-- Address -->
        <div class="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
          <div class="text-blue-600 text-3xl mb-3">📍</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-1">Address</h3>
          <p class="text-gray-700">
            30 Woolybush Dr<br />Tarneit, VIC 3029
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
<style scoped>
/* Optional soft animation */
</style>