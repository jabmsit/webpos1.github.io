<!DOCTYPE html>
<html>
<head>
    <title>AdDU POS - Login</title>
    <link type="text/css" rel="stylesheet" href="style.css";
</head>
    <body>
    <?php include 'addumenu.php';
       
    ?>
<div> 
         <h2 style="color:white"> User Name </h2>
</div> 
        <form action="DataEntry.html" method="post">
            <h3 style="color:white">
            Name: <input type="text" name="name"><br><br/>
            Email: <input type="text" name="email"><br/>
            <br/>
             </h3>
            <input type="submit" value="Submit" >
            <p>
             </p>
            <?php
            function datetime(){
              date_default_timezone_set("Singapore");
               echo date("d/m/y : H:i:s", time());   }
            datetime();
            ?>
   
</body>

</html>