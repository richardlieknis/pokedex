function showChartStats(pokemon) {
    const ctx = document.getElementById("pokemonStats");

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
                data: [
                    pokemon.stats[0]["base_stat"],
                    pokemon.stats[1]["base_stat"],
                    pokemon.stats[2]["base_stat"],
                    pokemon.stats[3]["base_stat"],
                    pokemon.stats[4]["base_stat"],
                    pokemon.stats[5]["base_stat"]
                ],
                backgroundColor: [
                    "#47dc6c",
                    "#eB1F23",
                    "#86D2F5",
                    "#c61843",
                    "#3a6ee7",
                    "#3c3c16",
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
                    labels: {
                        fontColor: '#f00'
                    }
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    color: 'white',
                    font: {
                        family: 'pokeBit',
                        size: 10,
                    }
                }
            },
        },
        plugins: [ChartDataLabels]
    });
}