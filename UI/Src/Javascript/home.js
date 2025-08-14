document.addEventListener("DOMContentLoaded", function () {
    const signup_btn = document.querySelector(".custom-signup");
    signup_btn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Redirecting to sign-up");
    })
})

const pieChart = document.getElementById('pieChart').getContext('2d');
new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['2 weeks before', 'Last week', 'This week'],
        datasets: [{
            lable: 'Current visits',
            data: [24.7, 18.3, 31.5, 25.5],
            backgroundColor: ['rgb(201, 38, 38)', 'rgb(46, 230, 43)', 'rgb(27, 51, 208)', 'rgba(207, 172, 16, 0.96)']
        }]
    }
})

const baseOptions = {
    responsive: true,
    //maintainAspectRatio: false,
    plugins: {
        legend: { display: true, position: 'bottom' },
        tooltip: { enabled: true }
    },
    layout: { padding: 0 }
}

const lineCanvas = document.getElementById("lineChart");
if (lineCanvas) {
    new Chart(lineCanvas.getContext("2d"), {
        type: "line",
        data: {
            labels: getLastSevenMonths(),
            datasets: [
                {
                    label: "Team A",
                    data: getRandomValue(),
                    borderColor: "rgb(156, 93, 93)",
                    backgroundColor: "#5b88bd",
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3,
                },
                {
                    label: "Team B",
                    data: getRandomValue(),
                    borderColor: "rgba(11, 11, 8, 0.47)",
                    backgroundColor: "rgb(88, 231, 122)",
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3,
                },
            ],
        },
        options: {
  responsive: true,
  maintainAspectRatio: false,
            ...baseOptions,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true },
            },
        },
    });
}

function getLastSevenMonths(){
    const labels = [];
    const now = new Date();
    for (let i = 6; i>=0; i--){
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        //2025-02-01
        labels.push(d.toLocaleString('en-US', { month: 'short'}));
    }
    console.log(Math.floor(Math.random()));
    Math.random() //random 0->1
    Math.floor //delete the decimal places, only contain whole number
    return labels;
    console.log()
}

function getRandomValue() {
    const random = [];
    for (let i = 0; i<=6; i++){
        //console.log (Math.floor(Math.random() * 201));
        random.push((Math.floor(Math.random() * 201)))
    }
    return random;
}


    const searchInput = document.getElementById('search');
    const statusFilter = document.getElementById('statusFilter');
    const tableRows = document.querySelectorAll('#dataTable tbody tr');

    function filterTable() {
        const searchValue = searchInput.value.toLowerCase();
        const statusValue = statusFilter.value;
        tableRows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            const matchesSearch = cells[1].textContent.toLowerCase().includes(searchValue);
            const matchesStatus = statusValue === '' || cells[2].textContent === statusValue;
            row.style.display = matchesSearch && matchesStatus ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterTable);
    statusFilter.addEventListener('change', filterTable);

    const radarCtx = document.getElementById('radarChart').getContext('2d');
    if (radarCtx) {
        new Chart(radarCtx.getContext("2d"), {
        type: 'radar',
        data: {
            labels: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
            datasets:  [
                {
                    label: 'Series 1',
                    data: '[80, 40, 30, 50, 90, 50]',
                    backgroundColor: 'rgba(33, 117, 255, 0.3)',
                    borderColor: 'blue',
                    pointBackgroundColor: 'blue',
                },
                {
                    label: 'Series 2',
                    data: [20, 60, 90, 10, 30, 70],
                    backgroundColor: 'rgba(255, 180, 26, 0.3)',
                    borderColor: 'orange',
                    pointBackgroundColor: 'orange',
                },
                {
                    label: 'Series 3',
                    data: [50, 70, 60, 80, 30, 40], 
                    backgroundColor: 'rgba(44, 188, 224, 0.3)',
                    borderColor: 'cyan',
                    pointBackgroundColor: 'cyan',
                },
            ],
        },  
        options: {
        responsive: true,
        maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'bottom' },
                title: { display: false }
                     },
                scales: {
                    r: {
                        beginAtZero: true,
                        min: 0,
                        max: 100
                    }
                },
            },
        });
    }

// Search existing items
document.getElementById('searchAddedItems').addEventListener('input', function(e) {
  const searchValue = e.target.value.toLowerCase();
  document.querySelectorAll('#addedItemsTable tbody tr').forEach(row => {
    const nameCell = row.querySelector('td');
    row.style.display = nameCell && nameCell.textContent.toLowerCase().includes(searchValue)
      ? ''
      : 'none';
  });
});

// Add new item with quantity
document.getElementById('addItemForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('newItemName').value.trim();
  const quantity = document.getElementById('newItemQuantity').value.trim();

  if (name && quantity) {
    const tbody = document.querySelector('#addedItemsTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${quantity}</td><td>0</td><td>0</td>`;
    tbody.appendChild(newRow);

    // Reset fields
    document.getElementById('newItemName').value = '';
    document.getElementById('newItemQuantity').value = '';
  }
});
