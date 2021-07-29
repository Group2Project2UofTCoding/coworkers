const labels = [
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Monthly Expenses',
    backgroundColor: '#E56F6B',
    borderColor: '#E56F6B',
    data: [10000, 13000, 15000, 12000, 8000, 17000, 20000],
  },
  {
    label: 'Monthly Salary',
    backgroundColor: '#477998',
    borderColor: '#477998',
    data: [20000, 20000, 25000, 25000, 30000, 40000, 35000],
  },
  {
    label: 'Sales',
    backgroundColor: '#48A9A6',
    borderColor: '#48A9A6',
    data: [40000, 50000, 60000, 55000, 80000, 60000, 75000],
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};

var myChart = new Chart(
  document.getElementById('myChart'),
  config
);