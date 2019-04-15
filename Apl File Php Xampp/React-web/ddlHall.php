<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

// connection ko include kia hai.. har file mein krna lazmi

$data = array();


// is trha hum request se get krte hain.. agr post request hai tw $_GET ki jaga _POST ayega
// $ sign walaey variables hai php mein and braket k ander wali wo node hai jo tm bhejogey peeche se jis pr data arha hoga.

//$query = "SELECT * FROM setup_user where id = $id";
$query = "SELECT * FROM setup_hall where isActive=1";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$Hall_id = $row["Hall_id"];
        $Hall_Name = $row["Hall_Name"];
		array_push($data, array("Hall_id"=>$Hall_id,"Hall_Name" => $Hall_Name));
}
	array_push($alldata,array("data"=>$data ));
	  echo json_encode($alldata);




}
	else {
    echo "0 results";
}

?>