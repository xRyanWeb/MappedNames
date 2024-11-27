function getNames() {
	// const fruitNames1 =

	const names1 = [ 'Apple', 'Pear', 'Lemon', 'Mango' ];

	const Names2 = [ 'Plum', 'Kiwi', 'Grape', 'Raspberry' ];

	const names3 = [ "Apple's", "Pear's", "Lemon's", "Mango's" ];
	const names4 = [ "Plum's", "Kiwi's", "Grape's", "Raspberry's" ];

	const num1 = Math.floor(Math.random() * 10 + 1);
	const num2 = Math.floor(Math.random() * 10 + 3);

	const namez = [ 'Luke', 'Mike', 'Kyle', 'Matt' ];
	const lastName = [ 'Peterson ', 'Lueser', 'Poster', 'Muter' ];

	// lastName= ['Peterson', 'Nighten', 'Gregsion', 'Basketip']
	const namesRandom1 = Math.floor(Math.random() * 3);

	const namesRandom2 = Math.floor(Math.random() * 3 + 1);

	const names12 = namez[namesRandom1];
	const randomName1 = names1[namesRandom2];

	console.log(`${names12.split()} ${lastName[namesRandom1]} had ${num1} ${randomName1}`);

	if (names12.charAt(0) == names12.charAt(0)) return;
}

getNames();
