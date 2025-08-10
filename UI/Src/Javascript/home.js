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
            ...baseOptions,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true },
            },
        },
    });
}

const barChart = document.getElementById("barChart");
if(barchart){
    new Chart(barChart.getContext("2d"), {
        type: 'bar',
        data: {
            labels: getLastSevenMonths(),
        }
    })
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

