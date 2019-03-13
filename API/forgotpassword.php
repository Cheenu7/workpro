<?php
     require 'Newfolder/PHPMailerAutoload.php';
     include 'connection.php';
     header('Access-Control-Allow-Origin: *');
	 header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	 $response=array();
$mail = new PHPMailer;
$mail ->isSMTP();
$mail ->Host='smtp.gmail.com';
$mail ->Port=587;
$mail ->SMTPAuth=true; 
$mail ->SMTPSecure='tls';
$mail ->Username='workproofficial@gmail.com';
$mail ->Password='Workpro@123';
$mail ->setFrom('workproofficial@gmail.com','WorkPro_Team');
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
			 
			 $process=$obj->process;
			 if($process==1)
			 {
				 $email = $obj->email;
			     $pin = $obj->pin;
			  $sql="SELECT uid,email,name,password FROM users WHERE email='$email'";
              $query = mysqli_query($con,$sql);
		         $count = mysqli_num_rows($query);
		         if ($count == 0) {
			         result(0,'invalid user');  
                    }
				else{
					$sql2="UPDATE users SET fgtpswd='$pin' WHERE email='$email'";
					if(mysqli_query($con,$sql2)){
						
                       $mail ->addAddress($email);
                       $body="hai user"."<br/>".$pin." "."is the otp to reset your password";
                       $mail ->isHTML(true);
                       $mail ->Subject='reset password';
                       $mail ->Body=$body;
                      if(!$mail->send()){
                         	result(0,'sorry otp not sent');}
                     else{
						 $sql3="SELECT name,uid,fgtpswd FROM users WHERE email='$email'";
						 $query3 = mysqli_query($con,$sql3);
						 while($row=mysqli_fetch_assoc($query3)){
                                 $data[]=$row; }
                       
				         $response['data']=$data;
				         $response['statuscode']=1;
				         echo json_encode($response);
					     mysqli_close($con);
                         }
					}
					}
			 }else{
				   $newpswd=$obj->np;
			       $id=$obj->id;
				   $sql4="UPDATE users SET password='$newpswd' WHERE uid='$id'";
				   if(mysqli_query($con,$sql4)){
					   $sql4="UPDATE users SET fgtpswd=NULL WHERE uid='$id'";
					   $query4=mysqli_query($con,$sql4);
					   result(1,'password changed successfully');
				   }
			 }
}
else{
	echo "no incoming data from post";
}
}
else{
	die("Connection failed: " . mysqli_connect_error());
}

?>