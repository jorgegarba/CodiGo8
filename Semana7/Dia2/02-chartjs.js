let ctx = document.getElementById("miGrafico").getContext('2d');
let miGrafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Solteros', 'Casados', 'Viudos', 'Divorciados', 'Convivientes'],
    datasets: [{
      label: '# de personas con estado civil',
      data: [12, 19, 3, 5, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})


let r30 = () => {
  return Math.random() * (30 - 0) + 0;
}

// SIMULAR CAMBIO DE DATOS EN TIEMPO REAL
setInterval(() => {

  miGrafico.data.datasets[0].data = [r30(), r30(), r30(), r30(), r30()];
  miGrafico.update();

}, 1000);