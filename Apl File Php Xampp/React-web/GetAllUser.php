<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

// connection ko include kia hai.. har file mein krna lazmi

$data = array();


// is trha hum request se get krte hain.. agr post request hai tw $_GET ki jaga _POST ayega
// $ sign walaey variables hai php mein and braket k ander wali wo node hai jo tm bhejogey peeche se jis pr data arha hoga.

//$query = "SELECT * FROM setup_user where id = $id";
$query = "select su.id as userId,su.FullName,su.Email ,sd.DepartmentName,sd.Department_Id,sr.RoleName,sr.Role_Id from setup_user su 
left join setup_department sd on su.DepartmentId=sd.Department_Id 
left join setup_role sr on sr.Role_Id=su.RoleId
where su.IsActive=1 and sr.isActive=1 and sd.isActive=1";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$userId = $row["userId"];
        $FullName = $row["FullName"];
		$Email = $row["Email"];
		$DepartmentName = $row["DepartmentName"];
		$DepartmentId = $row["Department_Id"];
		$RoleName = $row["RoleName"];
		$RoleId = $row["Role_Id"];
		array_push($data, array("userId"=>$userId,"FullName" => $FullName ,"Email" => $Email ,"DepartmentName" => $DepartmentName ,"DepartmentId" => $DepartmentId ,"RoleName" => $RoleName ,"RoleId" => $RoleId));
}
array_push($alldata,array("record"=>$data ));
      echo json_encode($alldata);
}
	else {
    echo "0 results";
}

?>