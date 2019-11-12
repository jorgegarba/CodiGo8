$(document).ready(function () {

  $('#miTabla').DataTable(
    {
      "language": {
        "decimal": "",
        "emptyTable": "No hay datos disponibles en la tabla",
        "info": "Mostrando _START_ al _END_ de _TOTAL_ registros",
        "infoEmpty": "Mostrando 0 al 0 de 0 registros",
        "infoFiltered": "(filtrado de _MAX_ registros en total)",
        "infoPostFix": "",
        "thousands": ",",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "No se encontraron coincidencias",
        "paginate": {
          "first": "Primero",
          "last": "Ultimo",
          "next": "Siguiente",
          "previous": "Anterior"
        },
        "aria": {
          "sortAscending": ": activate to sort column ascending",
          "sortDescending": ": activate to sort column descending"
        }
      }
    });


});