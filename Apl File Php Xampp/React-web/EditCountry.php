<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$data = array();
$id = $_GET['id'];
$Country_name = $_GET['Country_name'];

$query1 = "update setup_country set Country_name='$Country_name' where Country_id='$id'";
$result1 = mysqli_query($conn, $query1);

$query = "select sc.Country_id ,sc.Country_name,su.FullName,su.Email from setup_country sc
left join setup_user su
on sc.CreatedBy=su.id
where  sc.isActive=1 order by sc.Country_name";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$Country_id = $row["Country_id"];
        $Country_name = $row["Country_name"];
        $FullName = $row["FullName"];
        $Email  = $row["Email"];
	
					
	   array_push($data, array("Country_id"=>$Country_id,"Country_name" => $Country_name, "Email" => $Email,"FullName" => $FullName));
}
array_push($alldata,array("data"=>$data ));
	

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}

?>