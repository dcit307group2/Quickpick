
function startCountdown(futureTime, phpNowTime,containerName) {
    // code to be executed

    var countDownDate = futureTime
    var now = phpNowTime

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        // 1. JavaScript
        // var now = new Date().getTime();
        // 2. PHP
        now = now + 1000;

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById(containerName).innerHTML = "<b style='color:lightgray; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.8rem;'>Request Code In : </b> <b style='color:lime; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.8rem;'>"+seconds+"</b> <b style='color:lightgray; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.5rem;'>seconds</b>";


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(cont).innerHTML = "<a style='color:white; margin-top:10px; margin-bottom:10px; margin-left:5px;font-size:0.8rem; text-decoration: underline blue 2px;' href='../backend/sms/sendsms.php?verification_page'>Request New Code</a>"
        }
    }, 1000);

  }
