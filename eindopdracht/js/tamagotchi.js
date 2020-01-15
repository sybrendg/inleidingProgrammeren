var afbeeldingen = ["tamagotchi-tevreden", "tamagotchi-ontevreden.png", "tamagotchi-blij.png", "tamagotchi-dood.png", "tamagotchi-spelen.png"];

var tamagotchi = document.getElementById('tamagotchi');
var antwoordElement = document.getElementById('antwoord')
var schop = 0;
var staatTamagotchi = "Vrolijk";

function voeren(){
    staatTamagotchi = "Blij" // Verandert staat van Tamagotchi naar Blij
    document.getElementsByClassName('staat')[0].textContent = 'Huidige staat: ' + staatTamagotchi; // Verandert classname 'staat' textContent naar 'Blij'.
    tamagotchi.src = "./img/" + afbeeldingen[2];
}

document.getElementById("voeren").addEventListener("click", voeren);

// Door variabele tamagotchi aan te maken en een id aan de img te koppelen, kan je
// de source van de afbeelding veranderen.
// Je activeert de functie door de id van het element te selecteren en een eventListener
// toe te voegen, waardoor je met een click de functie "voeren" uitvoert.

function spelen(){
    staatTamagotchi = "Honger" // Verandert staat van Tamagotchi naar Honger
    document.getElementsByClassName('staat')[0].textContent = 'Huidige staat: ' + staatTamagotchi; // Verandert classname 'staat' textContent naar 'Honger'.
    tamagotchi.src = "./img/" + afbeeldingen[4];
}

document.getElementById("spelen").addEventListener("click", spelen);


function schoppen(){
    // overleden verhogen met 1
    schop++;

    // als schop kleiner is dan 5..
    if( schop <= 4){
        console.log('schop staat op ' + schop);
        staatTamagotchi = "Boos"; // Verandert staat van Tamagotchi naar Boos
        document.getElementsByClassName('staat')[0].textContent = 'Huidige staat: ' + staatTamagotchi; // Verandert classname 'staat' textContent naar 'Boos'.
        tamagotchi.src = "./img/" + afbeeldingen[1];
    // als schop 5 is..
    } else if( schop == 5){
        console.log('schop staat op ' + schop);
        staatTamagotchi = "Dood"; // Verandert staat van Tamagotchi naar Dood
        document.getElementsByClassName('staat')[0].textContent = 'Huidige staat: ' + staatTamagotchi; // Verandert classname 'staat' textContent naar 'Dood'.
        // afbeelding verwisselen
        tamagotchi.src = "./img/" + afbeeldingen[3];
    }

}
// dit is de click op het element met id schoppen
document.getElementById("schoppen").addEventListener("click", schoppen);

// Loop

/* function copyright() {

    var mijnGegevens = ["Sybren de Graaff       ", "Inleiding Programmeren     ", "HvA     ", "2020"];
    var message = "";
    var i;

    for (i = 0; i < mijnGegevens.length; i++) {
        document.getElementById('loop')[0].innerHTML = message+= mijnGegevens[i] + ' ';

    }
}

copyright(); */



/* var aantalGeklikt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var arrayLengte = aantalGeklikt.length;
var huidigGeklikt = 0;
var msg = '';
var i;

for (var i = 0; i >= arrayLengte; i++){
    huidigGeklikt = (i++);
    msg += 'Tamagotchi is overleden aan ouderdom. Gecondoleerd!';
}

document.getElementsByClassName('loop').innerHTML = msg; */


