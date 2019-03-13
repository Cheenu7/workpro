<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	 $response=array();
if($con){

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
  
       $query="SELECT images FROM  images WHERE id ='8'";     
       if($result=mysqli_query($con,$query)){
	   while($row=mysqli_fetch_assoc($result)){
                   $data[]=$row; }
				   
			 $response['data']=$data;
		     $response['statuscode']=1;
		     echo json_encode($response);
		     mysqli_close($con);
	   }
	   else{
		   result(0,"signup failed");
	   }
	}   
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}
?>