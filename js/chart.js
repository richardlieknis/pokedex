function showChartStats() {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "HP",
                "Attack",
                "Defense",
                "Special-Attack",
                "Special-Defense",
                "Speed",
            ],
            datasets: [{
                data: [7, 8, 3, 5, 2, 3],
                backgroundColor: [
                    "#47dc6c",
                    "#eB1F23",
                    "#86D2F5",
                    "#c61843",
                    "#3a6ee7",
                    "#fcfca6",
                ],
                borderWidth: 0,
                borderRadius: 22,
            }, ],
        },
        options: {
            indexAxis: "y",
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
        },
        plugins: [ChartDataLabels]
    });
}