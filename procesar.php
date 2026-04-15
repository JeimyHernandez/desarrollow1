<?php
// procesar.php

header('Content-Type: application/json; charset=utf-8');

// Respuesta por defecto
$response = [
    'status' => false,
    'mensaje' => 'Datos inválidos.'
];

// Solo aceptamos POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recoger datos (con saneamiento básico)
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $edad = isset($_POST['edad']) ? intval($_POST['edad']) : null;
    $sueldoPretendido = isset($_POST['sueldo']) ? floatval($_POST['sueldo']) : null;

    // Validación mínima
    if ($nombre !== '' && $edad !== null && $sueldoPretendido !== null) {
        // 1) Cálculo de Renta: descuento del 10%
        $descuento = $sueldoPretendido * 0.10;
        $sueldoNeto = $sueldoPretendido - $descuento; // 0.9 * sueldo

        // Formateo para el mensaje (dos decimales)
        $sueldoNetoFormateado = number_format($sueldoNeto, 2, '.', ',');

        // 2) Evaluación de Perfil
        if ($edad >= 18 && $sueldoNeto > 450) {
            // 3) Construcción de la Respuesta (aprobado)
            $response['status'] = true;
            $response['mensaje'] = "Felicidades ".$nombre.", su perfil es apto. Su sueldo neto tras impuestos será de $".$sueldoNetoFormateado.".";
        } else {
            // 3) Construcción de la Respuesta (rechazo)
            $response['status'] = false;
            $response['mensaje'] = "Solicitud rechazada. El perfil no cumple con los criterios mínimos de edad o ingresos (Ingreso calculado: $".$sueldoNetoFormateado.").";
        }
    } else {
        $response['mensaje'] = "Datos incompletos.";
    }
} else {
    $response['mensaje'] = "Método no permitido.";
}

// Devolver JSON
echo json_encode($response);
exit;