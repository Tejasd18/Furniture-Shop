document.getElementById('payrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get values from form
    const employeeName = document.getElementById('employeeName').value;
    const baseSalary = parseFloat(document.getElementById('baseSalary').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    const overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
  
    // Constants for calculation
    const standardHours = 40; // Standard workweek hours
  
    // Calculate overtime if applicable
    let overtimePay = 0;
    if (hoursWorked > standardHours) {
      const overtimeHours = hoursWorked - standardHours;
      overtimePay = overtimeHours * overtimeRate;
    }
  
    // Calculate Gross Salary
    const grossSalary = baseSalary + overtimePay;
  
    // Calculate Tax Deduction (e.g., 10% tax rate)
    const taxDeduction = grossSalary * 0.10;
  
    // Calculate Net Salary
    const netSalary = grossSalary - taxDeduction;
  
    // Display results
    document.getElementById('employeeSummary').textContent = `Employee: ${employeeName}`;
    document.getElementById('grossSalary').textContent = `Gross Salary: $${grossSalary.toFixed(2)}`;
    document.getElementById('taxDeduction').textContent = `Tax Deduction (10%): $${taxDeduction.toFixed(2)}`;
    document.getElementById('netSalary').textContent = `Net Salary: $${netSalary.toFixed(2)}`;
  });  