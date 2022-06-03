<?php

    session_start();

      //-======TESTING SMS FUNCTIONALITIES===================
      include_once ('lib\Zenoph\Notify\AutoLoader.php');
        
      use Zenoph\Notify\Enums\AuthModel;
      use Zenoph\Notify\Enums\TextMessageType;
      use Zenoph\Notify\Enums\RequestHandshake;
      use Zenoph\Notify\Request\NotifyRequest;
      use Zenoph\Notify\Request\SMSRequest;
      use Zenoph\Notify\Request\RequestException;


    if(isset($_SESSION['verification_starttime'])){
         //start by destroying every session if already exists
        unset($_SESSION['verification_starttime']);
        unset($_SESSION['verification_expiry']);
        unset($_SESSION['verification_code']);
    }


    if(!isset($_SESSION['phone_number'])){
        header('location: ./../../signinsignup/smsverification.php?UNAUTHORIZED_ENTRY');
        exit();
    }else{
        $phone = $_SESSION['phone_number'];
    }

    $MESSAGE = 0;
    

            try {
                // set host
                NotifyRequest::setHost("api.smsonlinegh.com");

                // Initialise request object
                $sr = new SMSRequest();

                // set authentication details.
                $sr->setAuthModel(AuthModel::API_KEY);
                $sr->setAuthApiKey("5faece05c73a4f3a0ec0b2c281cb38f495a8583b958856e31f0e5acc987e4538");

                // message properties
                $sixDigitRandomNumber = rand(100000,999999);
                $message = "Your Verification code is $sixDigitRandomNumber. Expire in 1 minute";    

                $_SESSION['verification_starttime'] = time(); // Taking now logged in time.
                // Ending a session in 1 minutes from the starting time.
                $_SESSION['verification_expiry'] = $_SESSION['verification_starttime'] + (60);
                $_SESSION['verification_code']  = $sixDigitRandomNumber;
                    

                $sr->setMessage($message);
                $sr->setMessageType(TextMessageType::TEXT);
                $sr->setSender("QuickPick");     // should be registered

                // destinations in an array or maybe database rows. Just an example
                $numbersArr = array($phone);

                // add destinations
                foreach ($numbersArr as $phone)
                    $sr->addDestination($phone, false);

                // send message. Message submission is outside the loop for adding destinations.
                $resp = $sr->submit();


                $MESSAGE = 1;
                header('location: ./../../signinsignup/smsverification.php?'.$MESSAGE);


                echo $MESSAGE;
            }
            catch (RequestException $ex){
                // We can form a custom handshake description text or use the application 
                // description text. The application description is the Exception message.
                // Here let's use custom
                $hshk = $rex->getRequestHandshake();
                $hshkDesc = getRequestHandShakeDesc($hshk);

                // output error message.
                $MESSAGE = -1;

                header('location: ./../../signinsignup/smsverification.php?'.$MESSAGE);


                die ("Request Error: {$hshkDesc}.");
            }

            catch (\Exception $ex){
                // output error message
                die ("Error: " . $ex->getMessage());
                $MESSAGE = -1;
            }
        