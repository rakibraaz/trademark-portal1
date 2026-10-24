document.addEventListener("DOMContentLoaded", () => {
    loadRecords();
});

function getRecords() {
    return JSON.parse(localStorage.getItem("trademarks")) || [];
}

function saveRecords(records) {
    localStorage.setItem("trademarks", JSON.stringify(records));
}

function addRecord(event) {
    event.preventDefault();

    const regNo = document.getElementById("regNo").value.trim();
    const brandName = document.getElementById("brandName").value.trim();
    const owner = document.getElementById("owner").value.trim();
    const classNo = document.getElementById("classNo").value.trim();
    const status = document.getElementById("status").value;

    const newRecord = { regNo, brandName, owner, classNo, status };

    const records = getRecords();
    records.push(newRecord);
    saveRecords(records);

    document.getElementById("trademarkForm").reset();
    loadRecords();
}

function updateStats(records) {
    document.getElementById("totalRecords").innerText = records.length;
    
    const uniqueClasses = new Set(records.map(r => r.classNo)).size;
    document.getElementById("totalClasses").innerText = uniqueClasses;

    const uniqueOwners = new Set(records.map(r => r.owner)).size;
    document.getElementById("totalOwners").innerText = uniqueOwners;
}

function loadRecords() {
    const records = getRecords();
    updateStats(records);
    renderTable(records);
}

function renderTable(records) {
    const tableBody = document.getElementById("recordTableBody");
    tableBody.innerHTML = "";

    if (records.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color: #94a3b8; padding: 25px;">No trademark records found. Add your first record above!</td></tr>`;
        return;
    }

    records.forEach((record, index) => {
        const statusClass = record.status.replace(/\s+/g, '-');
        const row = `
            <tr>
                <td><strong>${record.regNo}</strong></td>
                <td>${record.brandName}</td>
                <td>${record.owner}</td>
                <td>${record.classNo}</td>
                <td><span class="badge-status status-${statusClass}">${record.status}</span></td>
                <td><button class="delete-btn" onclick="deleteRecord(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteRecord(index) {
    const records = getRecords();
    records.splice(index, 1);
    saveRecords(records);
    loadRecords();
}

function searchRecords() {
    const filter = document.getElementById("searchInput").value.toLowerCase();
    const records = getRecords();

    const filteredRecords = records.filter(record => 
        record.regNo.toLowerCase().includes(filter) ||
        record.brandName.toLowerCase().includes(filter) ||
        record.owner.toLowerCase().includes(filter)
    );

    renderTable(filteredRecords);
}
