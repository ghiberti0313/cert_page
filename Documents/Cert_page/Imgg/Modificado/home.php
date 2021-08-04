<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login V12</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>
	
	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/img-01.jpg');">
			<div style="background-color: white; opacity: .8; width: 90%; height: 650px;">
                <?php
                    include ('conexion.php');
                ?>
                <div style= "margin: 1% auto; border:double; width:80%">
                    <p>Nombre:  Miguel Angel Ochoa Valdivia</p>
                </div>
                <div style= "margin: 1% auto; border:double; width:80%">
                    <p>Usuario: miguelv</p>
                </div>
                <div style= "margin: 1% auto; border:double; width:80%">
                    <p>Puesto: Test Analiser</p>
                </div>
                <div style= "margin: 1% auto; border:double; width:90%; height: 500px">
                    <?php
                       
                        $query="SELECT niv_descripcion FROM tab_Niveles";
                        $consulta=pg_query($con,$query);
                        if($consulta){
                            if(pg_num_rows($consulta)>0){
                                echo "<p>Listado de niveles<br>";
                                echo "-----------------------</p>";
                                while ($obj=pg_fetch_object($consulta)) {
                                        //echo $obj->id_nivel."----><br>";
                                        echo $obj->niv_descripcion."<br>";
                                }
                                
                            }
                        }
                    ?>
                </div>
              
            
            </div>
		</div>
	</div>
	
	
	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>
