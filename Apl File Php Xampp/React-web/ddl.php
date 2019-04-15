<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

// connection ko include kia hai.. har file mein krna lazmi

$data = array();


// is trha hum request se get krte hain.. agr post request hai tw $_GET ki jaga _POST ayega
// $ sign walaey variables hai php mein and braket k ander wali wo node hai jo tm bhejogey peeche se jis pr data arha hoga.

//$query = "SELECT * FROM setup_user where id = $id";
$query = "SELECT * FROM setup_department where isActive=1";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$Department_Id = $row["Department_Id"];
        $DepartmentName = $row["DepartmentName"];
		array_push($data, array("Department_Id"=>$Department_Id,"DepartmentName" => $DepartmentName));
}

$query1 = "SELECT * FROM setup_role where isActive=1";	
$result1 = mysqli_query($conn, $query1);
$data1 = array();

if (mysqli_num_rows($result1) > 0) {
	while($row = mysqli_fetch_assoc($result1)) {
		$Role_Id = $row["Role_Id"];
        $RoleName = $row["RoleName"];
      
		array_push($data1, array("Role_Id" => $Role_Id, "RoleName" => $RoleName ));
}

	

	array_push($alldata,array("data"=>$data ,"data1"=>$data1));
	

      echo json_encode($alldata);
   // ech

}
}
	else {
    echo "0 results";
}

?>