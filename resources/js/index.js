$(document).ready(function () {
    $("#guardar").click(function () {

        let estudiante = {
            carrera: $("#carrera").val(),
            nombres: $("#nombres").val(),
            apellidos: $("#apellidos").val(),
            dui: $("#dui").val(),
            nit: $("#nit").val(),
            materia_favorita: $("#materia_favorita").val(),
            justificacion: $("#justificacion").val(),
            fecha_nacimiento: $("#fecha_nacimiento").val(),
        };

        if (!estudiante.carrera ||
            !estudiante.nombres ||
            !estudiante.apellidos ||
            !estudiante.dui ||
            !estudiante.nit ||
            !estudiante.materia_favorita ||
            !estudiante.justificacion ||
            !estudiante.fecha_nacimiento) {

            $("#div_datos").html(`
                <div class='alert alert-warning'>
                    Por favor, complete todos los campos antes de guardar.
                </div>`
            );
        } else {

            $("#div_datos").html(`
                <div class='alert alert-info'>
                    <p>Datos del Estudiante:</p>
                    Carrera: ${estudiante.carrera}<br>
                    Nombres: ${estudiante.nombres}<br>
                    Apellidos: ${estudiante.apellidos}<br>
                    DUI: ${estudiante.dui}<br>
                    NIT: ${estudiante.nit}<br>
                    Materia Favorita: ${estudiante.materia_favorita}<br>
                    Justificación: ${estudiante.justificacion}<br>
                    Fecha de Nacimiento: ${estudiante.fecha_nacimiento}<br>
                    <br>
                    <p>Bienvenido/a a la UCAD</p>
                </div>`);

            $("#carrera").val("");
            $("#nombres").val("");
            $("#apellidos").val("");
            $("#dui").val("");
            $("#nit").val("");
            $("#materia_favorita").val("");
            $("#justificacion").val("");
            $("#fecha_nacimiento").val("");
        }
    });
});