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
<!--===============================================================================================-->
</head>
<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100"> 
				<div class="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG">
				</div>

				<form class="login100-form validate-form" action="../backend/signup/signup.check-rider.php" method="POST">
					<span class="login100-form-title">
						Create An Account
					</span>

					<div class="text-center p-b-10 text-danger">
						<a class="txt1" href="signup.html">
							Signup as a Customer
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>

					<div id="errorMessage" class="text-center p-b-10 text-danger font-weight-bold">

					<?php
						if(isset($_GET['error'])){
							if($_GET['error']=="10"){
								echo "Invalid Fullname";
							}else if($_GET['error']=="101"){
								echo "Not Accepting Name below 6 Characters";
							}else if($_GET['error']=="111"){
								echo "Invalid Password";
							}else if($_GET['error']=="11"){
								echo "Passwords Do not match";
							}else if($_GET['error']=="12"){
								echo "Password of 6 characters too short";
							}else if($_GET['error']=="122"){
								echo "Password Too weak.. Try alphanumeric and symbols";
							}else if($_GET['error']=="13"){
								echo "Invalid Phone Number";
							}else if($_GET['error']=="144"){
								echo "Phone Number must be 10 number starting with 0";
							}else if($_GET['error']=="15"){
								echo "Invalid Email";
							}else if($_GET['error']=="30"){
								echo "Phone Number Already Exists";
							}else if($_GET['error']=="31"){
								echo "Email Already Exists";
							}else if($_GET['error']=="1000"){
								echo "An unknown Error Occured";
							}
						}
					?>
					</div>


							<!-- REQUIRING AN EMAIL -->
							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

						<!-- REQUIRING FULL NAME -->
						<div class="wrap-input100 validate-input" data-validate = "Enter Valid Name">
							<input class="input100" type="text" name="fullname" placeholder="Full Name">
							<span class="focus-input100"></span>
							<span class="symbol-input100">
								<i class="fa fa-user" aria-hidden="true"></i>
							</span>
						</div>

					<!-- REQUIRING A PASSWORD -->
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="password" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

					<!-- CONFIRMING PASSWORD -->
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="confirm_password" placeholder="Confirm Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<!-- PHONE NUMBER -->
					<div class="wrap-input100 validate-input" data-validate = "Enter Valid Phone Number">
						<input class="input100" type="tel" name="phone" placeholder="Phone Number" min="10" max="10">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-phone" aria-hidden="true"></i>
						</span>
					</div>
					

					<!-- VERIFICATION -->
					<div class="container-login100-form-btn">
						<button id="submit" name="submit" class="login100-form-btn">
							VERIFY RIDE
						</button>
					</div>
					
					<div class="text-center p-b-10">
						<a class="txt1" style="color:skyblue" href="login.php">
							Already Have an acoount? Login
							<i class="fa fa-long-arrow-left mt-5 m-l-5" aria-hidden="true"></i>
						</a>
					</div>
					
				</form>
			</div>
		</div>
	</div>
	
	

	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->

	<!-- REMOVING JAVASCRIPT AUTHENTICATION -->
	<!-- <script src="vendor/tilt/tilt.jquery.min.js"></script>
	<script >
		$('.js-tilt').tilt({
			scale: 1.1
		})
	</script> -->
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>