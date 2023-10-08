import { createNewWindow } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { route } from "../../GEARS/GNOME/Routes.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       NAVIGATION MENU             //
// ================================= //

class JellyfishNavigation extends HTMLElement {

	constructor() {
		super ();
	};

	connectedCallback() {

		customElements.whenDefined('jellyfish-navigation').then(() => {
			console.log("NAV BAR LOADED")
			let scurryBox = document.getElementById('Scurrybox');
			scurryBox.addEventListener("click", (event) => {
				const NAVSCURRY =  route("start")
				.then((result) => {
					console.log("SCURRYING")
					window.location.href = result
					return scurryBox}) 
			})

			const groupclick = document.getElementById("groupAnchor");
			groupclick.addEventListener("click", (event) => { 
				createNewWindow("./POCKETS/GROUPINGS/FrameworkGroupings.html");
			})
			const characterclick = document.getElementById('characterAnchor');
			characterclick.addEventListener("click", (event) => {
				createNewWindow("./POCKETS/ARCHIVE/FrameworkArchive.html");
			})
			const sketchClick = document.getElementById('sketchAnchor');
			sketchClick.addEventListener('click', (event) => {
				createNewWindow("./POCKETS/SKETCHBOARD/FrameworkSketchboard.html")
			})
			const pixelPagesClick = document.getElementById('pixelPageAnchor');
			pixelPagesClick.addEventListener('click', (e) => {
				window.location.href = "../../POCKETS/PIXELPAGES/FrameworkPixel.html"
			})

		});

		this.innerHTML = `
		
		<style>

		.nav_list { list-style-type: none; position: relative; 
			top: 0; margin: 0; 
			margin-top: 20px; padding: 0;
			width: 100%; text-align: center; 
			border-bottom-width: 3px; z-index: 10; 
			min-width: 700px;}
		.list_nav { display: inline-block; margin-top: 3px; 
			margin-bottom: 3px; padding-bottom: 10px; 
			width: 17%; font-size: 2rem; 
			font-family: centralia; font-weight: bold;
			color: white; }
		.list_nav a { text-decoration: none; padding: 8px;
			width: 20%; background-color: var(--goblinPink);
			border-radius: 5%; border-style: solid; }
		.list_nav a:hover { background-color: var(--JELLYVIOLET_PURPLE);}
		.active { background-color: var(--JELLYYELLOW_CANARY);}

		.dropdown { position: relative; display: inline-block; }
		.dropdown-content { display: none; min-width: 160px;
							box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
							padding: 12px 12px;
							position: fixed;}
		.dropdown:hover .dropdown-content{ display: block;}
		.scurry { background-color: var(--helixRed) !important;}
		.scurry:hover {background-color: black !important;}
		.verticalButtons { padding: 0px; margin: 1rem 0 2rem 0;}
			</style>

			<header>
			<nav>
			<ul class="nav_list">
				<li class = "list_nav">
					<a href ="" class = "scurry" id = "Scurrybox">
						SCURRY
					</a>
				</li>
				<li class = "list_nav">
					<div class = "dropdown">
						<a href="MenuFiles\\bookMenu.html">
							BOOK
						</a>
						<div class="dropdown-content">
							<div class="verticalButtons">
								<a id = "groupAnchor">
									Groupings
								</a>
							</div>
							<div class="verticalButtons">
								<a id = "characterAnchor">
									Character
								</a>
							</div>
						</div>
					</div>
				</li>
		
			<li class = "list_nav">
				<a href="work.html">
					OTTERS
				</a>
			</li>
		
			<li class = "list_nav">
				<div class = "dropdown">
					<a>
						GAMES
					</a>
				<div>
				<div class="dropdown-content">
					<div class="verticalButtons">
						<a id = "sketchAnchor">
							SKETCH BOARD
						</a>
					</div>
				</div>
			</li>
		
			<li class = "list_nav">
			<div class = "dropdown">
				<a>
					MINI
				</a>
			<div>
		<div class="dropdown-content">
		<div class="verticalButtons">
			<a id = "pixelPageAnchor">
				PIXEL PAGE
			</a>
		</div>
	</div>
		</li>
			</ul>
			</nav>
		</header>
		`
	};
} // Jellyfish Navigation Ends

window.customElements.define('jellyfish-navigation', JellyfishNavigation);

export { JellyfishNavigation };