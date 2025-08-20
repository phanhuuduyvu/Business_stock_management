document.addEventListener("DOMContentLoaded", function () {
  const signup_btn = document.querySelector(".custom-signup");
  if (signup_btn) {
    signup_btn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to sign-up");
    });
  }

  // ==== PIE CHART ====
  const pieEl = document.getElementById("pieChart");
  if (pieEl) {
    const pieChart = new Chart(pieEl.getContext("2d"), {
      type: "pie",
      data: {
        labels: ["2 weeks before", "Last week", "This week"], // 3 labels
        datasets: [
          {
            label: "Current visits",
            data: [24.7, 18.3, 31.5], // 3 values to match
            backgroundColor: [
              "rgb(201, 38, 38)",
              "rgb(46, 230, 43)",
              "rgb(27, 51, 208)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
    });
  }

  // ==== SHARED CHART OPTIONS ====
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top", // Fix layout breaking issue
        align: "center",
        labels: {
          usePointStyle: true,
          font: { size: 12 },
        },
      },
      tooltip: { enabled: true },
    },
    layout: { padding: 0 },
  };

  // ==== LINE CHART ====
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
        ...baseOptions,
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true },
        },
      },
    });
  }

  // ==== RADAR CHART ====
  const radarCanvas = document.getElementById("radarChart");
  if (radarCanvas) {
    const radarCtx = radarCanvas.getContext("2d");
    new Chart(radarCtx, {
      type: "radar",
      data: {
        labels: [
          "Raw materials",
          "Sale trend",
          "Finshed good",
          "Quantity",
          "Added consistently",
          "Number of remove",
        ],
        datasets: [
          {
            label: "Series 1",
            data: [80, 40, 30, 50, 90, 50],
            backgroundColor: "rgba(33, 117, 255, 0.3)",
            borderColor: "blue",
            pointBackgroundColor: "blue",
          },
          {
            label: "Series 2",
            data: [20, 60, 90, 10, 30, 70],
            backgroundColor: "rgba(255, 180, 26, 0.3)",
            borderColor: "orange",
            pointBackgroundColor: "orange",
          },
          {
            label: "Series 3",
            data: [50, 70, 60, 80, 30, 40],
            backgroundColor: "rgba(44, 188, 224, 0.3)",
            borderColor: "cyan",
            pointBackgroundColor: "cyan",
          },
        ],
      },
      options: {
        ...baseOptions,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
          },
        },
      },
    });
  }

  // ==== Filter table ====
  const searchInput = document.getElementById("search");
  const statusFilter = document.getElementById("statusFilter");
  const tableRows = document.querySelectorAll("#dataTable tbody tr");

  if (searchInput && statusFilter) {
    function filterTable() {
      const searchValue = searchInput.value.toLowerCase();
      const statusValue = statusFilter.value;
      tableRows.forEach((row) => {
        const cells = row.getElementsByTagName("td");
        const matchesSearch =
          cells[1].textContent.toLowerCase().includes(searchValue);
        const matchesStatus =
          statusValue === "" || cells[2].textContent === statusValue;
        row.style.display = matchesSearch && matchesStatus ? "" : "none";
      });
    }

    searchInput.addEventListener("input", filterTable);
    statusFilter.addEventListener("change", filterTable);
  }

  // ==== Search items ====
  document
    .getElementById("searchAddedItems")
    .addEventListener("input", function (e) {
      const searchValue = e.target.value.toLowerCase();
      document
        .querySelectorAll("#addedItemsTable tbody tr")
        .forEach((row) => {
          const nameCell = row.querySelector("td");
          row.style.display =
            nameCell && nameCell.textContent.toLowerCase().includes(searchValue)
              ? ""
              : "none";
        });
    });

  // ==== Add item ====
  document
    .getElementById("addItemForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("newItemName").value.trim();
      const quantity = document.getElementById("newItemQuantity").value.trim();

      if (name && quantity) {
        const tbody = document.querySelector("#addedItemsTable tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${name}</td><td>${quantity}</td><td>0</td><td>0</td>`;
        tbody.appendChild(newRow);

        // Reset fields
        document.getElementById("newItemName").value = "";
        document.getElementById("newItemQuantity").value = "";
      }
    });
});

// ==== Utils ====
function getLastSevenMonths() {
  const labels = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    labels.push(d.toLocaleString("en-US", { month: "short" }));
  }
  return labels;
}

function getRandomValue() {
  const random = [];
  for (let i = 0; i <= 6; i++) {
    random.push(Math.floor(Math.random() * 201));
  }
  return random;
}

let tasks = [
  { name: "Prepare Monthly Financial Report", status: "Pending" },
  { name: "Design New Marketing Campaign", status: "Pending" },
  { name: "Analyze Customer Feedback", status: "Pending" },
  { name: "Update Website Content", status: "Pending" },
  { name: "Conduct Market Research", status: "Pending" }
];

function renderTasksTable() {
  const tbody = document.querySelector("#tasksTable tbody");
  tbody.innerHTML = "";
  tasks.forEach(task => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${task.name}</td><td>${task.status}</td>`;
    tbody.appendChild(tr);
  });
}

// Initial render
renderTasksTable();

document.getElementById("addTaskBtn").addEventListener("click", function() {
  const newTask = document.getElementById("newTaskInput").value.trim();
  if(newTask) {
    tasks.push({ name: newTask, status: "Pending" });
    renderTasksTable();
    document.getElementById("newTaskInput").value = "";
  }
});

