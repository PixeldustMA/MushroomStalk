import { AreasTable } from "./DESCRIPTORS/Areas.js";
import { BeingsTable } from "./DESCRIPTORS/Beings.js";
import { PersonalTable } from "./DESCRIPTORS/Personal.js";

import { addCharacter, insert, select } from "./DatabaseRender.js"
import { Quack } from "./RenderFunctions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

class duck {
	constructor(
		letter = ""
	) {
		this.letter = letter;
	}

	tableList() {
		return {
			BeingsTable,
			AreasTable,
			PersonalTable
		}
	}

	async Table() {
		console.log("Table")
		Object.keys(this.tableList()).forEach(tableKey => {
			let table = this.tableList()[tableKey]
			console	.log(table)
			let query = this.fetchTables(table);
			let quacks = Quack(query)
				.then((result) => {
					console.log("Table")
					return result;});
			return quacks;
		});
	}

	fetchTables(tableList) {
		let buildString = this.createTable(tableList.TableName) + '(';
		let colQuery = this.addColumn(tableList.Columns, buildString, tableList.Descriptions);
		console.log(colQuery)
		return colQuery;
	}
	createTable(TABLENAME) {
		return `CREATE TABLE IF NOT EXISTS ${TABLENAME}`
	}
	addColumn(colArray, queryString, descriptionArray) {
		let count = 1
		colArray.forEach(columnName => {
			queryString = queryString + columnName + ' ' + descriptionArray[count] + ', ';
			count += 1; 
		});
		queryString = queryString.slice(0, -2);
		queryString += ')';
		return queryString;
	}
	async searchLetter() {
		let query = `SELECT * FROM Beings WHERE MushroomCode LIKE '${this.letter}%';`
		const q = await select(query);
		return q;
	}
	async newCharacter(charobj) {
		let char = await addCharacter(charobj);
	}
	async areaTableInsert(mushroom, areaCode, tag) {
		console.log(tag)
		let query = `INSERT INTO Areas(MushroomCode, TableID, ${tag}) VALUES ( (?), (?), (?) )`;
		let params = [mushroom, 8, areaCode];
		const inserted = await insert([query, params]);
	}
	async newCharacterPersonalDetails(character, personalCode, mushroom, section, surnameCode, middleCode) {
		let query = 'INSERT INTO Personal ( PersonalCode , MushroomCode , SectionDesignation , FirstName, Parental, Family, Surname, Middle) VALUES ( (?) , (?) , (?) , (?) , (?) , (?), (?), (?) ) ';
		let params = [personalCode, mushroom, 
					section, character.FirstName, character.MiddleName,
					character.LastName, surnameCode, middleCode];
		const inserted = await insert([query, params]);
	}
	async fetchName(mushroomCode) {
		let query = `SELECT * FROM Personal WHERE MushroomCode LIKE '${mushroomCode}%'`;
		const char = await select(query);
		return char
	}
}

export { duck};