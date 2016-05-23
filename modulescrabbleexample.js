function beginNewGame() {
	var letters = ['a','a','a','a','a','a','a','a','a','b','b','c','c','d','d','d','d',
					'e','e','e','e','e','e','e','e','e','e','e','e','f','f','g','g','g',
					'h','h','i','i','i','i','i','i','i','i','i','j','k','l','l','l','l',
					'm','m', 'n','n','n','n','n','n','o','o','o','o','o','o','o','o','p',
					'p','q','r','r','r','r','r','r','s','s','s','s','t','t','t','t','t',
					't','u','u','u','u','v','v','w','w','x','y','y','z'];

	function getALetter() {
		var letter = letters[Math.floor(Math.random() * letters.length)]; //randomizes letter
		letters.splice(letter,1);                                         //simulates picking letter out of bag
		console.log(letters.length);                                      //shows how many letters are left
		return letter;                                                    //returns letter that you "picked"
	} 

	function showLetters() {
			return letters;                                                   //returns full bag of letters
	}

	return {                                                              //module pattern: returns methods
		getALetter: getALetter,                                           //ensures that the letters array remains private
		showLetters: showLetters                                          //and cannot be accessed or modified from anywhere else
	}; 

}


var player = beginNewGame();
player.getALetter();													  //now we can access the letters array 
player.showLetters();  													  //without making it globally accessible


//What if we want multiple players?
//The problem with this is each player will have their own bag
//Solution? Make the bag a Singleton!