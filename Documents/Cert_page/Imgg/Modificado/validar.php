<?php
include('conexion.php');
$usuario=$_POST['username'];
$contraseña=$_POST['pass'];
session_start();
$_SESSION['usuario']=$usuario;


$consulta="SELECT*FROM tab_usuarios where usuario='$usuario' and usr_pass='$contraseña'";
$resultado=pg_query($con,$consulta);

if($resultado){
  if(pg_num_rows($resultado)>0){
    header("location:home.php");
  }else {
    include("index.html");

  
    echo'<h1 class="bad">ERROR DE AUTENTIFICACION</h1>';
  }
}
?>