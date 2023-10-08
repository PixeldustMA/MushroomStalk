// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

const AreasTable = {
	TableName: 'Areas',
	Columns: [
		'MushroomCode',
		'DragonCode',
		'WarCode',
		'KessyaCode',
		'NightmareCode',
		'PrimaryPlanetCode'
	],
	Descriptions: {
		1: 'VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE',
		2: 'VARCHAR(100)',
		3: 'VARCHAR(100)',
		4: 'VARCHAR(100)',
		5: 'VARCHAR(100)',
		6: 'VARCHAR(100)',
	}
}

export {AreasTable}
