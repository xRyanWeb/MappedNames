function getNames() {
	const fruitNames1 = [
		{
			names1: [ 'Apple', 'Pear', 'Lemon', 'Mango' ],
			id: Math.floor(Math.random() * 3),
			names2: [ 'Plum', 'Kiwi', 'Grape', 'Raspberry' ],

			names3: [ "Apple's", "Pear's", "Lemon's", "Mango's" ],
			names4: [ "Plum's", "Kiwi's", "Grape's", "Raspberry's" ]
		}
	];

	fruitNames1.map((x) => {
		const namesRandom = Math.floor(Math.random() * 3);
		const fruitNames = namesRandom < 2 ? x.names1[namesRandom] : x.names2[namesRandom];
		console.log(`${fruitNames}`);
	});
}

getNames();
