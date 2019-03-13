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
	        $id = $obj->id;
            $process = $obj->process;
			if($process==1){
                 $query="SELECT users.name, users.email,users.mobile,workers.service,workers.DOB FROM users INNER JOIN workers ON users.uid=$id AND workers.uid=$id";     
                 if($result=mysqli_query($con,$query)){
	              while($row=mysqli_fetch_assoc($result)){
                   $data[]=$row; }
				   
			     $response['data']=$data;
		         $response['statuscode']=1;
		         echo json_encode($response);
		         mysqli_close($con);
	          }
	       else{
		          result(0,"details cannot fetch");
	         }
			}
	}   
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}
?>