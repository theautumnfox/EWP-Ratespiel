// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
let randomNumber = 0

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.
let versuchszahl = 0;
/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */
$(".btn-primary").on("click", function(){
	versuchszahl = 7;
	randomNumber = Math.floor(Math.random() * 100 + 1);
	$(".result").empty();
	$(".versuche").text("Bisherige Zahlen : ");
	$(".list-group").empty();
	$(".list-group").append('<li class="list-group-item list-group-item-warning">'+'Bisherige Versuche' +'(Du hast noch ' + versuchszahl+ ' Versuche übrig)'+'</li>');
	$(".spielbody").removeClass("win");
	$(".spielbody").removeClass("lose");
}
);

/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */

$(".btn-info").on("click", function(){
	
	let zahl = $("#user-input").val();
	
	$(".result").append(zahl); 
	versuchszahl -=1;
	$(".result").append("Du hast noch " + versuchszahl + " Versuche.");
	if (versuchszahl > 0){
		$(".result").text("danke für die Zahl "+zahl +".");
		//test//
		if (zahl > randomNumber){
			$('.list-group').append('<li class="list-group-item">'+'Sie ist zu groß.' +'<span class="badge">' +zahl+ '</span> </li>');
		$(".result").append(" Sie ist zu groß. ");
	}
	else if( zahl < randomNumber){
		$('.list-group').append('<li class="list-group-item">'+'Sie ist zu klein.' +'<span class="badge">' +zahl+ '</span> </li>');
	}
	else{
		alert(" Wow! Du hast gewonnen. Nochmal? Drück den Start-Button ");
		$(".spielbody").addClass("win");
		return;
	}
	}
	else {
		alert("Verloren! Nochmal? Drück den Start-Button");
		$(".spielbody").addClass("lose");
		return
	}
	
	
	$(".result").append("Du hast noch " + versuchszahl + " Versuche.");
}
);
	
		
		
		
		
		
	
	/**	
	let input = $("#user-input").val();
	$(".result").text(input);
	let versuchszahl =5;
	if (versuchszahl > 0){
		$(".result").text("danke für deine Zahl");
	if (input > randomNumber){
			$(".result").text("Sie ist zu groß");
		}
		else if ($("#user-input")< randomNumber){
			$(".result").text("Sie ist zu klein");
	}
		else{
			$(".result").text("Wow! Du hast richtig geraten!");
		};}
	else{
		$(".result").text("Du hast leider verloren!");
		} */
