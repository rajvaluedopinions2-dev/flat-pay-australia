<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-8">
    <div class="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
      <h1 class="text-3xl font-bold text-center mb-6 text-blue-600">Register for Flat Pay Payroll Services</h1>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="form.name" type="text" placeholder="Full Name" required
               class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />

        <input v-model="form.email" type="email" placeholder="Email Address" required
               class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />

        <input v-model="form.phone" type="tel" placeholder="Phone Number"
               class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />

        <textarea v-model="form.message" placeholder="Message (optional)" rows="3"
                  class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>

        <button type="submit"
                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
      <p v-if="successMessage" class="text-green-600 text-center mt-4 font-medium">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-600 text-center mt-4 font-medium">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: { name: "", email: "", phone: "", message: "" },
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    async submitForm() {
      const scriptURL = "https://script.google.com/macros/s/AKfycbw4ciod9W03CiYzqZzxZ0KotjU3Q85QgNuXXhOxQCSREIIYUORhQwrkAaBrfHF9ddqHYw/exec"; // replace with your actual URL

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: JSON.stringify(this.form),
          headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();

        if (result.result === "success") {
          this.successMessage = "Thank you for registering! We'll be in touch soon.";
          this.form = { name: "", email: "", phone: "", message: "" };
        } else {
          this.errorMessage = "Something went wrong. Please try again.";
        }
      } catch (err) {
        this.errorMessage = "Unable to connect. Please check your network.";
      }
    }
  }
};
</script>