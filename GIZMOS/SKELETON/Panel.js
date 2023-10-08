// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Goblin Table Glue           //
// ================================= //

class Panel {

	constructor({ Arc,  Piece , Fragments, Sphinx, Toggle }) {
		this.arc = Arc,
		this.pieceName = Piece,
		this.fragmentName = Fragments,
		this.sphinxName = Sphinx
		// this.Toggle = Toggle,
		// this.lightswitch = true;
		// this.counter = -1;
		// this.fragmentList = Object.values(this.fragmentName);
	}

	// FragmentColour() {
	// 	if(this.lightswitch){
	// 		this.lightswitch = false;
	// 		return this.Toggle.Light
	// 	}
	// 	else {
	// 		this.lightswitch = true;
	// 		return this.Toggle.Dark
	// 	}
	// }

	// GetTitle(title) {
	// 	let newTitle = SplitAndSpace(title);
	// 	return newTitle;
	// }

	GetFragment() {
		this.counter += 1;
		let index = this.counter;
		return this.fragmentList[index];
	}
	TablePanel(){
		let Panel = document.createElement('goblin-arc')
		Panel.id = this.arc + "Arc"
		Panel.setAttribute("ArcCat", this.arc)
		Panel.setAttribute("Title", this.GetTitle(this.arc))
		return Panel;
	}
	TableSphinx(colour) {
		let Sphinx = document.createElement('goblin-sphinx')
		Sphinx.id = this.arc + this.sphinxName + "Sphinx";
		Sphinx.setAttribute("SphinxCat", this.sphinxName);
		Sphinx.setAttribute("ArcCat", this.arc);
		Sphinx.setAttribute("GivenColour", colour);
		Sphinx.setAttribute("Title", this.GetTitle(this.sphinxName))
		return Sphinx;
	}
	TablePiece() {
		let Piece = document.createElement('goblin-piece');
		Piece.id = this.arc + this.pieceName + "Piece";
		Piece.setAttribute("PieceCat", this.pieceName);
		Piece.setAttribute("ArcCat", this.arc)
		Piece.setAttribute("Title", this.GetTitle(this.pieceName))
		return Piece;
	}
	TableFragment() {
		let Fragment = document.createElement('goblin-fragment')
		this.fragmentName = this.GetFragment();
		Fragment.id = this.arc + this.pieceName + this.fragmentName + 'Fragment';
		Fragment.setAttribute("FragmentCat", this.fragmentName);
		Fragment.setAttribute("PieceCat", this.pieceName);
		Fragment.setAttribute("ArcCat", this.arc);
		Fragment.setAttribute("ColourScheme", this.FragmentColour());
		Fragment.setAttribute("Title", this.GetTitle(this.fragmentName));
		return Fragment;
	}
	TableCrumb(crumb) {
		let Crumb = document.createElement('goblin-crumb')
		Crumb.id = this.arc + this.pieceName + this.fragmentName + crumb + 'crumb';
		Crumb.setAttribute("CrumbCat", crumb);
		Crumb.setAttribute("FragmentCat", this.fragmentName);
		Crumb.setAttribute("PieceCat", this.pieceName);
		Crumb.setAttribute("ArcCat", this.arc);
		Crumb.setAttribute("ColourScheme", this.FragmentColour());
		Crumb.setAttribute("Title", this.GetTitle(crumb));
		return Crumb;
	}
}

export {Panel };