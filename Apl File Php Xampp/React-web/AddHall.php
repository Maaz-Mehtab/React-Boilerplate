<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();

$Hall_Name = $_GET['Hall_Name'];
$CreatedDate = $_GET['CreatedDate'];
$CreatedBy = $_GET['CreatedBy'];
  $dt = new DateTime();
     $currentDate= $dt->format('Y-m-d H:i:s');
   
$query1 = "insert into setup_hall (Hall_Name, isActive, CreatedDate, CreatedBy, 	ModifiedDate, ModifiedBy) 
VALUES ('$Country_name','1','$currentDate','$CreatedBy','0','0')";
$result1 = mysqli_query($conn, $query1);

$query = "select sh.Hall_id ,sh.Hall_Name,su.FullName,su.Email from setup_hall sh
left join setup_user su
on sh.CreatedBy=su.id
where  sh.isActive=1 order by sh.Hall_Name";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $Hall_id = $row["Hall_id"];
        $Hall_Name = $row["Hall_Name"];
        $FullName = $row["FullName"];
        $Email  = $row["Email"];
  
          
     array_push($data, array("Hall_id"=>$Hall_id,"Hall_Name" => $Hall_Name, "Email" => $Email,"FullName" => $FullName));
}
array_push($alldata,array("data"=>$data ));
  

      echo json_encode($alldata);
      }
  else {
    echo "0 results";
}

?>
