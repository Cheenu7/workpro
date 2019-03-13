<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname= "sample";
$con = mysqli_connect($servername, $username, $password, $dbname);
if($con)
{
	echo"connection success";
}
else
{
	echo"not conn";
}
$username= $_POST['username'];
$password= $_POST['password'];
$sql ='INSERT INTO users VALUES(7,username,password)';
if(mysqli_query($con, $sql)){  
 echo "Record inserted successfully";  
}else{  
echo "Could not insert record: ". mysqli_error($con);  
}  

mysqli_close($con);

?>
