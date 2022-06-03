<?php

session_start();

if(isset($_SESSION['name'])){
    echo $_SESSION['name'] ;
     $_SESSION['verification_status'] = 1;
}