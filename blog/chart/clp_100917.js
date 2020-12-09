var ctx = document.getElementById("myChart").getContext("2d");

 //ctx.canvas.style.height = '328px';
// ctx.canvas.parentNode.style.width = '628px';

var data = {
    labels: ["CLP-685", "CLP-675", "CLP-645", "CLP-635"],
    datasets: [
        {
            label: "Japan MSRP",
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            data: [3372,2556,1952,1491]
        },
        {
            label: "China MSRP",
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [3910,3020,2416,1887]
        },
        {
            label: "USA MSRP",
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            data: [6499,5199,3999,3199]
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});
