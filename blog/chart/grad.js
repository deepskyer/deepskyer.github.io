// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);
	gradient.addColorStop(0, 'rgba(113, 0, 166, 0.3)');
	gradient.addColorStop(0.3, 'rgba(113, 0, 166, 0.15)');
	gradient.addColorStop(0.6, 'rgba(113, 0, 166, 0.03)');
	gradient.addColorStop(1, 'rgba(113, 0, 166, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
    datasets: [{
			label: 'Custom Label Name',
			backgroundColor: gradient,
			pointBackgroundColor: '#8f37b8',
			borderWidth: 2,
            borderColor: '#8f37b8',
            // pointBackgroundColor: 'rgba(148,159,177,1)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
			data: [50, 85, 40, 71, 54, 90]
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
    },

	scales: {
		xAxes: [{
			gridLines: {
				// color: 'rgba(0, 0, 0, 0.1)',
                // lineWidth: 1
                display:false
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1
               
            },

            ticks: {
                beginAtZero: true
            }
            
        }
    ]      
        
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 10,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});