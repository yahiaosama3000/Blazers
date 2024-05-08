// Dummy organization data for demonstration
const organizations = [
    { id: 1, name: 'Resala', email: 'Resala@example.com' },
    { id: 2, name: 'Orman', email: 'Orman@example.com' },
    { id: 3, name: '57357', email: '57357@example.com' }
];

// Function to display organizations in the table and dropdown menu
function displayOrganizations() {
    const tbody = document.querySelector('#orgList tbody');
    const select = document.getElementById('organizationSelect');
    tbody.innerHTML = '';
    select.innerHTML = '<option value="" selected disabled>Select an organization</option>';
    organizations.forEach(org => {
        // Add organization to table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${org.id}</td>
            <td>${org.name}</td>
            <td>${org.email}</td>
        `;
        tbody.appendChild(row);

        // Add organization to dropdown menu
        const option = document.createElement('option');
        option.value = org.id;
        option.textContent = org.name;
        select.appendChild(option);
    });
}

// Function to view organization details
function viewOrganization(id) {
    const organization = organizations.find(org => org.id == id);
    if (organization) {
        alert(`Organization ID: ${organization.id}\nName: ${organization.name}\nEmail: ${organization.email}`);
    }
}

// Call function to display organizations on page load
displayOrganizations();
