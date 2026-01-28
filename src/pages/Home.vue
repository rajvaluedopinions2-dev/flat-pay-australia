<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Hero / Header Section -->
    <section class="text-center py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-3xl leading-tight">
        Flat 1% payroll fee, no surprises
      </h1>
      <p class="mt-4 text-xs italic text-gray-700 sm:text-xs max-w-2xl mx-auto">
        Let FlayPay payroll services team take the stress out of managing your payroll, help you keep your finances on track, and make sure you paid on time and correctly for your contracting services or business.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <router-link
        to="/register"
      class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-block text-center"
      >
      Register Now
      </router-link>
      <router-link
      to="/FeeCalculator"
        class="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition">
          Calculate Your Payroll Fee
          </router-link>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-3xl">
          Why Choose FlatPay?
        </h2>
        <p class="mt-4 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Payroll doesn't have to be pricey or painful. <span class="font-semibold">FlatPay</span> gives small businesses and independent contractors a simple, stress free way to manage payments for less than you'd spend doing it yourself.
        </p>
      </div>

      <div class="space-y-8">
        <div v-for="(item, index) in whyChooseContent" :key="index" class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-2xl font-semibold text-gray-900 mb-3">{{ item.title }}</h3>
          <p class="text-gray-700">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Optional Call to Action -->
    <section class="py-12 bg-blue-50 text-center">
      <h3 class="text-3xl font-bold text-gray-900 mb-4">Ready to simplify your payroll?</h3>
       <router-link
        to="/register"
      class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Get Started Now
      </router-link>
    </section>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
const router = useRouter()
export default {
  name: "Home",
  data() {
    return {
      whyChooseContent: [
        {
          icon: "💸",
          title: "Most Affordable In The Market",
          description: "Only pay 1% fee for the services and no hidden costs."
        },
        {
          icon: "💰",
          title: "Stress-Free Payroll",
          description: "Automatic calculations and payments so you never worry about errors."
        },
        {
          icon: "✅",
          title: "Full Compliance",
          description: "Taxes, superannuation, and reporting handled correctly and on time."
        },
        {
          icon: "🔒",
          title: "Secure & Reliable",
          description: "Your data is always protected"
        }
      ]
    }
    },
}
</script>
<style scoped>
/* Optional: add smooth animations for cards if desired */
</style>
