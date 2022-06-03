<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login V1</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script src="../assets/js/countdownFunc.js"></script>
<!--===============================================================================================-->
</head>
<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG">
				</div>

				<form class="login100-form validate-form" action="./../backend/signup/smsverifier.inc.php" method="POST">
					<span class="login100-form-title">
						One Step More. Verify your Phone Number
					</span>

					
					<div id="errorMessage" class="text-center p-b-10 text-danger font-weight-bold">
					<?php
							// 000 - UNAUTHORIZED GATEWAY
							// 10 - ILLEGAL CHARACTERS IN CODE
							// 101 - FATAL ERROR 
							// 111 - INCORRECT CODE

								if(isset($_GET['error'])){
									if($_GET['error']=="000"){
										echo "Unauthorized Gateway";
									}else if($_GET['error']=="10"){
										echo "Code contains illegal charactesr";
									}else if($_GET['error']=="101"){
										echo "A fatal error has occured. Restart App";
									}else if($_GET['error']=="111"){
										echo "Incorrect Code";
									}
								}
							?>
					</div>
					
					
					<!-- VERIFICATION CODE -->
					<div class="wrap-input100 validate-input" data-validate = "">
						<input class="input100" name="code" type="number" name="" placeholder="Enter 6-Digit Code">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-sort-numeric-desc" aria-hidden="true"></i>
						</span>
					</div>
					
					<div id="countdown" class="">
							
					</div>

					<!-- VERIFICATION -->
					<div class="container-login100-form-btn">
					<button id="submit" name="submit" class="login100-form-btn">
						CREATE ACCOUNT
					</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	
<script>
      var expiry = <?php session_start(); if(!isset($_SESSION['verification_expiry'])){echo -1;}else{echo ($_SESSION['verification_expiry']);}  ?> * 1000; //get the time from the session
      var now    = <?php echo time() ?> * 1000;
      var cont   = 'countdown';

      if(expiry==-1){
         document.getElementById(cont).innerHTML = "<b style='color:red; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.8rem;'>Unauthorized Access!</b>"
      }else{
         if(now>expiry){
			document.getElementById(cont).innerHTML = "<a style='color:white; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.8rem; text-decoration: underline blue 2px;' href='../backend/sms/sendsms.php?verification_page'>Request New Code</a>"
         }else{
            startCountdown(expiry,now,cont)
         }
      }

</script>
	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->

</body>




</html>