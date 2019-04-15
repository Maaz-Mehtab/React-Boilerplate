<?php

 header("Access-Control-Allow-Origin: *");
include('./connection.php');

$query = "select sp.Product_id ,sp.Product_name,su.FullName,su.Email from setup_products sp
left join setup_user su
on sp.CreatedBy=su.id
where  sp.isActive=1 order by sp.Product_name";

$result = mysqli_query($conn, $query);
$alldata=array();
$data = array();
if (mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$Product_id = $row["Product_id"];
        $Product_name = $row["Product_name"];
        $FullName = $row["FullName"];
        $Email  = $row["Email"];
	
					
	   array_push($data, array("Product_id"=>$Product_id,"Product_name" => $Product_name, "Email" => $Email,"FullName" => $FullName));
}
array_push($alldata,array("data"=>$data ));
	

      echo json_encode($alldata);
      }
	else {
    echo "0 results";
}

?>