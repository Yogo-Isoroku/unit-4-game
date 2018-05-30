$(document).ready(function () {

    //needs to randomly choose a target number between x=19 and y=120
    let targetNumber = [Math.floor(Math.random() * ((120 - 19) + 1)) + 19];
    let wins = 0;
    let losses = 0;
    let counter = 0;

    $("#number-to-guess").text(targetNumber);
    $('.wins').text(wins);
    $('.losses').text(losses);
    $('.userTotal').text(counter);

    // needs to randomly pick and assign to the crystals 1-12 no dupes
    let secretNumbers = [];

    for (let i = 0; i < 4; i++) {
        let crystalNumber = [Math.floor(Math.random() * ((12 + 1) - 1))];

        secretNumbers.push(Number(crystalNumber));
    }
    console.log(secretNumbers);

    //pull from array to assign numbers to crystals
    var red = secretNumbers[0];
    var amber = secretNumbers[1];
    var purple = secretNumbers[2];
    var green = secretNumbers[3];

    // new game not generating new targetNumber or new secretNumbers
    function newGame() {
        let = targetNumber = [Math.floor(Math.random() * ((120 - 19) + 1)) + 19];
        counter = 0;
        secretNumbers = [];
        for (let i = 0; i < 4; i++) {
            let crystalNumber = [Math.floor(Math.random() * ((12 + 1) - 1))];
            secretNumbers.push(Number(crystalNumber));
        }
        var red = secretNumbers[0];
        var amber = secretNumbers[1];
        var purple = secretNumbers[2];
        var green = secretNumbers[3];
    }
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
    })
});