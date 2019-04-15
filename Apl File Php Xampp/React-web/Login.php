<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

// connection ko include kia hai.. har file mein krna lazmi

$data = array();
$Email = $_GET['Email'];
$Password = $_GET['Password'];

// is trha hum request se get krte hain.. agr post request hai tw $_GET ki jaga _POST ayega
// $ sign walaey variables hai php mein and braket k ander wali wo node hai jo tm bhejogey peeche se jis pr data arha hoga.

//$query = "SELECT * FROM setup_user where id = $id";
$query = "SELECT * FROM setup_user where Email='$Email' and Password='$Password' and IsActive=1";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$Id = $row["id"];
        $Email = $row["Email"];
        $FullName = $row["FullName"];
        $Password = $row["Password"];
		$RoleId = $row["RoleId"];
		$DepartmentId = $row["DepartmentId"];
					
	   array_push($data, array("id"=>$Id,"Email" => $Email, "Password" => $Password, "FullName" => $FullName ,"RoleId"=> $RoleId ,"DepartmentId" =>$DepartmentId));
}

$query1 = "SELECT * FROM setup_role_access where Role_Id='$RoleId' and Active=1";	
$result1 = mysqli_query($conn, $query1);
$data1 = array();

if (mysqli_num_rows($result1) > 0) {
	while($row = mysqli_fetch_assoc($result1)) {
		$Role_Access_Id = $row["Role_Access_Id"];
        $Role_Id = $row["Role_Id"];
        $Menu_Id = $row["Menu_Id"];
		array_push($data1, array("Role_Access_Id"=>$Role_Access_Id,"Role_Id" => $Role_Id, "Menu_Id" => $Menu_Id ));
}

	
	$query2 = "SELECT * FROM setup_menu where Active=1";	
$result2 = mysqli_query($conn, $query2);
$data2 = array();

if (mysqli_num_rows($result2) > 0) {
	while($row = mysqli_fetch_assoc($result2)) {
		$MenuId = $row["MenuId"];
        $Menu_Name= $row["Menu_Name"];
        $Menu_Url= $row["Menu_Url"];
		$Parent_Id= $row["Parent_Id"];
		array_push($data2, array("MenuId"=>$MenuId,"Menu_Name" => $Menu_Name, "Menu_Url" => $Menu_Url, "Parent_Id" => $Parent_Id  ));
}
	array_push($alldata,array("data"=>$data ,"data1"=>$data1,"data2"=>$data2));
	

      echo json_encode($alldata);
   // ech
}
}
}
	else {
    echo "0 results";
}

?>