<?php

include_once (__DIR__.'/../../lib/Zenoph/Notify/AutoLoader.php');

use Zenoph\Notify\Enums\AuthModel;
use Zenoph\Notify\Enums\TextMessageType;
use Zenoph\Notify\Enums\RequestHandshake;
use Zenoph\Notify\Request\NotifyRequest;
use Zenoph\Notify\Request\SMSRequest;
use Zenoph\Notify\Request\RequestException;

try {
    // set host
    NotifyRequest::setHost("api.smsonlinegh.com");

    // By default requests will be sent using SSL/TLS with https connection.
    // If you encounter SSL/TLS warning or error, your machine may be using unsupported
    // SSL/TLS version. In that case uncomment the following line to set it to false
    // NotifyRequest::useSecureConnection(false);

    // Initialise request object
    $sr = new SMSRequest();

    // set authentication details.
    $sr->setAuthModel(AuthModel::API_KEY);
    $sr->setAuthApiKey("5faece05c73a4f3a0ec0b2c281cb38f495a8583b958856e31f0e5acc987e4538");

    // message properties
    $sr->setMessage("This is a test message!");
    $sr->setMessageType(TextMessageType::TEXT);
    $sr->setSender("QuickPick");     // should be registered

    // destinations in an array or maybe database rows. Just an example
    $numbersArr = array("0549022485");

    // add destinations
    foreach ($numbersArr as $phoneNum)
        $sr->addDestination($phoneNum, false);

    // send message. Message submission is outside the loop for adding destinations.
    $resp = $sr->submit();
}

catch (RequestException $ex){
    // We can form a custom handshake description text or use the application 
    // description text. The application description is the Exception message.
    // Here let's use custom
    $hshk = $rex->getRequestHandshake();
    $hshkDesc = getRequestHandShakeDesc($hshk);

    // output error message.
    die ("Request Error: {$hshkDesc}.");
}

catch (\Exception $ex){
    // output error message
    die ("Error: " . $ex->getMessage());
}