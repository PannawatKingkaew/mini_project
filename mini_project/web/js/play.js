cards.init({table:'.card-table', type:STANDARD});

deck = new cards.Deck();
deck.x = 1027;
deck.y = 288;

deck.addCards(cards.all);
deck.render({immediate:true});

lowerhand = new cards.Hand({faceUp:true,  y:581});
var hands = 0;

discardPile = new cards.Deck({faceUp:true});
discardPile.x = 610;
discardPile.y = 298;

var decks = 28;
var drops = 0;
var point = 0;


var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime()
{
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds%60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}
function pad(val)
{
	var valString = val + "";
	if(valString.length < 2)
	{
		return "0" + valString;
	}
	else
	{
		return valString;
	}
}


deck.click(function(card)
{
	if (hands == 0 && decks == 28 ){
		deck.deal(5, [lowerhand], 50, function()
		{
			discardPile.addCard(deck.topCard());
			discardPile.render();
			hands+= 5;
			document.getElementById("hands").innerHTML = hands;
			drops+= 1;
			document.getElementById("drops").innerHTML = drops;
			decks-= 6;
			document.getElementById("decks").innerHTML = decks;
			A = setInterval(setTime, 1000);}
		);
	}
	if ( hands < 7)
	{
		if (card === deck.topCard())
		{
			lowerhand.addCard(deck.topCard());
			lowerhand.render();
			hands+=1;
			decks-= 1;
			document.getElementById("decks").innerHTML = decks;
			document.getElementById("hands").innerHTML = hands;}
	}
}
);

lowerhand.click(function(card){
	if (card.suit == discardPile.topCard().suit|| card.rank == discardPile.topCard().rank)
	{
		discardPile.addCard(card);
		discardPile.render();
		lowerhand.render();
		drops+= 1;
		point+=1000;
		hands-=1;
		document.getElementById("drops").innerHTML = drops;
		document.getElementById("hands").innerHTML = hands;
		document.getElementById("point").innerHTML = point;
	}
	if (drops == 28)
	{
		clearInterval(A);
		const name = prompt('คุณเล่นเกมนี้จบแล้วโปรดพิมพ์ชื่อของคุณ:');
		document.getElementById("name").innerHTML = name;
	}
});

function how() {
   alert('กดที่เด็คเพื่อเริ่มเกมคุณจะต้องเรียกการ์ดให้ครบโดยคุณจะต้องเรียงการ์ดที่มีสัญลักษณ์เดียวกันหรือเลขเดียวกันก็ได้');
}
