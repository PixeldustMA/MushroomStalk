// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

const TitleTable = {
	TableName: 'Titles',
	Columns: [
		'Title Code',
		'Title'
		],
	Descriptions: {
		1: 'VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE',
		2: 'VARCHAR(100) NOT NULL'

	}
}

export {TitleTable}