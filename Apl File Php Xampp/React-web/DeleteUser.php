<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();
$id = $_GET['id'];


// Update setup_user setup_user IsActive=1 where id=2
$query1 = "Update setup_user set IsActive='0' where id=$id";

// echo $query1;	
	
$result1 = mysqli_query($conn, $query1);


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