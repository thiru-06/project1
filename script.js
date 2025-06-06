let emplst = [];
function DisplayEmpTable() {
  const tbody = document.getElementById("employeeTableBody");
  tbody.innerHTML = "";
  for (let i = 0; i < emplst.length; i++) {
    const emp = emplst[i];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.email}</td>
      <td>${emp.role}</td>
    `;
    tbody.appendChild(row);
  }
}
function addEmployee(e) {
  e.preventDefault();
  const name = document.getElementById("empName").value.trim();
  const email = document.getElementById("empEmail").value.trim();
  const role = document.getElementById("empRole").value.trim();
  if (name && email && role) {
    emplst.push({ name, email, role });  
    DisplayEmpTable();
    document.getElementById("employeeForm").reset();
  } else {
    alert("Please fill all fields.");
  }
}
document.getElementById("employeeForm").addEventListener("submit", addEmployee);
DisplayEmpTable();
