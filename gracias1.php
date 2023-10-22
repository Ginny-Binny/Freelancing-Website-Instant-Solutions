<?php


$nombreempresa=$_POST['nombreempresa'];

$nombre=$_POST['nombre'];

$tel=$_POST['tel'];
$cdedo=$_POST['cdedo'];
$correo=$_POST['mail'];
$personas=$_POST['personas'];

$comentario=$_POST['comentario'];


$cuerpo="Nombre de la Empresa: $nombreempresa \n Nombre: $nombre  \nTelefono: $tel \nCorreo: $correo \nCiudad y Estado: $cdedo  \n Cantidad de Personas: $personas \nComentarios: $comentario";



$para="contacto@viusa.com.mx";

mail($para,"Nuevo correo para Asesoría Grupal",$cuerpo,"From: Viusa Web");



echo "<meta http-equiv='Refresh' content='0; url=grupal.php'>";

?>