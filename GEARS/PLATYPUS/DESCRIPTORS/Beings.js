// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

const BeingsTable = {
	TableName: 'Beings',
	Columns: [
		'TableID', 
		'MushroomCode', 
		'PersonalCode',
		'LocationCode',
		'EducationCode',
		'UniversityCode',
		'ActivityCode',
		'OrganisationCode',
		'PetCode',
		'EmploymentCode',
		'HalexCode'
	],
	Descriptions: {
		1: 'INTEGER PRIMARY KEY AUTOINCREMENT',
		2: 'VARCHAR(100) NOT NULL UNIQUE',
		3: 'VARCHAR(100) NOT NULL UNIQUE',
		4: 'VARCHAR(100) NOT NULL UNIQUE',
		5: 'VARCHAR(100) NOT NULL UNIQUE',
		6: 'VARCHAR(100) NOT NULL UNIQUE',
		7: 'VARCHAR(100) NOT NULL UNIQUE',
		8: 'VARCHAR(100) NOT NULL UNIQUE',
		9: 'VARCHAR(100) NOT NULL UNIQUE',
		10: 'VARCHAR(100) NOT NULL UNIQUE',
		11: 'VARCHAR(100) NOT NULL UNIQUE'
	}
};

export {BeingsTable}