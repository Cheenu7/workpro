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
	    $obj = json_decode($postdata);
        $name = $obj->name;
        $email = $obj->email;
        $mobile = $obj->mobile;
        $password = $obj->password;
        $gender = $obj->gender;
        $utype = $obj->utype;
	   
	 //  $obj=json_decode($postdata);
	  // $name=test_input($obj->{'name'});
	  // $email=test_input($obj->{'email'});
	  // $mobile=test_input($obj->{'mobile'});
      // $password=test_input($obj->{'password'});
      // $gender=test_input($obj->{'gender'});
      // $utype=test_input($obj->{'utype'});
       $query="SELECT email FROM  users WHERE email ='$email'";     
        if($result=mysqli_query($con,$query)){
				if(mysqli_num_rows($result)>0){
					 result(0,"email is already used");
				}
				else{
				
				      $sql = "INSERT INTO users (name,email,mobile,password,gender,usertype) VALUES('$name','$email','$mobile','$password','$gender','$utype')";

							if(mysqli_query($con,$sql)){
								 $query2="SELECT uid,name,email,mobile,usertype FROM users WHERE email='$email'";
					             $res = mysqli_query($con,$query2);
                                 while($row=mysqli_fetch_assoc($res)){
                                 $data[]=$row; 
                                  }
                       
				       $response['data']=$data;
				       $response['statuscode']=1;
				       echo json_encode($response);
					   mysqli_close($con);
							}else{
								
								result(0,"signup failed");
							}
					
					}
				}
			}   
    }else{
		die("Connection failed: " . mysqli_connect_error());
	}
?>