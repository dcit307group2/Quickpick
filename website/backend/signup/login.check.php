<?php
session_start();


if(!isset($_POST['submit'])){
    header("location:../../signinsignup/login.php?error=999");
    exit();
  }else{

    session_unset($_SESSION['verification_status']);
 
    $r_phone        =   isset($_POST['phone'])?    $_POST['phone']   :''; 
    $r_password     =   isset($_POST['password'])?    $_POST['password']   :'';

    $c_phone        =   preg_match("/^[0-9]*$/", $r_phone);
    $c_password     =   preg_match("/^[a-zA-Z0-9]*$/", $r_password);

    $phone          =   filter_var($r_phone ,      FILTER_SANITIZE_NUMBER_INT);
    $password       =   filter_var($r_password,    FILTER_SANITIZE_STRING    );

    //--SANITIZING DATA
    // 100 - INVALID PHONE NUMBER
    // 101 - INCORRECT PHONE NUMBER
    // 102 - PHONE NUMBER DOES NOT EXISTS
    // 103 - ILLEGAL CHARACTERS IN PHONE
    // 104 - INCORRECT PASSWORD
    // 999 - FATA ERROR
    // 990 - UNAUTHORIZED ENTRY

    // CONNECTING TO MAIN DATABASE
    if(!$c_phone){
        header("location:../../signinsignup/login.php?error=101");
        exit();
    }elseif(!$c_password){
        header("location:../../signinsignup/login.php?error=103");
        exit();
    }else{

    
        require('..\dbrelated\dbconnector.php');

        if(!$connect){
            header("location:../../signinsignup/login.php?error=999");
            exit();
        }else{
            $select_data    = "SELECT * FROM signup_collector WHERE PHONE=?";

            $login          = mysqli_stmt_init($connect);

            $prepare        = mysqli_stmt_prepare($login, $select_data);

            if(!$prepare){
                header("location:../../signinsignup/login.php?error=999");
                exit();   
            }else{

                mysqli_stmt_bind_param($login, "s", $phone);

                $run    = mysqli_stmt_execute($login);

                if(!$run){
                    header("location:../../signinsignup/login.php?error=999");
                    exit();
                }else{
 
                    $row    = mysqli_stmt_num_rows($login);

                    $data   = mysqli_stmt_get_result($login);
                    
                    $result = mysqli_fetch_assoc($data);

                if(!$result){
                    header("location:../../signinsignup/login.php?error=102");
                    exit();
                }else{
                  $unhash = password_verify($password, $result['PASSWORD']);

                  if($unhash==false){
                    header("location:../../signinsignup/login.php?error=104");
                    exit();
                  }else if($unhash==true){

                    $verification_status=  $result['VERIFIED'];
                    $fullname =  $result['FULLNAME'];

                    $_SESSION['name'] = $fullname;
                    $_SESSION['verification_status'] = $verification_status;

                    //--redirect to homepage
                    header("location:../../signinsignup/homepage.php");
                }
              }
            }
        }
       }
    }
}