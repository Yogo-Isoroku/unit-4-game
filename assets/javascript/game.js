//instructions Game starts on click
$(document).ready(function () {
     $('.btn').hide();
     $('#instructions').on('click', function () {
         bgMusic.addEventListener('ended', function () {
             this.currentTime = 0;
             this.play();
         }, 
         false);
         bgMusic.play();
         $('.btn').show();
         $('#instructions').hide();
    })

    //choose a target number between 19 and 120
    let targetNumber = [Math.floor(19 + Math.random() * 101)];
    let wins = 0;
    let losses = 0;
    let counter = 0;
    let bgMusic = new Audio('./assets/audio/371516__mrthenoronha__space-game-theme-loop.ogg')

    bgMusic.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    bgMusic.play();
    $("#number-to-guess").text(targetNumber);
    $('.wins').text(wins);
    $('.losses').text(losses);
    $('.userTotal').text(counter);

    //pick and assign to the crystals 1-12 no dupes
    let secretNumbers = [];

    while (secretNumbers.length < 4) {
        let crystalNumber = Math.floor(1 + Math.random() * 11);
        if (!secretNumbers.includes(crystalNumber)) {
            secretNumbers.push(Number(crystalNumber));
        }
    }

    //pull from array to assign numbers to crystals
    let red = secretNumbers[0];
    let amber = secretNumbers[1];
    let purple = secretNumbers[2];
    let green = secretNumbers[3];

    // new game function
    function newGame() {
        counter = 0;
        targetNumber = [Math.floor(19 + Math.random() * 101)]; 
        $("#number-to-guess").text(targetNumber);
        $('.userTotal').text(counter = 0);
        secretNumbers = [];
        while (secretNumbers.length < 4) {
            let crystalNumber = Math.floor(1 + Math.random() * 11);
            if (!secretNumbers.includes(crystalNumber)) {
                secretNumbers.push(Number(crystalNumber));

            }
        }
        red = secretNumbers[0];
        amber = secretNumbers[1];
        purple = secretNumbers[2];
        green = secretNumbers[3];
        console.log(secretNumbers);
    }
        console.log(secretNumbers)  
    // User win
    function userWin() {
        wins++;
        $('.wins').text(wins);
        newGame();
    }
    //User loss
    function userLose() {
        losses++;
        $('.losses').text(losses);
        newGame();
    }

    //attaching number to crystals and click directions
    $('.red').on('click', function () {
        counter = counter + red;
        $('.userTotal').text(counter);
        if (counter == targetNumber) {
            userWin();
        } else if (counter >= targetNumber) {
            userLose();
        }
    })

    $('.amber').on('click', function () {
        counter = counter + amber;
        $('.userTotal').text(counter);

        if (counter == targetNumber) {
            userWin();
        } else if (counter >= targetNumber) {
            userLose();
        }
    })

    $('.purple').on('click', function () {
        counter = counter + purple;
        $('.userTotal').text(counter);

        if (counter == targetNumber) {
            userWin();
        } else if (counter >= targetNumber) {
            userLose();
        }
    })

    $('.green').on('click', function () {
        counter = counter + green;
        $('.userTotal').text(counter);
        if (counter == targetNumber) {
            userWin();
        } else if (counter >= targetNumber) {
            userLose();
        }
    });
    $('#forfeitGame').on('click', function () {
        userLose();
    });

    $('#restartGame').on('click', function () {
        wins = 0;
        losses = 0;
        $('.losses').text(losses);
        $('.wins').text(wins);
        newGame();
    });

    $('#playMusic').on('click', function () {
        bgMusic.play();
    });

    $('#pauseMusic').on('click', function () {
        bgMusic.pause();
    });

});