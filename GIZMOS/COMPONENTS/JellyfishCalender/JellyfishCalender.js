// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       CALENDER                    //
// ================================= //

class JellyfishCalendar extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {
		const SHADOW = this.attachShadow({mode: 'open'});
		const calendarContainer = document.createElement('div');
		calendarContainer.classList.add('Wrapper_Calendar');
		calendarContainer.innerHTML = this.getInnerHTML();
		let box = this.shadowRoot.getElementById('Table_Calender');
		box.append(this.createChunk());
		SHADOW.appendChild(calendarContainer);
	}
	createChunk(digit, number) {
		let wrapper = document.createElement('div');
		let title = document.createElement('td');
			title.innerHTML = digit.toString();
			title.id = `Row_Title_${number}`;

		wrapper.append(title);
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		for (let index = 0; index <= 12; index++) {
			let cell = document.createElement('td');
			cell.id = `Cell_${months[index]}_${number}`
			wrapper.append(cell);
		};

		return wrapper;
	}
	getInnerHTML() {
		return `
		<style>
		</style>

		<table id = "Table_Calender">
			<tr>
				<th id = "Header_Empty_Cell"></th>

				<th id = "Header_Cell_January">January</th>
				<th id = "Header_Cell_February">February</th>
				<th id = "Header_Cell_March">March</th>

				<th id = "Header_Cell_April">April</th>
				<th id = "Header_Cell_May">May</th>
				<th id = "Header_Cell_June">June</th>

				<th id = "Header_Cell_July">July</th>
				<th id = "Header_Cell_August">August</th>
				<th id = "Header_Cell_September">September</th>

				<th id = "Header_Cell_October">October</th>
				<th id = "Header_Cell_November">November</th>
				<th id = "Header_Cell_December">December</th>
			</tr>
		</table>
		`}
}

window.customElements.define('jellyfish-calendar', JellyfishCalendar);
export { JellyfishCalendar }
