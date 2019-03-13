<?php
    //include 'connection.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
$target_path = "uploads/";
 
$target_path = $target_path . basename( $_FILES['file']['name']);
 
if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "Upload and move success";
	$image = $_FILES['file']['name'];
	//$image = addslashes(file_get_contents($image));
	saveimage($image);
	
} else {
echo $target_path;
    echo "There was an error uploading the file, please try again!";
}
function saveimage($image)
    {
		$con = mysqli_connect('localhost', 'root', '', 'workprodata');
        $qry="insert into images (images) values ('$image')";
		//$qry="insert into images (images) values ('123')";
        $result=mysqli_query($con,$qry);
        if($result)
        {
            echo " <br/>Image uploaded.";
            //header('location:urlofpage.php');
        }
        else
        {
            echo " error ";
        }
    }
?>	