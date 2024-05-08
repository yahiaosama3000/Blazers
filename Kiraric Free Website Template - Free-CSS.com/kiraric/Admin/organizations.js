// Dummy organization data for demonstration
const organizations = [
    { id: 1, name: 'Resala', email: 'contact_us@resala.org' },
    { id: 2, name: '57357', email: '57357@example.com' },
    { id: 3, name: 'Al-Nas Hospital', email: 'alnas@example.com' }
  ];
  
  // Function to display organizations in the table
  function displayOrganizations() {
    const tbody = document.querySelector('#organizationsTable tbody');
    tbody.innerHTML = '';
    organizations.forEach(org => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${org.id}</td>
        <td>${org.name}</td>
        <td>${org.email}</td>
        <td>
          <button onclick="acceptOrganization(${org.id})">Accept</button>
          <button onclick="rejectOrganization(${org.id})">Reject</button>
        </td>
        <td><button onclick="downloadOrganizationInfo(${org.id})">Download</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Function to simulate accepting an organization
  function acceptOrganization(id) {
    const organization = organizations.find(org => org.id === id);
    if (organization) {
      console.log(`Accepted organization ID: ${organization.id}`);
      // Dummy functionality to simulate accepting the organization request
    }
  }
  
  // Function to simulate rejecting an organization
  function rejectOrganization(id) {
    const organization = organizations.find(org => org.id === id);
    if (organization) {
      console.log(`Rejected organization ID: ${organization.id}`);
      // Dummy functionality to simulate rejecting the organization request
    }
  }
  
  // Function to simulate downloading organization information
  function downloadOrganizationInfo(id) {
    const organization = organizations.find(org => org.id === id);
    if (organization) {
      console.log(`Downloading information for Organization ID: ${organization.id}`);
      // Dummy functionality to simulate downloading organization information
    }
  }
  
  // Call function to display organizations on page load
  displayOrganizations();
  