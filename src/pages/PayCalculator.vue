<template>
  <div class="pay-calculator">
    <h2>Pay Calculator</h2>
    <div>
      <label>Weekly Hours:</label>
      <input v-model.number="weeklyHours" type="number" min="0" />
    </div>
    <div>
      <label>Hourly Rate (AUD):</label>
      <input v-model.number="hourlyRate" type="number" min="0" />
    </div>
    <div class="button-container">
    <button @click="generatePayslip">Generate Sample Payslip</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsPDF from 'jspdf'

const calculateAnnualTax = (annualSalary) => {
  let tax = 0;

  // 2025–26 resident tax rates
  if (annualSalary <= 18200) {
    tax = 0;
  } else if (annualSalary <= 45000) {
    tax = (annualSalary - 18200) * 0.16;
  } else if (annualSalary <= 135000) {
    tax = 4288 + (annualSalary - 45000) * 0.30;
  } else if (annualSalary <= 190000) {
    tax = 31288 + (annualSalary - 135000) * 0.37;
  } else {
    tax = 51638 + (annualSalary - 190000) * 0.45;
  }
  return tax;
};
const calculateMedicareLevy = (annualSalary) => {
  if (annualSalary <= 26000) return 0;
  if (annualSalary <= 32500) {
    // Pro-rata between 0 and 2%
    const excess = annualSalary - 26000;
    return (excess / 6500) * 0.02 * annualSalary;
  }
  return 0.02 * annualSalary;
};

const weeklyHours = ref(0)
const hourlyRate = ref(0)

  const generatePayslip = () => { 
  const grossPay = weeklyHours.value * hourlyRate.value;
  const annualSalary = grossPay * 52;

  const incomeTax = calculateAnnualTax(annualSalary);
  const medicareLevy = calculateMedicareLevy(annualSalary);

  const totalTax = incomeTax + medicareLevy;
  const weeklyTax = totalTax / 52;

  const payrollFee = grossPay * 0.01;
  const superannuation = grossPay * 0.12; // 12% for FY25–26
  const netPay = grossPay - weeklyTax - payrollFee;

  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text("Sample Payslip 2025-26", 20, 20);
  doc.setFontSize(11);
  doc.text(`Weekly Hours: ${weeklyHours.value}`, 20, 35);
  doc.text(`Hourly Rate: $${hourlyRate.value.toFixed(2)}`, 20, 45);
  doc.text(`Gross Pay: $${grossPay.toFixed(2)}`, 20, 55);
  doc.text(`Income Tax (weekly): $${(incomeTax / 52).toFixed(2)}`, 20, 65);
  doc.text(`Medicare Levy (weekly): $${(medicareLevy / 52).toFixed(2)}`, 20, 75);
  doc.text(`Payroll Fee (1%): $${payrollFee.toFixed(2)}`, 20, 85);
  doc.text(`Superannuation (12%): $${superannuation.toFixed(2)}`, 20, 95);
  doc.text(`Net Pay: $${netPay.toFixed(2)}`, 20, 105);

  doc.save("sample-payslip.pdf");
};
</script>

<style scoped>
.pay-calculator {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
label {
  display: block;
  margin: 10px 0 5px;
}
input {
  width: 100%;
  padding: 6px;
  margin-bottom: 10px;
}
.button-container{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color:white;
  border:none;
  border-radius:4px;
  cursor: pointer;
}

button:hover{
    background-color: #0056b3;
}
</style>
