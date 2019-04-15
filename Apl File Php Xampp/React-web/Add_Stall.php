<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();

$Hall_id = $_GET['Hall_id'];
$Stall_Name = $_GET['Stall_Name'];
// $CreatedDate = $_GET['CreatedDate'];
$CreatedBy = $_GET['CreatedBy'];
  $dt = new DateTime();
     $currentDate= $dt->format('Y-m-d H:i:s');




   
$query1 = "insert into setup_stall (Stall_name,Hall_No,IsActive, CreatedDate,CreateBy,ModifiedDate, ModifiedBy) 
VALUES ('$Stall_Name','$Hall_id','1','$currentDate','$CreatedBy','0','0')";
$result1 = mysqli_query($conn, $query1);

  

 
$query = "Select st.Stall_id ,st.Stall_name,sh.Hall_name,sh.Hall_id as Hall_id, su.FullName,su.Email from setup_stall st
left join setup_user su 
on su.id=st.CreateBy
left join setup_hall sh 
on sh.Hall_id = st.Hall_No
where st.IsActive=1 order by st.Stall_name";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    $Stall_id = $row["Stall_id"];
        $Stall_name = $row["Stall_name"];
         $Hall_name = $row["Hall_name"];
          $Hall_id = $row["Hall_id"];
        $FullName = $row["FullName"];
        $Email  = $row["Email"];
  
          
     array_push($data, array("Stall_id"=>$Stall_id,"Stall_name" => $Stall_name, "Hall_name"=> $Hall_name,"Hall_id"=> $Hall_id, "Email" => $Email,"FullName" => $FullName));
}
array_push($alldata,array("data"=>$data ));
  

      echo json_encode($alldata);
      }
  else {
    echo "0 results";
}

?>  

