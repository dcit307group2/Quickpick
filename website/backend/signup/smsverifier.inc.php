<?php

session_start();

  //--SANITIZING DATA
   // 000 - UNAUTHORIZED GATEWAY
    // 10 - ILLEGAL CHARACTERS IN CODE
    // 101 - FATAL ERROR 
    // 111 - INCORRECT CODE

if(!isset($_POST['submit'])){
    header("location: ../../signinsignup/smsverification.php?error=000");
    exit();
}else{
   $r_code        =   isset($_POST['code'])?       $_POST['code']      :'';
   $c_code        =   preg_match("/^[0-9]*$/",       $r_code);
   $code          =   filter_var($r_code ,      FILTER_SANITIZE_NUMBER_INT);

   echo "<script>alert($code)</script>";

   if(!$c_code){
      //-- if the input contains illegal characters
      header("location:../../signinsignup/smsverification.php?error=10");
      exit();
   }else{
      if(!isset($_SESSION['verification_code'])){
         header("location: ../../signinsignup/smsverification.php?error=101");
         exit();
      }else{
         $MAIN_KEY = $_SESSION['verification_code'];


         if($code!=$MAIN_KEY){
            header("location: ../../signinsignup/smsverification.php?error=111");
         }else{
            //--IF THE KEY IS CORRECT
                        //now connect to the database and update the verification status
                  require('..\dbrelated\dbconnector.php');

                  if ($connect){


                  //============ERROR MESSAGES ===========
                  //30 = PHONE NUMBER ALREADY EXISTS
                  //31 = EMAIL ALREADY EXISTS
                  //1000 = UNKNOWN ERROR 
                  //============================

                  $phone = $_SESSION['phone_number'];

                  $PHONE_data_select     = "SELECT PHONE FROM  signup_collector WHERE PHONE='$phone' ";
                  $PHONE_select          = mysqli_query($connect, $PHONE_data_select);
                  $PHONE_result          = mysqli_num_rows($PHONE_select);
                  
                  if($PHONE_result<=0){
                  header("location:../../signinsignup/homepage.php?error=100");
                  }else{
                     $data_insert = "UPDATE signup_collector SET VERIFIED = ? WHERE PHONE='$phone'";

                     $insert      = mysqli_stmt_init($connect);

                     if(mysqli_stmt_prepare($insert, $data_insert)){

                     $verified = true;

                     mysqli_stmt_bind_param($insert, "i", $verified);

                     $run = mysqli_stmt_execute($insert);

                     if($run){
                           // SENDING SMS FOR VERIFICATION
                           header("location: ../../signinsignup/homepage.php");
                           mysqli_close($connect);
                     }else{  
                        header("location:../../signinsignup/smsverification.php?error=10");
                     }
                  }
                }
               }

            header("location: ../../signinsignup/homepage.php");
         }
      }
   }

}