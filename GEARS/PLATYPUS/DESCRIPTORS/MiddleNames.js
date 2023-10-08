// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

const MiddleNamesTable = {
	TableName: 'MiddleNames',
	Columns: [
		'Middle Name Code',
		'Name'
		],
	Descriptions: {
		1: 'VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE',
		2: 'VARCHAR(100) NOT NULL'

	}
}

export {MiddleNamesTable}