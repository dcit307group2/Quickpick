<?php 
session_start();
session_unset($_SESSION['SIGNUP']);

define ("SIGNUP", FALSE);

//--make sure we pressed the signup button before redirecting to checkup session
if(!isset($_SESSION['SIGNUP'])){
    header("location:./signup.check.php");
}else{
    header("location:./signup.php?unknown_error");
}


// if(defined("SIGNUP")){
//     $_SESSION['SIGNUP']="SIGNUP";
//     if (isset($_SESSION['SIGNUP'])){
//         if (isset($_GET['refferal'])){
//             $refferal = $_GET['refferal'];
//             $_SESSION['REFER_ME']= $refferal;
//                 header("location:signup.php?refferal");
//                 exit();    
//         }else{
//         header("location:signup.php");
//         exit();
//     }
// }}else{
//     echo "<div class='container'>
//             <p class='alert-danger h3'>PAGE RESTRICTED TO SIGNUP CLICK</p>
//             <progress></progress>
//           </div>
//          ";
//          header("location:index.php");
// } 

