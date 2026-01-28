<template>
 <div class="page">
      <div class="card">
         <h2 class="title">Payroll Fee Calculator</h2>
         <p class="subtitle">
            Calculate service fee based on hourly salary (including super)
           </p>

         <label class="label">
            Enter Hourly Salary (Including Super)
           </label>

         <div class="input-wrapper">
            <span class="currency">$</span>
            <input      type="number"      v-model.number="hourlySalary"      placeholder="e.g. 65" 
              class="input"     />
           </div>

         <button class="btn" @click="calculateFee">
            Calculate Payroll Fee
           </button>

         <div v-if="showResult" class="result">
            <div class="row">
               <span>Service Fee (1%)</span>
               <strong>AUD {{ fee.toFixed(2) }}</strong>
              </div>

            <div class="row">
               <span>GST (10%)</span>
               <strong>AUD {{ gst.toFixed(2) }}</strong>
              </div>

            <div class="divider"></div>

            <div class="row total">
               <span>Total Payable</span>
               <strong>AUD {{ total.toFixed(2) }}</strong>
              </div>
           </div>

         <p class="note">
            * GST applies only if registered (Australia)
           </p>
        </div>
     </div>
</template>

<script setup>
import { ref } from "vue";

const hourlySalary = ref(0);
const fee = ref(0);
const gst = ref(0);
const total = ref(0);
const showResult = ref(false);

const SERVICE_FEE_PERCENT = 1;
const GST_PERCENT = 10;

function calculateFee() {
  fee.value = (hourlySalary.value * SERVICE_FEE_PERCENT) / 100;
  gst.value = (fee.value * GST_PERCENT) / 100;
  total.value = fee.value + gst.value;
  showResult.value = true;
}
</script>

<style scoped>
/* Page */
.page {
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Card */
.card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Typography */
.title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
  text-align: center;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  display: block;
}

/* Input */
.input-wrapper {
  position: relative;
  margin-bottom: 18px;
}

.currency {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.input {
  width: 100%;
  padding: 10px 12px 10px 28px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

/* Button */
.btn {
  width: 100%;
  background: #2563eb;
  color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn:hover {
  background: #1e40af;
}

/* Results */
.result {
  margin-top: 22px;
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e5e7eb;
}

.row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #374151;
  margin-bottom: 8px;
}

.divider {
  height: 1px;
  background: #e5e7eb;
  margin: 10px 0;
}

.total {
  font-size: 16px;
  font-weight: 700;
  color: #1d4ed8;
}

/* Footer note */
.note {
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  margin-top: 14px;
}
</style>
