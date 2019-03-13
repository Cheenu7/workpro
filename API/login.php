<?php
     include 'connection.php';
     header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	 $response=array();
if($con){

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
     function test_input($data) {
				  global $con;
				  global $response;
  				$data = trim($data);
  				$data = stripslashes($data);
  				$data = htmlspecialchars($data);
				$data = mysqli_real_escape_string($con,$data);
  				return $data;
			}

     function result($status,$msg){
				global $response;
				global $con;
				mysqli_close($con);
				$response['statuscode']=$status;
				$response['msg']=$msg;
				echo json_encode($response);
			}

             $postdata=file_get_contents("php://input");
	         $obj=json_decode($postdata);
	         $email = $obj->email;
             $password = $obj->password;
             $sql="SELECT uid,email,password FROM users WHERE email='$email' and password='$password'";
             $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
		         if ($count == 0) {
			         result(0,'Invalid username or Password');  
                    }
		          else{ 
					   $query="SELECT uid,name,email,mobile,usertype FROM users WHERE email='$email'";
					   $result = mysqli_query($con,$query);
                       while($row=mysqli_fetch_assoc($result)){
                        $data[]=$row; 
                     }
                       
				       $response['data']=$data;
				       $response['statuscode']=1;
				       echo json_encode($response);
					   mysqli_close($con);
					  /* if(mysqli_query($con,$sql)){
								result(1,"login success");
							}else{
								
								result(0,"can't fetch data");
							}*/
					   }
    }
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}

?>