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

				<form class="login100-form validate-form" method="POST" action="../backend/sms/sendsms.php?verification_page">
					<span class="login100-form-title">
						Verifying Courier
					</span>

					<div id="errorMessage" class="text-center p-b-10 text-danger font-weight-bold">
							
					</div>
					
						<!-- VIN -->
						<div class="wrap-input100 validate-input" data-validate = "">
							<label class="text" style="color: rgb(196, 194, 194); font-size: 0.6rem; margin-left: 1rem;margin-top: 1rem;" for="chooseFile">Moto/Vehicle Registration Number</label>
							<input class="input100" type="phone" name="" placeholder="Registration Number">
							<span class="symbol-input100">
								<i class="fa fa-sort-numeric-desc mt-5" aria-hidden="true"></i>
							</span>
						</div>

						<!-- UPLOAD IMAGE OF CAR -->						
						<div class="wrap-input100 validate-input">
							<label class="text" style="color: rgb(196, 194, 194); font-size: 0.6rem; margin-left: 1rem;margin-top: 1rem;" for="chooseFile">Upload Image of Vehicle/Moto</label>
							<input class="files input100" type="file" id="chooseFile" accept="image/*" name="name">
							<span class="symbol-input100">
								<i class="fa fa-file-photo-o mt-5" aria-hidden="true"></i>
							</span>
						</div>

						<!-- UPLOAD IMAGE OF CAR -->						
						<div class="wrap-input100 validate-input">
							<label class="text" style="color: rgb(196, 194, 194); font-size: 0.6rem; margin-left: 1rem;margin-top: 1rem;" for="chooseFile">Upload A Selfie of Yourself</label>
							<input class="files input100" type="file" id="chooseFile" accept="image/*" name="name">
							<span class="symbol-input100">
								<i class="fa fa-file-photo-o mt-5" aria-hidden="true"></i>
							</span>
						</div>

						<!-- DESCRIPTION ABOUT CAR -->
						<div class="wrap-input100 validate-input" data-validate = "">
							<label class="text" style="color: rgb(196, 194, 194); font-size: 0.6rem; margin-left: 1rem;margin-top: 1rem;" for="chooseFile">Car Type, Year and Color Description</label>
							<textarea class="form-control rounded-5" rows="5" type="text" name="" placeholder="Toyota Camry 2019, Light gray color">
								
							</textarea>
						</div>

					<!-- VERIFICATION -->
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							CREATE ACCOUNT
						</button>
					</div>


					<div class="text-center p-t-136">
						<a class="txt2" href="login.html">
							Already Have An account? Login
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
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