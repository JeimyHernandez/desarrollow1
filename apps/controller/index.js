// app/controller/index.js

$(document).ready(function() {
  $('#formAplicacion').on('submit', function(e) {
    e.preventDefault();

    // Recolectar datos del formulario
    const nombre = $('#nombre').val().trim();
    const edad = $('#edad').val();
    const sueldo = $('#sueldo').val();

    // Validación básica en cliente
    if (!nombre || edad === '' || sueldo === '') {
      Swal.fire('Advertencia', 'Por favor complete todos los campos.', 'warning');
      return;
    }

    // Enviar datos por AJAX (POST) a procesar.php
    $.ajax({
      url: 'procesar.php',
      type: 'POST',
      dataType: 'json',
      data: {
        nombre: nombre,
        edad: edad,
        sueldo: sueldo
      },
      success: function(res) {
        if (res && res.status === true) {
          Swal.fire('Éxito', res.mensaje, 'success');
        } else {
          Swal.fire('Error', res.mensaje, 'error');
        }
      },
      error: function() {
        Swal.fire('Error', 'No se pudo procesar la solicitud. Intente nuevamente.', 'error');
      }
    });
  });
});