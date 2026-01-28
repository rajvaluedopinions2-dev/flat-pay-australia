<template>
  <div class="border p-6 max-w-md bg-white shadow">
    <h2 class="text-xl font-bold mb-4">Employee Payslip</h2>
    <p><strong>Name:</strong> {{ payslip.name }}</p>
    <p><strong>Position:</strong> {{ payslip.position }}</p>
    <p><strong>Period:</strong> {{ payslip.period }}</p>
    <p><strong>Salary:</strong> ${{ payslip.salary }}</p>
    <p><strong>Tax Deducted:</strong> ${{ payslip.tax }}</p>
    <p><strong>Net Pay:</strong> ${{ payslip.salary - payslip.tax }}</p>
    <button @click="downloadPDF" class="mt-4 bg-blue-600 text-white px-4 py-2">Download PDF</button>
  </div>
</template>

<script setup>
import jsPDF from 'jspdf'

const payslip = {
  name: 'Jane Smith',
  position: 'Payroll Manager',
  period: 'Jun 01 – Jun 30, 2025',
  salary: 5000,
  tax: 750
}

const downloadPDF = () => {
  const doc = new jsPDF()
  doc.setFontSize(16)
  doc.text('Employee Payslip', 20, 20)

  const lines = [
    `Name: ${payslip.name}`,
    `Position: ${payslip.position}`,
    `Period: ${payslip.period}`,
    `Salary: $${payslip.salary}`,
    `Tax Deducted: $${payslip.tax}`,
    `Net Pay: $${payslip.salary - payslip.tax}`
  ]

  lines.forEach((line, index) => {
    doc.text(line, 20, 40 + index * 10)
  })

  doc.save(`${payslip.name.replace(" ", "_")}_Payslip.pdf`)
}
</script>
