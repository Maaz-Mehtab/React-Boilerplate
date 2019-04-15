<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 

// include database and object files
// include_once 'config.php';
include_once 'dbconfig.php';
include_once 'PermissionClass.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Permission($db);
 
// read products will be here

// query products
$stmt = $product->read();


$num = $stmt->rowCount();


 
// check if more than 0 record found
if($num>0){
 
    // products array
       $products_arr=array();
   
  // retrieve our table contents
    // fetch() is faster than fetchAll()
 
    
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
                if($freeVisitorId !=null){
                    $timestampexpired = strtotime($trial_start_end);
                   
                        $dt = new DateTime();
                        $currentDate= $dt->format('Y-m-d H:i:s');
                       $timestamp = strtotime($currentDate);
                   
                    if($timestamp < $timestampexpired){
                        if($no_of_visit_attempt < $trial_start_date){
                        $sql="UPDATE free_visitors set no_of_visit_attempt =$no_of_visit_attempt+1 where user_id=$freeVisitorId";
                         $db->query($sql) ;

                        $product_item=array(
                          "message" => "Free Visitor attemp+1 successful",
                          "message_id" => 1);
                     
                         array_push($products_arr, $product_item);
                             print_r($product_item);
                          
                    }
                         $a = 2 ;
                    }
                     $a = 3 ;
                    
                 
                }
                 else if($paidSellerId =null){
                    echo "paidSellerId.$paidSellerId";
                }
                
                else if($paidSellerId !=null){
                    echo "freeSellerId.$freeSellerId";
                }
                  else if($paidSellerId !=null){
                    echo "paidvisitorId.$paidvisitorId";
                }
         
           
        //  if($no_of_visit < $allow_visit && $type == 'free'){
             
    
         
        // $sql = "UPDATE assign_memebership SET no_of_visit = $no_of_visit+1  WHERE user_id=$user_id";
        
        // $db->query($sql) ;
            
        //     $a = 3 ;
            
        
        //  }else if($type == 'paid' && strtotime(date('Y-m-d')) < strtotime($duration) ){
             
        //      $a = 1 ;
             
        //  }else{
             
        //     $a = 2 ;
        //  }
 
            
            //  array_push($products_arr,$product_item);
            
      
      
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($products_arr);
    
}

else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("records" => 2)
    );
}


?>