<?php
 if($_REQUEST['message']=="request send"){
		
$query='INSERT INTO `que_ans_table`(`question`, `answer`, `reffernce`) VALUES ';
for($i=0; $i<count($_REQUEST['sendInfo']); $i++){
	$reffernce=rand();
	if($_REQUEST['sendInfo'][$i]['Question']=="" && $_REQUEST['sendInfo'][$i]['Answer'] == ""){ $i++; }
	if($i==0){
		$val="('".$_REQUEST['sendInfo'][$i]['Question']."','".$_REQUEST['sendInfo'][$i]['Answer']."',".$reffernce.")";
	}else{
		$val=",('".$_REQUEST['sendInfo'][$i]['Question']."','".$_REQUEST['sendInfo'][$i]['Answer']."',".$reffernce.")";
	}
	$query .= $val;
}

$servername = "localhost";
$username = "root";
$password = "";
$database = "demo_db";

$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
	$output['message'] = $conn->connect_error;
	return json_encode($output);
} 
$result=$conn->query($query);
if($result){
	echo "Data Inserted Successfuly";
}else{
	echo "Data Not Inserted";
}
		
}else{
	echo "Enter any question";
}
