

// donut chart

var options = {
    series: [42, 26],
    chart: {
        height: 250,
        type: 'donut',
    },
    labels: ["Agent", "Member"],
    plotOptions: {
        pie: {
            donut: {
                size: '75%'
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c', '#eeb902'],

};

var chart = new ApexCharts(document.querySelector("#donut-user-chart"), options);
chart.render();


