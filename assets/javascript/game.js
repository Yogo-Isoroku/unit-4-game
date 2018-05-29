//needs to randomly choose a target number between 19 ands 120
var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var crystals = $("#crystals");

var counter = 0;
// needs to randomly pick and assign to the crystals 1-12 no dupes
var numberOptions = [10, 5, 3, 7];


for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    crystals.append(imageCrystal);

}

crystals.on("click", ".crystal-image", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You Win!");
    }

    else if (counter >= targetNumber) {
        alert("You Lose!");
    }

});