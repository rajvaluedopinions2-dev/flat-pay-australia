<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden py-12">
    <!-- Background grid pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(90deg,#e5e7eb_1px,transparent_1px),linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"
      aria-hidden="true"></div>
    <!-- 3D Card Container -->
    <div
      class="relative bg-white p-10 rounded-2xl shadow-[0_12px_40px_rgb(2,6,23,0.08)] transform hover:-translate-y-2 transition-all duration-300 w-full max-w-5xl mx-4">
      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900">About <span class="text-blue-600">Flat Pay</span>
        </h1>
        <p class="mt-4 text-gray-700 text-lg max-w-2xl mx-auto"> Simple payroll for independent contractors and small
          businesses — trusted, transparent, and the cheapest in the market at just <span
            class="font-semibold">1%</span>.</p>
      </header>
      <!-- Two-column content -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Left: Who we are / Mission -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-900 mb-3">Who we are</h2>
          <p class="text-gray-700 mb-4">Flat Pay is a small, focused team building payroll tools for busy businesses and
            contractors who don’t want to overpay for basic payroll. We believe payroll should be fair, fast, and
            frictionless — not a hidden cost.</p>
          <h3 class="text-lg font-semibold text-gray-900 mt-4 mb-2">Our mission</h3>
          <p class="text-gray-700"> To make payroll simple and accessible for all businesses by offering transparent
            pricing, trusted compliance, and human support without the enterprise price tag. </p>
          <div class="mt-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Why 1% matters</h3>
            <p class="text-gray-700"> At <span class="font-semibold">1%</span>, you get predictable costs that scale
              with your payroll — not surprise fees. We keep overhead low so you keep more of what you earn. </p>
          </div>
        </section>
        <!-- Right: Services & Team -->
        <aside>
          <div class="bg-blue-50 rounded-xl p-6 mb-6 shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Services we provide</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Payroll processing & runs</li>
              <li>• Tax calculations & PAYG reporting</li>
              <li>• Superannuation setup and payments</li>
              <li>• Automated payslips</li>
              <li>• Simple onboarding for contractors</li>
              <li>• Friendly support — real humans, quick responses</li>
            </ul>
          </div>
          <div class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Our team</h3>
            <p class="text-gray-700 mb-4"> We are a new, nimble team dedicated to our clients. Small by design — so we
              can move fast and give personalised support. From payroll engineers to compliance specialists, we build
              tools to save you time and reduce risk. </p>
            <div class="flex items-center gap-3 mt-4">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                FP</div>
              <div>
                <div class="text-sm font-semibold text-gray-900">Flat Pay Team</div>
                <div class="text-xs text-gray-500">Customer-first payroll experts</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <!-- Additional info / Trust -->
      <section class="mt-8 grid sm:grid-cols-3 gap-4">
        <div class="p-4 bg-gray-50 rounded-lg text-center">
          <div class="text-2xl font-bold text-gray-900">Transparent</div>
          <div class="text-sm text-gray-600 mt-1">No hidden fees — just 1% flat pricing</div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg text-center">
          <div class="text-2xl font-bold text-gray-900">Compliant</div>
          <div class="text-sm text-gray-600 mt-1">Built to meet Australian payroll rules and reporting</div>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg text-center">
          <div class="text-2xl font-bold text-gray-900">Support</div>
          <div class="text-sm text-gray-600 mt-1">Fast, friendly help from real people</div>
        </div>
      </section>
      <!-- CTA -->
      <footer class="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div class="text-gray-700"> Ready to switch? Start with a free setup and pay only <span
              class="font-semibold">1%</span>. </div>
        </div>
        <div class="flex gap-3"> <router-link to="/register"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-block text-center">
            Get Started Free </router-link>
          <router-link to="/contact"
            class="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition inline-block text-center">
            Contact Sales </router-link>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>export default { name: "About", };</script>
<style scoped>
/* optional: keep empty or add subtle animation */
</style>
