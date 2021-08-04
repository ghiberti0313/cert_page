<?php
    include ('conexion.php');
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