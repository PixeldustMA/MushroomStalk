// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

const PersonalTable = {
	TableName: 'Personal',
	Columns: [
		'PersonalCode',
		'MushroomCode',
		'SectionDesignation',
		'FirstName',
		'Parental Name',
		'Family Surname',
		'Alternate Surname',
		'Middle Name Code',
		'Surname Code',
		'Titles Code'
	],
	Descriptions: {
		1: 'VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE',
		2: 'VARCHAR(100) NOT NULL',
		3: 'VARCHAR(100) NOT NULL',
		4: 'VARCHAR(100) NOT NULL',
		5: 'VARCHAR(100) ',
		6: 'VARCHAR(100) NOT NULL',
		7: 'VARCHAR(100) ',
		8: 'VARCHAR(100) ',
		9: 'VARCHAR(100) NOT NULL',
		10: 'VARCHAR(100)'
	}
}

export {PersonalTable}
