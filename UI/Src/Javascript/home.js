document.addEventListener("DOMContentLoaded", function(){
    const signup_btn = document.querySelector(".custom-signup");
    signup_btn.addEventListener("click", function(e){
        e.preventDefault();
        alert("Redirecting to sign-up");
    })
})

const pieChart = document.getElementById('pieChart').getContext('2d');
new Chart(pieChart, {
    type: 'pie',
    data: {
        lables: ['2 weeks before', 'Last week', 'This week'],
        datasets: [{
            lable: 'Current visits',
            data: [24.7, 18.3, 31.5, 25.5],
            backgroundColor:['rgb(201, 38, 38)','rgb(46, 230, 43)', 'rgb(27, 51, 208)', 'rgba(207, 172, 16, 0.96)' ]
        }]
    }
})

const baseOptions ={
    reponsive: true,
    //maintainAspectRatio: false,
    plugins: {
        legend: {display: true, position: 'bottom'},
        tooltip: { enabled: true}
    },
    layout: {padding: 0}
}

const lineChart = document.getElementById('lineChart').getContext('2d');

if (lineChart) {
    new Chart(lineChart, {
        type: 'line',
        data: {
            lables: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Team A',
                    data: [42, 7, 89, 16, 54, 3, 78],
                    borderColor:'rgb(156, 93, 93)',
                    backgroundColor: ' #5b88bd',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3
                },
                {
                    label: 'Team B',
                    data: [25, 61, 8, 93, 47, 12, 36],
                    borderColor:'rgba(11, 11, 8, 0.47)',
                    backgroundColor: 'rgb(88, 231, 122)',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3
                },
            ]
        },
        option: {
            ...baseOptions,
            scale: {
                x: { grid: {display: flase}},
                y: { beginAtZero: true }
            }
        }
    })
}