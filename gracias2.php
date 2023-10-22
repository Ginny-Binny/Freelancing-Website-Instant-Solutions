<?php


$edad=$_POST['edad'];

$nombre=$_POST['nombre'];

$tel=$_POST['tel'];
$cdedo=$_POST['cdedo'];
$correo=$_POST['mail'];
$edociv=$_POST['edociv'];
$hora=$_POST['hora'];
$comentario=$_POST['comentario'];


$cuerpo="Nombre: $nombre \n Edad: $edad \n Estado Civil: $edociv \nTelefono: $tel \nCorreo: $correo \nCiudad y Estado: $cdedo  \n Horario Preferido: $hora \Descripcion del Caso: $comentario";



$para="contacto@viusa.com.mx";

mail($para,"Nuevo correo para Asesoría Migratoria y Legal",$cuerpo,"From: Viusa Web");



echo "<meta http-equiv='Refresh' content='0; url=grupal.php'>";

?>